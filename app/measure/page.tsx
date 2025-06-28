
"use client";

import { Ripple } from "@/components/magicui/ripple";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

const FeatureItem = ({ 
  
  title, 
  description 
}: { 
  
  title: string; 
  description: string;
}) => (
  <div className="flex items-start space-x-4 p-4 hover:bg-gray-900/50 rounded-lg transition-colors">
    
    <div>
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

const MetricCard = ({ 
  value, 
  label, 
  color = "teal" 
}: { 
  value: string; 
  label: string; 
  color?: string;
}) => (
  <div className={`p-4 rounded-lg bg-gradient-to-br from-${color}-500/10 to-${color}-500/5 border border-${color}-500/20`}>
    <div className="text-3xl font-bold text-white">{value}</div>
    <div className="text-sm text-gray-400 mt-1">{label}</div>
  </div>
);

export default function Page() {
  const features = [
    {
      
      title: "Track",
      description: "No vanity metrics. We measure what matters - carbon removed, waste diverted, communities empowered."
    },
    {
     
      title: "Share",
      description: "Open knowledge sharing to amplify what works. Learn from others and contribute to our collective impact."
    },
    {
     
      title: "Scale",
      description: "Turn individual actions into systemic change through data-driven insights and community power."
    }
  ];



  const dashboardFeatures = [
    "Complete Project Tracking",
    "Real-time Impact Metrics",
    "Stakeholder Reporting",
    "SDG Alignment",
    "Custom Dashboards",
    "API Integrations"
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-auto">
      <Ripple />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col justify-center">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            <TypingAnimation className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Impact as Data
            </TypingAnimation>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming good intentions into measurable impact through data-driven insights
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Our Approach */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Our Approach</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
              
              
            </div>
          </motion.div>

          {/* Right Column - Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-2"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/60 border border-gray-800 rounded-2xl p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Impact Dashboard</h2>
                <span className="text-xs px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full">Live</span>
              </div>
              
            
              <div className="space-y-4">
                <h3 className="font-medium text-white">Dashboard Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {dashboardFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 mt-6 border-t border-gray-800">
                  <button className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors font-medium">
                    Request Demo
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
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
    </div>
  );
}
