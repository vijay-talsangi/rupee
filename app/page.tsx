'use client';

import { useEffect, useState } from 'react';
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
  MessageSquare,
  Sparkles,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)',
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transition: 'left 0.5s ease-out, top 0.5s ease-out'
          }}
        />
        <div 
          className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(147,51,234,0.5) 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute left-1/2 top-1/2 w-[400px] h-[400px] rounded-full blur-[80px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(34,197,94,0.4) 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite reverse'
          }}
        />
        
        {/* Floating Particles - Static positions to avoid hydration mismatch */}
        <div className="absolute inset-0">
          {[
            { left: '10%', top: '20%', dur: '4s', delay: '0s' },
            { left: '25%', top: '60%', dur: '5s', delay: '1s' },
            { left: '40%', top: '30%', dur: '6s', delay: '0.5s' },
            { left: '55%', top: '70%', dur: '4.5s', delay: '2s' },
            { left: '70%', top: '15%', dur: '5.5s', delay: '1.5s' },
            { left: '85%', top: '50%', dur: '4s', delay: '0.8s' },
            { left: '15%', top: '80%', dur: '6s', delay: '2.5s' },
            { left: '60%', top: '85%', dur: '5s', delay: '1.2s' },
            { left: '30%', top: '45%', dur: '4.8s', delay: '0.3s' },
            { left: '75%', top: '35%', dur: '5.2s', delay: '1.8s' },
            { left: '5%', top: '55%', dur: '4.2s', delay: '0.6s' },
            { left: '90%', top: '75%', dur: '5.8s', delay: '2.2s' },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: p.left,
                top: p.top,
                animation: `twinkle ${p.dur} ease-in-out infinite`,
                animationDelay: p.delay
              }}
            />
          ))}
        </div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-12 sm:pb-16 relative z-10">
        <nav className={`flex justify-between items-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
              <Wallet className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">Rupee</span>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <Button variant="ghost" className="hidden sm:flex text-white hover:text-blue-400 hover:bg-white/5 transition-all duration-300">
              Features
            </Button>
            <Button className="bg-linear-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
              <Sparkles className="w-4 h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Download Now</span>
              <span className="sm:hidden">Download</span>
            </Button>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Content */}
          <div className={`space-y-6 sm:space-y-8 text-center lg:text-left transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="inline-flex items-center gap-2 justify-center lg:justify-start">
              <Badge variant="secondary" className="bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20 px-3 sm:px-4 py-1.5 sm:py-2 animate-pulse text-xs sm:text-sm">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                🚀 Available on iOS & Android
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Master Your
              </span>
              <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]" style={{ animationDelay: '0.5s' }}>
                Finances
              </span>
              <br />
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Effortlessly
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path 
                    d="M2 6C50 2 150 2 198 6" 
                    stroke="url(#underline-gradient)" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    className="animate-draw"
                    style={{ strokeDasharray: 200, strokeDashoffset: 200, animation: 'draw 1.5s ease-out forwards 1s' }}
                  />
                  <defs>
                    <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
              Track every transaction, analyze spending patterns, manage lending & borrowing, 
              all with <span className="text-blue-400 font-semibold">automatic notification capture</span>. Your complete financial companion.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              <Button size="lg" className="group bg-linear-to-r from-blue-600 to-purple-600 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 relative overflow-hidden text-sm sm:text-base">
                <span className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <Apple className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Download for iOS
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm sm:text-base">
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                Download for Android
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 text-xs sm:text-sm text-slate-400 pt-4 sm:pt-6">
              <div className="flex items-center gap-2 group cursor-pointer hover:text-yellow-400 transition-colors duration-300">
                <div className="relative">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500 group-hover:scale-125 transition-transform duration-300" />
                  <Star className="absolute inset-0 w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
                </div>
                <span className="font-medium">4.9 Rating</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer hover:text-blue-400 transition-colors duration-300">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">50K+ Users</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer hover:text-green-400 transition-colors duration-300">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">100% Secure</span>
              </div>
            </div>
          </div>

          {/* Right: Mobile Phone Mockup */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-500 order-first lg:order-last mb-8 lg:mb-0 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative group">
              {/* Animated Glow Ring */}
              <div className="absolute inset-0 -m-4 sm:-m-8 rounded-[3rem] sm:rounded-[4rem] opacity-60 blur-xl sm:blur-2xl transition-all duration-500 group-hover:opacity-80"
                style={{
                  background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                  animation: 'spin 8s linear infinite'
                }}
              />
              
              {/* Phone Frame */}
              <div className="relative w-[220px] h-[455px] sm:w-[260px] sm:h-[540px] md:w-[300px] md:h-[620px] bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] border-[10px] sm:border-[12px] md:border-[14px] border-slate-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                {/* Dynamic Island */}
                <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 md:w-28 h-6 sm:h-7 md:h-8 bg-black rounded-full z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-700" />
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-slate-700" />
                </div>
                
                {/* Screen Content - App Screenshot */}
                <div className="w-full h-full rounded-[1.5rem] sm:rounded-[1.8rem] md:rounded-[2rem] overflow-hidden">
                  <img 
                    src="/sc_for_home_rupee.jpg" 
                    alt="Rupee App Screenshot" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Side Buttons */}
                <div className="absolute -right-[14px] top-24 w-[3px] h-16 bg-slate-700 rounded-r-lg" />
                <div className="absolute -left-[14px] top-20 w-[3px] h-10 bg-slate-700 rounded-l-lg" />
                <div className="absolute -left-[14px] top-32 w-[3px] h-10 bg-slate-700 rounded-l-lg" />
              </div>

              {/* Floating Feature Cards - Hidden on mobile */}
              <div className="hidden md:block absolute -top-4 -left-16 bg-slate-800/90 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-white/10 animate-float" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">This Month</p>
                    <p className="text-xs font-semibold text-green-400">+12.5%</p>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block absolute -bottom-4 -right-12 bg-slate-800/90 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-white/10 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <PieChart className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Analytics</p>
                    <p className="text-xs font-semibold text-purple-400">Insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-blue-500/30 text-blue-400 animate-pulse">
            <Sparkles className="w-4 h-4 mr-2" />
            Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent pb-2">
            Everything You Need
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Powerful features to take control of your finances
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            { icon: Wallet, title: 'Add Transactions', desc: 'Quickly add income and expenses with smart categorization. Track every rupee with ease.', gradient: 'from-blue-500 to-blue-600', hoverBorder: 'hover:border-blue-500/50', delay: 0 },
            { icon: PieChart, title: 'Smart Analytics', desc: 'Analyze spending by category and name. Get insights into your financial habits.', gradient: 'from-purple-500 to-purple-600', hoverBorder: 'hover:border-purple-500/50', delay: 100 },
            { icon: Bell, title: 'Auto-Capture', desc: 'Enable notification reading to automatically catch and log transactions from banking apps.', gradient: 'from-green-500 to-green-600', hoverBorder: 'hover:border-green-500/50', delay: 200 },
            { icon: TrendingUp, title: 'Lending & Borrowing', desc: 'Track money lent or borrowed with reminder notifications. Never forget who owes what.', gradient: 'from-yellow-500 to-yellow-600', hoverBorder: 'hover:border-yellow-500/50', delay: 300 },
            { icon: Shield, title: 'Local Storage', desc: 'All data saved securely on your device. Complete privacy with offline access.', gradient: 'from-red-500 to-red-600', hoverBorder: 'hover:border-red-500/50', delay: 400 },
            { icon: Smartphone, title: 'Cross-Platform', desc: 'Native apps for both iOS and Android. Seamless experience on any device.', gradient: 'from-indigo-500 to-indigo-600', hoverBorder: 'hover:border-indigo-500/50', delay: 500 },
          ].map((feature, index) => (
            <Card 
              key={index} 
              className={`group bg-slate-900/50 border-slate-800 ${feature.hoverBorder} transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-${feature.gradient.split('-')[1]}-500/10 backdrop-blur-sm`}
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <CardHeader>
                <div className={`w-14 h-14 bg-linear-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-white group-hover:text-blue-100 transition-colors duration-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {feature.desc}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* App Screenshots Section */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-purple-500/30 text-purple-400">
            <Sparkles className="w-4 h-4 mr-2" />
            Screenshots
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
            Beautiful Interface
          </h2>
          <p className="text-xl text-slate-400">
            Experience the app in action
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {[
            { icon: MessageSquare, label: 'Dashboard', gradient: 'from-slate-950 to-blue-950' },
            { icon: PieChart, label: 'Analytics', gradient: 'from-slate-950 to-purple-950' },
            { icon: TrendingUp, label: 'Lending', gradient: 'from-slate-950 to-indigo-950' },
          ].map((screen, index) => (
            <div key={index} className="relative group cursor-pointer" style={{ animationDelay: `${index * 200}ms` }}>
              <div className={`relative w-[260px] h-[540px] bg-slate-900 rounded-[2.5rem] border-[12px] border-slate-800 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2`}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-800 rounded-b-3xl z-10" />
                <div className={`w-full h-full bg-linear-to-br ${screen.gradient} rounded-[1.8rem] overflow-hidden flex flex-col items-center justify-center transition-all duration-300`}>
                  <div className="text-center p-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                      <screen.icon className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors duration-300">{screen.label}</p>
                    <p className="text-slate-600 text-xs mt-1">Screenshot</p>
                  </div>
                </div>
              </div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 -m-2 rounded-[3rem] opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500"
                style={{ background: `linear-gradient(to bottom right, ${screen.gradient.includes('blue') ? '#3b82f6' : screen.gradient.includes('purple') ? '#8b5cf6' : '#6366f1'}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline" className="border-green-500/30 text-green-400">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Benefits
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white via-green-100 to-white bg-clip-text text-transparent pb-2">
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
              <Card 
                key={index} 
                className="group bg-slate-900/50 border-slate-800 hover:bg-slate-800/50 hover:border-green-500/30 transition-all duration-300 hover:translate-x-2 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-green-500 group-hover:text-green-400 transition-colors duration-300" />
                  </div>
                  <span className="text-lg text-slate-200 group-hover:text-white transition-colors duration-300">{item.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <Card className="max-w-4xl mx-auto text-center bg-slate-800/80 backdrop-blur-sm border-slate-700/50 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.15),transparent_50%)]" />
          </div>
          
          <CardHeader className="space-y-6 relative z-10">
            <div className="inline-flex justify-center">
              <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Wallet className="w-8 h-8" />
              </div>
            </div>
            <div>
              <CardTitle className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                Start Tracking Today
              </CardTitle>
              <CardDescription className="text-xl text-slate-300">
                Join thousands of users who have taken control of their finances
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="group/btn bg-linear-to-r from-blue-600 to-purple-600 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                <Sparkles className="w-5 h-5 mr-2 group-hover/btn:animate-spin" />
                Download Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
              <Wallet className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">Rupee</span>
          </div>
          
          <p className="text-slate-400 text-sm flex items-center gap-2">
            © 2025 Rupee. All rights reserved. Made with <span className="text-red-400 animate-pulse">💙</span> for better finance management.
          </p>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
        
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  );
}