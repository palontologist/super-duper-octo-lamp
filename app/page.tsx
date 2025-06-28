"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { SpinningText } from "@/components/magicui/spinning-text";
import { TextReveal } from "@/components/magicui/text-reveal";

export default function Page() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
  

      {/* Top right text */}
      <div className="absolute top-15 right-25 text-right text-gray-300 text-sm">
      <SpinningText  className="text-white-300" > front • forum • focus •</SpinningText>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <TypingAnimation className="text-gray-700">Its time to measure what matters</TypingAnimation>
        {/* 3D Sphere */}
        <div className="mb-8 relative">
         
        </div>

        

        {/* Card */}
        <Card className="bg-gray-900/90 border-gray-700 backdrop-blur-sm w-full max-w-sm overflow-hidden relative group">
          {/* Animated border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardContent className="p-6 relative">
            {/* Corner dots */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full" />
            <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full" />

            <div className="text-center space-y-4 mt-4">
              
              <TextReveal 
                phrases={[
                  'Good intentions are not enough',
                  '\"I recycle\" - but do you know the impact?',
                  '\"I bike to work\" - how much CO₂ saved?',
                  '\"I am doing my part\" - are you?',
                  'Without measurement we are driving blind'
                ]} 
                className="mb-6"
              />
              <Button className="w-full bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white border-0 transition-all hover:shadow-lg hover:scale-[1.02]" size="lg">
                Measure Your Impact
              </Button>
              
            </div>
          </CardContent>
        </Card>
      </div>
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
  )
}
