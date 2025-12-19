'use client';

import { 
  Smartphone, 
  PieChart, 
  Bell, 
  Shield, 
  TrendingUp, 
  Users, 
  Wallet,
  ArrowRight,
  CheckCircle2,
  Star,
  Download,
  Apple,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <nav className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold">Rupee</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-white hover:text-blue-400">
              Features
            </Button>
            <Button className="bg-linear-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50">
              Download Now
            </Button>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20">
              🚀 Available on iOS & Android
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-linear-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Master Your Finances
              <br />
              Effortlessly
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Track every transaction, analyze spending patterns, manage lending & borrowing, 
              all with automatic notification capture. Your complete financial companion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-linear-to-r from-blue-600 to-purple-600 hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
                <Apple className="w-5 h-5 mr-2" />
                Download for iOS
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group bg-white/5 border-white/10 hover:bg-white/10 text-white">
                <Download className="w-5 h-5 mr-2" />
                Download for Android
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex gap-8 text-sm text-slate-400 pt-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span>50K+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>100% Secure</span>
              </div>
            </div>
          </div>

          {/* Right: Mobile Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[14px] border-slate-800 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-3xl z-10"></div>
                
                {/* Screen Content - Place your app screenshot here */}
                <div className="w-full h-full bg-linear-to-br from-slate-950 to-blue-950 rounded-[2rem] overflow-hidden flex items-center justify-center">
                  <div className="text-center p-6 space-y-4">
                    <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center">
                      <Wallet className="w-8 h-8" />
                    </div>
                    <p className="text-slate-400 text-sm">
                      App Screenshot
                      <br />
                      Place Here
                    </p>
                  </div>
                </div>

                {/* Power Button */}
                <div className="absolute -right-[14px] top-24 w-[3px] h-16 bg-slate-700 rounded-r-lg"></div>
                
                {/* Volume Buttons */}
                <div className="absolute -left-[14px] top-20 w-[3px] h-10 bg-slate-700 rounded-l-lg"></div>
                <div className="absolute -left-[14px] top-32 w-[3px] h-10 bg-slate-700 rounded-l-lg"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-blue-500/30 text-blue-400">
            Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need
          </h2>
          <p className="text-xl text-slate-400">
            Powerful features to take control of your finances
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Feature Card 1 */}
          <Card className="group bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-2">
            <CardHeader>
              <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Wallet className="w-7 h-7" />
              </div>
              <CardTitle className="text-white">Add Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-400">
                Quickly add income and expenses with smart categorization. Track every rupee with ease.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature Card 2 */}
          <Card className="group bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-all hover:-translate-y-2">
            <CardHeader>
              <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <PieChart className="w-7 h-7" />
              </div>
              <CardTitle className="text-white">Smart Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-400">
                Analyze spending by category and name. Get insights into your financial habits.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature Card 3 */}
          <Card className="group bg-slate-900/50 border-slate-800 hover:border-green-500/50 transition-all hover:-translate-y-2">
            <CardHeader>
              <div className="w-14 h-14 bg-linear-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Bell className="w-7 h-7" />
              </div>
              <CardTitle className="text-white">Auto-Capture</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-400">
                Enable notification reading to automatically catch and log transactions from banking apps.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature Card 4 */}
          <Card className="group bg-slate-900/50 border-slate-800 hover:border-yellow-500/50 transition-all hover:-translate-y-2">
            <CardHeader>
              <div className="w-14 h-14 bg-linear-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7" />
              </div>
              <CardTitle className="text-white">Lending & Borrowing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-400">
                Track money lent or borrowed with reminder notifications. Never forget who owes what.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature Card 5 */}
          <Card className="group bg-slate-900/50 border-slate-800 hover:border-red-500/50 transition-all hover:-translate-y-2">
            <CardHeader>
              <div className="w-14 h-14 bg-linear-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7" />
              </div>
              <CardTitle className="text-white">Local Storage</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-400">
                All data saved securely on your device. Complete privacy with offline access.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature Card 6 */}
          <Card className="group bg-slate-900/50 border-slate-800 hover:border-indigo-500/50 transition-all hover:-translate-y-2">
            <CardHeader>
              <div className="w-14 h-14 bg-linear-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="w-7 h-7" />
              </div>
              <CardTitle className="text-white">Cross-Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-400">
                Native apps for both iOS and Android. Seamless experience on any device.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* App Screenshots Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-purple-500/30 text-purple-400">
            Screenshots
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Beautiful Interface
          </h2>
          <p className="text-xl text-slate-400">
            Experience the app in action
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {/* Screenshot Frame 1 */}
          <div className="relative group">
            <div className="relative w-[260px] h-[540px] bg-slate-900 rounded-[2.5rem] border-[12px] border-slate-800 shadow-2xl transition-transform group-hover:scale-105">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-800 rounded-b-3xl z-10"></div>
              <div className="w-full h-full bg-linear-to-br from-slate-950 to-blue-950 rounded-[1.8rem] overflow-hidden flex items-center justify-center">
                <div className="text-center p-6">
                  <MessageSquare className="w-12 h-12 mx-auto mb-2 text-slate-600" />
                  <p className="text-slate-500 text-xs">Screenshot 1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot Frame 2 */}
          <div className="relative group">
            <div className="relative w-[260px] h-[540px] bg-slate-900 rounded-[2.5rem] border-[12px] border-slate-800 shadow-2xl transition-transform group-hover:scale-105">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-800 rounded-b-3xl z-10"></div>
              <div className="w-full h-full bg-linear-to-br from-slate-950 to-purple-950 rounded-[1.8rem] overflow-hidden flex items-center justify-center">
                <div className="text-center p-6">
                  <PieChart className="w-12 h-12 mx-auto mb-2 text-slate-600" />
                  <p className="text-slate-500 text-xs">Screenshot 2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot Frame 3 */}
          <div className="relative group">
            <div className="relative w-[260px] h-[540px] bg-slate-900 rounded-[2.5rem] border-[12px] border-slate-800 shadow-2xl transition-transform group-hover:scale-105">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-800 rounded-b-3xl z-10"></div>
              <div className="w-full h-full bg-linear-to-br from-slate-950 to-indigo-950 rounded-[1.8rem] overflow-hidden flex items-center justify-center">
                <div className="text-center p-6">
                  <TrendingUp className="w-12 h-12 mx-auto mb-2 text-slate-600" />
                  <p className="text-slate-500 text-xs">Screenshot 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline" className="border-green-500/30 text-green-400">
              Benefits
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose Rupee?
            </h2>
          </div>
          
          <div className="grid gap-4">
            {[
              { text: "Automatic transaction capture from notifications", icon: CheckCircle2 },
              { text: "Detailed analytics with category-wise breakdowns", icon: CheckCircle2 },
              { text: "Lending & borrowing tracker with smart reminders", icon: CheckCircle2 },
              { text: "100% offline - all data stored locally on your device", icon: CheckCircle2 },
              { text: "Beautiful, intuitive interface designed for simplicity", icon: CheckCircle2 },
              { text: "No subscriptions, no ads, completely free", icon: CheckCircle2 },
            ].map((item, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 hover:bg-slate-900/70 transition-all">
                <CardContent className="flex items-start gap-4 p-6">
                  <item.icon className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                  <span className="text-lg text-slate-200">{item.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <Card className="max-w-4xl mx-auto text-center bg-linear-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
          <CardHeader className="space-y-6">
            <div>
              <CardTitle className="text-4xl md:text-5xl font-bold text-white mb-4">
                Start Tracking Today
              </CardTitle>
              <CardDescription className="text-xl text-slate-300">
                Join thousands of users who have taken control of their finances
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-linear-to-r from-blue-600 to-purple-600 hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
                Download Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Wallet className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold">Rupee</span>
          </div>
          
          <p className="text-slate-400 text-sm">
            © 2025 Rupee. All rights reserved. Made with 💙 for better finance management.
          </p>
        </div>
      </footer>
    </div>
  );
}