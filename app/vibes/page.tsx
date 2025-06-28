"use client";

import { Ripple } from "@/components/magicui/ripple";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

// Podcast data
const podcastEpisodes = [
  {
    id: 1,
    title: "Sustainable Living",
    description: "Reducing your carbon footprint",
    youtubeId: "dQw4w9WgXcQ",
    duration: "45:22"
  },
  {
    id: 2,
    title: "Community Conservation",
    description: "Local environmental efforts",
    youtubeId: "dQw4w9WgXcQ",
    duration: "38:15"
  },
  {
    id: 3,
    title: "Tech for Good",
    description: "Innovative solutions",
    youtubeId: "dQw4w9WgXcQ",
    duration: "52:40"
  }
];

export default function VibesPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Ripple />
      
      
      {/* Main Content */}
    
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              The future isn't about feeling good
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            It's about knowing what exactly works
          </p>
        </div>

        {/* Podcast Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {podcastEpisodes.map((episode) => (
            <Card key={episode.id} className="bg-gray-900/80 border-gray-800 hover:border-teal-500/30 transition-colors">
              <div className="aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                  title={episode.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-white mb-1">{episode.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{episode.description}</p>
                <div className="text-xs text-gray-500">{episode.duration}</div>
              </CardContent>
            </Card>
          ))}
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
 
  );
}
