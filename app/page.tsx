"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Globe, Users, TrendingUp, Smartphone, BarChart3, Heart, Zap, ArrowRight, Play, Monitor, TreePine, Factory, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

interface SDGIcon {
  id: number
  icon: React.ReactNode
  color: string
  label: string
  image: string
  description: string
}

interface FeatureStep {
  step: string
  title: string
  content: string
  image: string
  icon: React.ReactNode
}

interface ImpactMetric {
  value: string
  label: string
  icon: React.ReactNode
  trend: number
}

const FrontForumFocusHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'brands' | 'individuals'>('brands')
  const [currentMetric, setCurrentMetric] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentFeature, setCurrentFeature] = useState(0)
  const [hoveredSDG, setHoveredSDG] = useState<number | null>(null)
  const [featureProgress, setFeatureProgress] = useState(0)

    const sdgIcons: SDGIcon[] = [
    { 
      id: 1, 
      icon: <Heart className="w-4 h-4" />, 
      color: "bg-red-500", 
      label: "No Poverty",
      image: "https://picsum.photos/400/300?random=1",
      description: "End poverty in all its forms everywhere"
    },
    { 
      id: 2, 
      icon: <Leaf className="w-4 h-4" />, 
      color: "bg-green-500", 
      label: "Zero Hunger",
      image: "https://picsum.photos/400/300?random=2",
      description: "End hunger, achieve food security and improved nutrition"
    },
    { 
      id: 3, 
      icon: <Zap className="w-4 h-4" />, 
      color: "bg-blue-500", 
      label: "Good Health",
      image: "https://picsum.photos/400/300?random=3",
      description: "Ensure healthy lives and promote well-being for all"
    },
    { 
      id: 4, 
      icon: <Globe className="w-4 h-4" />, 
      color: "bg-purple-500", 
      label: "Quality Education",
      image: "https://picsum.photos/400/300?random=4",
      description: "Ensure inclusive and equitable quality education"
    },
    { 
      id: 5, 
      icon: <Users className="w-4 h-4" />, 
      color: "bg-orange-500", 
      label: "Gender Equality",
      image: "https://picsum.photos/400/300?random=5",
      description: "Achieve gender equality and empower all women and girls"
    },
    { 
      id: 6, 
      icon: <TrendingUp className="w-4 h-4" />, 
      color: "bg-cyan-500", 
      label: "Clean Water",
      image: "https://picsum.photos/400/300?random=6",
      description: "Ensure availability and sustainable management of water"
    }
  ]

    const brandFeatures: FeatureStep[] = [
    {
      step: "Step 1",
      title: "Connect Your Data",
      content: "Integrate your sustainability data sources and start tracking impact metrics in real-time.",
      image: "https://picsum.photos/600/400?random=10",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      step: "Step 2", 
      title: "Monitor Impact",
      content: "Track your environmental and social impact across all operations with comprehensive analytics.",
      image: "https://picsum.photos/600/400?random=11",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      step: "Step 3",
      title: "Amplify Results",
      content: "Share your sustainability story and connect with conscious consumers through our platform.",
      image: "https://picsum.photos/600/400?random=12",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ]

    const individualFeatures: FeatureStep[] = [
    {
      step: "Step 1",
      title: "Track Activities",
      content: "Log your daily activities and see how they align with the UN Sustainable Development Goals.",
      image: "https://picsum.photos/600/400?random=20",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      step: "Step 2",
      title: "Monitor Purchases", 
      content: "Scan products and purchases to automatically calculate your carbon footprint and impact.",
      image: "https://picsum.photos/600/400?random=21",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      step: "Step 3",
      title: "Reduce Impact",
      content: "Get personalized recommendations to reduce your environmental footprint and live more sustainably.",
      image: "https://picsum.photos/600/400?random=22",
      icon: <TreePine className="w-6 h-6" />
    }
  ]

  const impactMetrics: ImpactMetric[] = [
    { value: "2.4M", label: "CO₂ Reduced (tons)", icon: <Leaf className="w-5 h-5" />, trend: 12 },
    { value: "850+", label: "Sustainable Brands", icon: <Globe className="w-5 h-5" />, trend: 8 },
    { value: "1.2M", label: "Individual Users", icon: <Users className="w-5 h-5" />, trend: 15 },
    { value: "17", label: "SDGs Tracked", icon: <BarChart3 className="w-5 h-5" />, trend: 0 }
  ]

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % impactMetrics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const features = activeTab === 'brands' ? brandFeatures : individualFeatures
    const timer = setInterval(() => {
      if (featureProgress < 100) {
        setFeatureProgress((prev) => prev + 100 / 40) // 4 second intervals
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setFeatureProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [featureProgress, activeTab, brandFeatures, individualFeatures])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4" />
            Impact Monitoring Platform
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            We Help{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
              Sustainable Brands
            </span>
            <br />
            Reach & Amplify Their{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Impact
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Through our comprehensive impact monitoring platform and individual app that maps activities to SDGs 
            while measuring carbon footprints through purchases.
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <motion.div className="flex justify-center mb-12" variants={itemVariants}>
          <div className="bg-muted/50 p-1 rounded-full backdrop-blur-sm border border-border/50">
            <Button
              variant={activeTab === 'brands' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('brands')}
              className="rounded-full px-8 py-3 transition-all duration-300"
            >
              <Globe className="w-4 h-4 mr-2" />
              For Brands
            </Button>
            <Button
              variant={activeTab === 'individuals' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('individuals')}
              className="rounded-full px-8 py-3 transition-all duration-300"
            >
              <Smartphone className="w-4 h-4 mr-2" />
              For Individuals
            </Button>
          </div>
        </motion.div>

        {/* Content Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {activeTab === 'brands' ? (
              <>
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Impact Monitoring</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Track, measure, and amplify your sustainability initiatives with real-time data and comprehensive reporting.
                  </p>
                  <div className="space-y-3">
                    {['Real-time Impact Tracking', 'SDG Alignment Analytics', 'Stakeholder Reporting'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Amplify Reach</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Connect with conscious consumers and showcase your sustainability journey through our platform.
                  </p>
                  <div className="space-y-3">
                    {['Consumer Engagement', 'Impact Storytelling', 'Brand Visibility'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </>
            ) : (
              <>
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">SDG Mapping</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Map your daily activities to the UN Sustainable Development Goals and track your personal impact.
                  </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                    {sdgIcons.slice(0, 4).map((sdg) => (
                      <motion.div
                        key={sdg.id}
                        className={`${sdg.color} p-2 rounded-lg text-white relative cursor-pointer`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => setHoveredSDG(sdg.id)}
                        onHoverEnd={() => setHoveredSDG(null)}
                      >
                        {sdg.icon}
                        <AnimatePresence>
                          {hoveredSDG === sdg.id && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.8 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.8 }}
                              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-card border border-border rounded-lg shadow-xl p-3 z-50"
                            >
                                                            <div className="relative h-24 w-full rounded-md overflow-hidden mb-2">
                                <Image
                                  src={sdg.image}
                                  alt={sdg.label}
                                  fill
                                  className="object-cover"
                                  unoptimized
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = `data:image/svg+xml;base64,${btoa(`<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af">Image</text></svg>`)}`;
                                  }}
                                />
                              </div>
                              <h4 className="font-semibold text-sm text-foreground">{sdg.label}</h4>
                              <p className="text-xs text-muted-foreground">{sdg.description}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Carbon Footprint</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Measure and reduce your carbon footprint through intelligent purchase tracking and recommendations.
                  </p>
                  <div className="space-y-3">
                    {['Purchase Impact Analysis', 'Carbon Reduction Tips', 'Sustainable Alternatives'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </>
            )}
          </motion.div>
                </AnimatePresence>

        {/* Interactive Feature Showcase */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            {activeTab === 'brands' ? 'How Brands Get Started' : 'Your Personal Impact Journey'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              {(activeTab === 'brands' ? brandFeatures : individualFeatures).map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor: index === currentFeature ? 'hsl(var(--primary) / 0.1)' : 'transparent'
                  }}
                  animate={{ 
                    opacity: index === currentFeature ? 1 : 0.6,
                    scale: index === currentFeature ? 1.02 : 1
                  }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                      index === currentFeature
                        ? 'bg-primary border-primary text-primary-foreground'
                        : 'bg-muted border-muted-foreground'
                    }`}
                    animate={{ scale: index === currentFeature ? 1.1 : 1 }}
                  >
                    {index <= currentFeature ? (
                      <span className="text-sm font-bold">✓</span>
                    ) : (
                      feature.icon
                    )}
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.content}</p>
                    {index === currentFeature && (
                      <div className="w-full bg-muted rounded-full h-1 mt-2">
                        <motion.div
                          className="bg-primary h-1 rounded-full"
                          style={{ width: `${featureProgress}%` }}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <AnimatePresence mode="wait">
                {(activeTab === 'brands' ? brandFeatures : individualFeatures).map(
                  (feature, index) =>
                    index === currentFeature && (
                      <motion.div
                        key={`${activeTab}-${index}`}
                        className="absolute inset-0"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                                                <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover rounded-xl"
                          unoptimized
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `data:image/svg+xml;base64,${btoa(`<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af">Feature Image</text></svg>`)}`;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-xl" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge variant="secondary" className="mb-2">
                            {feature.step}
                          </Badge>
                          <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                          <p className="text-sm text-white/80">{feature.content}</p>
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Global Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  currentMetric === index 
                    ? 'bg-primary/10 border-primary/30 shadow-lg' 
                    : 'bg-card/30 border-border/30'
                }`}
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className={`p-3 rounded-xl ${
                    currentMetric === index ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    {metric.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
                {metric.trend > 0 && (
                  <Badge variant="secondary" className="mt-2 text-xs">
                    +{metric.trend}% this month
                  </Badge>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div className="text-center" variants={itemVariants}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-4 text-lg rounded-full group">
              Start Your Impact Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg rounded-full group"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <Play className={`w-5 h-5 mr-2 transition-transform ${isPlaying ? 'scale-110' : ''}`} />
             Subscribe to podcast
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Join thousands of brands and individuals making a difference
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default FrontForumFocusHero
