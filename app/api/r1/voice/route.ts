import { NextResponse } from "next/server";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// CORS headers for React Native app
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Handle preflight requests
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// Types for request and response
interface Category {
  id: number;
  name: string;
}

interface UniqueName {
  id: number;
  name: string;
}

interface VoiceRequest {
  text: string;
  categories: Category[];
  uniqueNames: UniqueName[];
}

interface TransactionResult {
  type: "income" | "expense";
  amount: number;
  categoryId: number | null;
  categoryName: string;
  uniqueNameId: number | null;
  uniqueName: string | null;
  description: string;
}

interface SuccessResponse {
  success: true;
  transaction: TransactionResult;
}

interface ErrorResponse {
  success: false;
  error: string;
  errorCode: "NOT_A_TRANSACTION" | "INVALID_INPUT" | "API_ERROR" | "PARSE_ERROR";
}

type VoiceResponse = SuccessResponse | ErrorResponse;

// Helper to return JSON with CORS headers
function jsonResponse<T>(data: T, status: number = 200): NextResponse<T> {
  return NextResponse.json(data, { status, headers: corsHeaders });
}

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Create the Gemini prompt for parsing transaction
function createPrompt(text: string, categories: Category[], uniqueNames: UniqueName[]): string {
  const categoryList = categories.map(c => `- ${c.id}: ${c.name}`).join("\n");
  const uniqueNameList = uniqueNames.length > 0 
    ? uniqueNames.map(n => `- ${n.id}: ${n.name}`).join("\n")
    : "No saved names yet";

  return `You are a transaction parser for an Indian personal finance app. Your job is to extract transaction details from natural language in English, Hindi, Marathi, Kannada, or any Indian language (including mixed/transliterated forms).

AVAILABLE CATEGORIES:
${categoryList}

SAVED PAYEE/PAYER NAMES:
${uniqueNameList}

USER INPUT: "${text}"

INSTRUCTIONS:
1. Determine if this is a valid financial transaction. If NOT, respond with: {"isTransaction": false}
2. The input may be in English, Hindi, Marathi, Kannada, or other Indian languages (including transliterated/Romanized). Understand all of them.
3. If it IS a transaction, extract:
   - type: "income" if receiving/earning/got money, "expense" if spending/paying/bought
     * Hindi: मिला/mila, आया/aaya = income; खर्च/kharch, दिया/diya = expense
     * Marathi: मिळाले/milale, आले/aale = income; खर्च/kharch, दिले/dile = expense
     * Kannada: ಸಿಕ್ಕಿತು/sikkitu, ಬಂತು/bantu = income; ಖರ್ಚು/kharchu, ಕೊಟ್ಟೆ/kotte = expense
   - amount: The numeric amount. Convert number words:
     * Hindi: sau/सौ=100, hazaar/हज़ार=1000, lakh/लाख=100000, crore/करोड़=10000000
     * Marathi: she/शे=100, hazaar/हजार=1000, lakh/लाख=100000, koti/कोटी=10000000
     * Kannada: nooru/ನೂರು=100, saavira/ಸಾವಿರ=1000, laksha/ಲಕ್ಷ=100000, koti/ಕೋಟಿ=10000000
     * English: hundred=100, thousand/k=1000, lakh=100000, crore=10000000
   - categoryId: Match to the closest category from the list above, use the ID number
   - categoryName: The name of the matched category (always in English)
   - uniqueNameId: If the payee/payer/item name matches a saved name, use its ID, otherwise null
   - uniqueName: REQUIRED - Always extract what the money was spent on or received from. This could be:
     * A person's name (e.g., "John", "Ramesh")
     * A shop/store name (e.g., "Amazon", "Dmart")
     * An item/service (e.g., "Chai", "Petrol", "Groceries", "Electricity Bill")
     * If no specific name mentioned, use the main subject (e.g., "Food", "Transport", "Shopping")
     * NEVER leave this null - always provide a meaningful name
   - description: A brief description in English

RESPONSE FORMAT (JSON only, no markdown):
For valid transaction:
{
  "isTransaction": true,
  "type": "income" or "expense",
  "amount": <number>,
  "categoryId": <number or null>,
  "categoryName": "<string>",
  "uniqueNameId": <number or null>,
  "uniqueName": "<string - REQUIRED, never null>",
  "description": "<string in English>"
}

For non-transaction:
{"isTransaction": false}

EXAMPLES:
English:
- "Spent 500 on groceries" → expense, 500, Food & Dining, uniqueName: "Groceries"
- "Paid Amazon 2000" → expense, 2000, Shopping, uniqueName: "Amazon"

Hindi:
- "Chai pe 10 rupaye kharch kiye" → expense, 10, Food & Dining, uniqueName: "Chai"
- "Salary mila 50 hazaar" → income, 50000, Salary & Income, uniqueName: "Salary"
- "Petrol bharvaya 500" → expense, 500, Transportation, uniqueName: "Petrol"

Marathi:
- "Aaj 300 rupaye jevanavar kharch kele" → expense, 300, Food & Dining, uniqueName: "Food"
- "Pagaar milala 40 hazaar" → income, 40000, Salary & Income, uniqueName: "Salary"
- "Light bill dile 800 rupaye" → expense, 800, Utilities, uniqueName: "Electricity Bill"

Kannada:
- "Oota ge 200 rupaayi kharchu maadide" → expense, 200, Food & Dining, uniqueName: "Food"
- "Salary 50 saavira bantu" → income, 50000, Salary & Income, uniqueName: "Salary"

Not transactions:
- "What's the weather?" → not a transaction
- "Kasa aahes?" → not a transaction

Respond with JSON only, no explanation or markdown.`;
}

