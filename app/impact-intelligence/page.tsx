"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, ArrowRight } from "lucide-react";

export default function ImpactIntelligencePage() {
  return (
    <div className="w-full min-h-screen bg-white text-text-high pt-24">
      {/* Hero Section */}
      <section className="py-24 px-20 bg-background-alt">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="heading-1 mb-6 text-text-high">Impact Intelligence</h1>
          <p className="body-large text-text-medium mb-12 max-w-2xl">
            A newsletter and podcast on how impact, capital, and technology are turning into real infrastructure—not just PR stories.
          </p>
          <div className="flex items-center gap-4">
            <Button asChild size="lg" className="bg-impact-green hover:bg-impact-green/90 text-white rounded-xl button-text">
              <Link href="#subscribe">Subscribe to Newsletter</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl button-text border-border-color">
              <Link href="#episodes">Listen to Podcast</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Trilogy Newsletter Section */}
      <section className="py-24 px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-4 text-text-high">The Trust Trilogy with Rosa</h2>
          <p className="body-medium text-text-medium mb-12">
            A three-part exploration of impact, investment, and trust in 2026.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Edition 1 */}
            <Card className="border-border-color shadow-sm overflow-hidden">
              <CardHeader className="bg-impact-green/10">
                <CardTitle className="heading-3 text-impact-green">Edition 1: The Rise of Impact Investment</CardTitle>
                <p className="body-small text-text-medium mt-2">What Does Trust Really Mean?</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="body-medium text-text-medium">
                    <strong>Welcome to the new era of Impact.</strong> We&apos;ve opened the door and guess what? Proof&apos;s inside.
                  </p>
                  <p className="body-small text-text-low">
                    This edition explores the fundamental shift in how investment capital is being deployed with impact at the core. We dive into what trust actually means in the context of impact investing—beyond buzzwords and into measurable outcomes.
                  </p>
                  <div className="pt-4">
                    <Button asChild variant="outline" className="w-full rounded-lg border-impact-green text-impact-green hover:bg-impact-green/5">
                      <Link href="#" className="flex items-center gap-2">
                        Read Full Edition <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Edition 2 */}
            <Card className="border-border-color shadow-sm overflow-hidden">
              <CardHeader className="bg-focus-purple/10">
                <CardTitle className="heading-3 text-focus-purple">Edition 2: Where Will Trust Be Built?</CardTitle>
                <p className="body-small text-text-medium mt-2">Who Gets to Shape It in 2030?</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="body-medium text-text-medium">
                    <strong>Impact infrastructure is being built right now.</strong> The question isn&apos;t whether trust will be built—it&apos;s where, and critically, who gets to shape it.
                  </p>
                  <p className="body-small text-text-low">
                    In this edition, we explore the emerging platforms, technologies, and networks that will define impact measurement and capital allocation in 2030. From decentralized verification systems to new governance models, discover the infrastructure that will enable real accountability.
                  </p>
                  <div className="pt-4">
                    <Button asChild variant="outline" className="w-full rounded-lg border-focus-purple text-focus-purple hover:bg-focus-purple/5">
                      <Link href="#" className="flex items-center gap-2">
                        Read Full Edition <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-background-alt rounded-lg p-6 mb-12">
            <p className="body-medium text-text-medium">
              <strong>Edition 3 coming soon.</strong> Join the conversation about the future of impact infrastructure by subscribing to our newsletter.
            </p>
          </div>
        </div>
      </section>

      {/* Podcast Episodes Section */}
      <section id="episodes" className="py-24 px-20 bg-background-alt">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-4 text-text-high">Podcast Episodes</h2>
          <p className="body-medium text-text-medium mb-12">
            In-depth conversations with founders, operators, and leaders shaping the impact landscape.
          </p>

          <div className="space-y-6">
            {/* Episode 1 */}
            <Card className="border-border-color shadow-sm overflow-hidden">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-2">
                    <h3 className="heading-3 mb-2 text-text-high">
                      Dropout: Building the Future of Learning
                    </h3>
                    <p className="body-medium text-text-medium mb-4">
                      with Leeland Zhang
                    </p>
                    <p className="body-small text-text-low mb-4">
                      Exploring how alternative education models are reshaping learning for the next generation. Leeland shares insights on building scalable solutions that combine accessibility, quality, and social impact.
                    </p>
                    <Button asChild variant="outline" className="rounded-lg border-impact-green text-impact-green hover:bg-impact-green/5">
                      <Link href="https://youtu.be/USR50RCZXXM?si=Xfpt7jtn924ovHNR" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        Watch on YouTube
                      </Link>
                    </Button>
                  </div>
                  <div className="aspect-video bg-text-high/10 rounded-lg flex items-center justify-center">
                    <Play className="w-12 h-12 text-text-low/50" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Episode 2 */}
            <Card className="border-border-color shadow-sm overflow-hidden">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-2">
                    <h3 className="heading-3 mb-2 text-text-high">
                      Building a Global Community for Learning
                    </h3>
                    <p className="body-medium text-text-medium mb-4">
                      with Aryan Marxaney
                    </p>
                    <p className="body-small text-text-low mb-4">
                      Discover how community-driven approaches can accelerate learning outcomes across geographies. Aryan discusses the intersection of technology, human connection, and measurable impact in global education initiatives.
                    </p>
                    <Button asChild variant="outline" className="rounded-lg border-focus-purple text-focus-purple hover:bg-focus-purple/5">
                      <Link href="https://youtu.be/uuwZycpdkfQ?si=VY_qoS1cNgPHvriG" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        Watch on YouTube
                      </Link>
                    </Button>
                  </div>
                  <div className="aspect-video bg-text-high/10 rounded-lg flex items-center justify-center">
                    <Play className="w-12 h-12 text-text-low/50" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Episode 3 */}
            <Card className="border-border-color shadow-sm overflow-hidden">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-2">
                    <h3 className="heading-3 mb-2 text-text-high">
                      The Awari Collective: Redefining Global Philanthropy
                    </h3>
                    <p className="body-medium text-text-medium mb-4">
                      with Elena, Founder of Awari Collective
                    </p>
                    <p className="body-small text-text-low mb-4">
                      In this inspiring episode, we delve into the journey of the Awari Collective, a pioneering force in redefining philanthropy and global impact. Elena shares how they navigate challenges, build trust, and empower communities from Geneva to Nigeria. Learn about innovative approaches bridging gaps and transforming lives.
                    </p>
                    <Button asChild variant="outline" className="rounded-lg border-impact-green text-impact-green hover:bg-impact-green/5">
                      <Link href="https://youtu.be/zexxrV4c9wY?si=V5K3RGZDmkw_CJWk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        Watch on YouTube
                      </Link>
                    </Button>
                  </div>
                  <div className="aspect-video bg-text-high/10 rounded-lg flex items-center justify-center">
                    <Play className="w-12 h-12 text-text-low/50" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" className="py-24 px-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="heading-2 mb-4 text-text-high">Stay Updated on Impact</h2>
          <p className="body-large text-text-medium mb-8">
            Get the latest insights, episodes, and conversations delivered to your inbox.
          </p>
          <div className="flex gap-2 mb-4">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-1 px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-impact-green"
            />
            <Button className="bg-impact-green hover:bg-impact-green/90 text-white rounded-lg button-text px-8">
              Subscribe
            </Button>
          </div>
          <p className="caption-text text-text-low">
            We respect your inbox. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
