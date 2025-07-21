import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  GraduationCap, 
  Menu, 
  X, 
  Search,
  Home,
  BookOpen,
  Wrench,
  HelpCircle,
  Mail,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home"), icon: Home },
  { title: "About", url: createPageUrl("About"), icon: BookOpen },
  { title: "Curriculum", url: createPageUrl("Curriculum"), icon: GraduationCap },
  { title: "Tools", url: createPageUrl("Tools"), icon: Wrench },
  { title: "Get Help", url: createPageUrl("Help"), icon: HelpCircle },
  { title: "Contact", url: createPageUrl("Contact"), icon: Mail },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-purple-200/50 shadow-xl shadow-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                <GraduationCap className="w-6 h-6 text-white" />
                <Sparkles className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 bg-clip-text text-transparent">
                  FinFuture Academy
                </h1>
                <p className="text-xs text-purple-600/70 -mt-1 font-medium">Free Financial Education ✨</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 group ${
                    location.pathname === item.url
                      ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border border-purple-200 shadow-lg"
                      : "text-gray-600 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
                  }`}
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </nav>

            {/* Search & Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* Search Bar */}
              <div className="hidden md:block relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />
                <Input
                  type="text"
                  placeholder="Search topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-48 h-9 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 focus:border-purple-400 focus:ring-purple-200 rounded-xl"
                />
              </div>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-purple-100 rounded-xl"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-purple-200/50 shadow-2xl">
            <div className="px-4 py-3 space-y-1">
              {/* Mobile Search */}
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />
                <Input
                  type="text"
                  placeholder="Search topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full h-9 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 rounded-xl"
                />
              </div>
              
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.url
                      ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700"
                      : "text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  FinFuture Academy
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Free, student-led financial education for underserved teens, families, and small business owners. 
                Building financial literacy for a brighter future. ✨
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-purple-300">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to={createPageUrl("Curriculum")} className="text-gray-300 hover:text-purple-400 transition-colors">View Curriculum</Link></li>
                <li><Link to={createPageUrl("Tools")} className="text-gray-300 hover:text-purple-400 transition-colors">Free Tools</Link></li>
                <li><Link to={createPageUrl("Help")} className="text-gray-300 hover:text-purple-400 transition-colors">Get Help</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-purple-300">Learn</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-gray-300">Master Money Track 💰</span></li>
                <li><span className="text-gray-300">Earn More Track 🚀</span></li>
                <li><span className="text-gray-300">100% Free Forever 🎁</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 FinFuture Academy. Made with ❤️ for financial empowerment.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
