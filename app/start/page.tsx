
"use client";

import { Ripple } from "@/components/magicui/ripple";
import { SpinningText } from "@/components/magicui/spinning-text";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Ripple />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Top right text */}
      <div className="absolute top-8 right-8 text-right text-gray-300 text-sm z-10">
        <SpinningText className="text-white-300">front • forum • focus •</SpinningText>
      </div>

      <div className="container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Left Column - Personal Impact Tracking */}
          <motion.div 
            className="space-y-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-2">Personal Impact Tracking</h2>
            <p className="text-gray-400 text-lg">SDG-aligned app coming soon</p>
            
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">→</span>
                <span>Map daily activities to UN SDGs</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">→</span>
                <span>Track carbon footprint through purchases</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">→</span>
                <span>See your impact grow over time</span>
              </li>
            </ul>

            <div className="mt-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-500"
                />
                <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                  Join Beta Waitlist
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Be the first to know when we launch</p>
            </div>
          </motion.div>

          {/* Right Column - Community */}
          <motion.div 
            className="space-y-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gray-900/80 border-gray-800 backdrop-blur-sm overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative">
                <h3 className="text-2xl font-bold text-white mb-4">Join Our Community</h3>
                <p className="text-gray-400 mb-6">Connect with like-minded individuals making an impact</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center mr-3">
                      <span className="text-teal-400">✓</span>
                    </div>
                    <span className="text-gray-300">Weekly impact challenges</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                      <span className="text-blue-400">✧</span>
                    </div>
                    <span className="text-gray-300">Exclusive content & resources</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                      <span className="text-purple-400">♻️</span>
                    </div>
                    <span className="text-gray-300">Sustainable living tips</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white border-0">
                  Join Discord Community
                </Button>
              </CardContent>
            </Card>

            
          </motion.div>
          <nav className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-8 text-gray-400">
          <Link href="/" className="hover:text-white transition-colors text-sm">
            Home
          </Link>
          <Link href="/measure" className="hover:text-white transition-colors text-sm">
            measure
          </Link>
          <Link href="/vibes" className="hover:text-white transition-colors text-sm">
            Vibes
          </Link>
          <Link href="/start" className="hover:text-white transition-colors text-sm">
            Start
          </Link>
        </div>
      </nav>
        </div>
      </div>
    </div>
  );
}