export async function POST(request: Request): Promise<NextResponse<VoiceResponse>> {
  try {
    // Validate API key exists
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY not configured");
      return jsonResponse(
        { 
          success: false as const, 
          error: "Server configuration error", 
          errorCode: "API_ERROR" as const
        },
        500
      );
    }

    // Parse request body
    const body = await request.json() as VoiceRequest;
    
    // Validate required fields
    if (!body.text || typeof body.text !== "string" || body.text.trim().length === 0) {
      return jsonResponse(
        { 
          success: false as const, 
          error: "Please speak something to record a transaction", 
          errorCode: "INVALID_INPUT" as const
        },
        400
      );
    }

    if (!Array.isArray(body.categories)) {
      return jsonResponse(
        { 
          success: false as const, 
          error: "Categories data is required", 
          errorCode: "INVALID_INPUT" as const
        },
        400
      );
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite",
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ],
    });

    // Generate the prompt and call Gemini
    const prompt = createPrompt(body.text, body.categories, body.uniqueNames || []);
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const responseText = response.text().trim();

    // Parse the JSON response
    let parsedResponse: any;
    try {
      // Remove markdown code blocks if present
      let cleanJson = responseText;
      if (cleanJson.startsWith("```json")) {
        cleanJson = cleanJson.slice(7);
      } else if (cleanJson.startsWith("```")) {
        cleanJson = cleanJson.slice(3);
      }
      if (cleanJson.endsWith("```")) {
        cleanJson = cleanJson.slice(0, -3);
      }
      cleanJson = cleanJson.trim();
      
      parsedResponse = JSON.parse(cleanJson);
    } catch (parseError) {
      console.error("Failed to parse Gemini response:", responseText);
      return jsonResponse(
        { 
          success: false as const, 
          error: "Failed to understand the response. Please try again.", 
          errorCode: "PARSE_ERROR" as const
        },
        500
      );
    }

    // Check if it's a transaction
    if (!parsedResponse.isTransaction) {
      return jsonResponse(
        { 
          success: false as const, 
          error: "I can only help you record transactions. Try saying something like 'Spent 500 on groceries' or 'Received 1000 from John'", 
          errorCode: "NOT_A_TRANSACTION" as const
        },
        400
      );
    }

    // Validate required transaction fields
    if (typeof parsedResponse.amount !== "number" || parsedResponse.amount <= 0) {
      return jsonResponse(
        { 
          success: false as const, 
          error: "Could not understand the amount. Please mention the amount clearly.", 
          errorCode: "PARSE_ERROR" as const
        },
        400
      );
    }

    if (!["income", "expense"].includes(parsedResponse.type)) {
      return jsonResponse(
        { 
          success: false as const, 
          error: "Could not determine if this is income or expense. Please be more specific.", 
          errorCode: "PARSE_ERROR" as const
        },
        400
      );
    }

    // Build the transaction result
    const transaction: TransactionResult = {
      type: parsedResponse.type,
      amount: parsedResponse.amount,
      categoryId: parsedResponse.categoryId || null,
      categoryName: parsedResponse.categoryName || "Uncategorized",
      uniqueNameId: parsedResponse.uniqueNameId || null,
      uniqueName: parsedResponse.uniqueName || null,
      description: parsedResponse.description || body.text,
    };

    return jsonResponse({
      success: true as const,
      transaction,
    });

  } catch (error: any) {
    console.error("Voice API error:", error);
    
    // Handle specific API errors
    if (error.message?.includes("API key")) {
      return jsonResponse(
        { 
          success: false as const, 
          error: "Server configuration error", 
          errorCode: "API_ERROR" as const
        },
        500
      );
    }

    return jsonResponse(
      { 
        success: false as const, 
        error: "Something went wrong. Please try again.", 
        errorCode: "API_ERROR" as const
      },
      500
    );
  }
}