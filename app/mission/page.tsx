"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Lightbulb, Users, Globe, TrendingUp, Target } from "lucide-react";

export default function MissionPage() {
  return (
    <div className="w-full min-h-screen bg-white text-text-high pt-24">
      {/* Hero Section */}
      <section className="py-24 px-20 bg-gradient-to-br from-impact-green/10 to-background-alt">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="heading-1 mb-6 text-text-high">Our Mission</h1>
          <p className="heading-2 text-text-medium mb-8 max-w-3xl">
            Make impact measurable for everyone.
          </p>
          <p className="body-large text-text-medium max-w-2xl">
            FrontForumFocus exists to help founders and organizations align daily work, capital, and decisions with their deepest missions. We believe impact should be measurable, not just aspirational.
          </p>
        </div>
      </section>

      {/* Why We Started Section */}
      <section className="py-24 px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-12 text-text-high">Why We Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="body-large text-text-medium mb-6">
                We've spent years working in impact—from nonprofits to venture capital to international development. And we kept seeing the same problem over and over: brilliant founders and organizations with real missions were drowning in misalignment, fragmented tools, and zero visibility into whether their work was actually moving the needle.
              </p>
              <p className="body-large text-text-medium">
                They had the passion. They had the capital. But they didn't have the infrastructure to measure what mattered. So we decided to build it.
              </p>
            </div>
            <div className="bg-background-alt rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Heart className="w-6 h-6 text-impact-green flex-shrink-0" />
                  <div>
                    <p className="body-medium font-semibold text-text-high mb-1">We're mission-driven</p>
                    <p className="body-small text-text-medium">We've walked in your shoes. We know the tension between mission and money.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Lightbulb className="w-6 h-6 text-focus-purple flex-shrink-0" />
                  <div>
                    <p className="body-medium font-semibold text-text-high mb-1">We build for practitioners</p>
                    <p className="body-small text-text-medium">Not consultants. Not academics. Real founders and operators who need tools that work.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Globe className="w-6 h-6 text-impact-green flex-shrink-0" />
                  <div>
                    <p className="body-medium font-semibold text-text-high mb-1">We think globally</p>
                    <p className="body-small text-text-medium">Our community spans 50+ countries. We design for diverse contexts and currencies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-24 px-20 bg-background-alt">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-12 text-text-high">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <h3 className="heading-3 mb-4 text-text-high">1. Impact is Infrastructure, Not Marketing</h3>
                <p className="body-medium text-text-medium">
                  Impact measurement isn't about PR. It's about real systems that help you understand what works, optimize decisions, and prove outcomes to stakeholders who matter.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <h3 className="heading-3 mb-4 text-text-high">2. Founders Know Best</h3>
                <p className="body-medium text-text-medium">
                  You don't need consultants or compliance officers to tell you what matters. You need tools and peers who help you surface your own insights and make better decisions faster.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <h3 className="heading-3 mb-4 text-text-high">3. Measurement Unlocks Capital</h3>
                <p className="body-medium text-text-medium">
                  When you can prove what you're doing works, capital follows. Investors, donors, and partners trust what they can measure. Clear metrics = more funding.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <h3 className="heading-3 mb-4 text-text-high">4. Community Accelerates Everything</h3>
                <p className="body-medium text-text-medium">
                  You don't have to figure this out alone. Other founders have walked this path. Learning from each other, sharing frameworks, and building together makes us all stronger.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <h3 className="heading-3 mb-4 text-text-high">5. Data Should Be Beautiful</h3>
                <p className="body-medium text-text-medium">
                  Impact dashboards don't have to be ugly spreadsheets. Well-designed, intuitive tools make measurement easier and faster. Better design = better decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <h3 className="heading-3 mb-4 text-text-high">6. Progress Over Perfection</h3>
                <p className="body-medium text-text-medium">
                  You don't need the perfect metric on day one. Start with what matters, measure consistently, and iterate. Good data today beats perfect data tomorrow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-12 text-text-high">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-impact-green mx-auto mb-4" />
              <h3 className="heading-3 mb-3 text-text-high">Founder-First</h3>
              <p className="body-medium text-text-medium">
                We are founders. We get it. Everything we build starts with understanding the real constraints and challenges you face.
              </p>
            </div>

            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-focus-purple mx-auto mb-4" />
              <h3 className="heading-3 mb-3 text-text-high">Impact-Obsessed</h3>
              <p className="body-medium text-text-medium">
                We're not here for vanity metrics. We care about real outcomes, real measurement, and real progress toward the missions our community is building.
              </p>
            </div>

            <div className="text-center">
              <Target className="w-12 h-12 text-impact-green mx-auto mb-4" />
              <h3 className="heading-3 mb-3 text-text-high">Community-Powered</h3>
              <p className="body-medium text-text-medium">
                Our best ideas come from our community. We listen, iterate, and build together. You make us better every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team Section */}
      <section className="py-24 px-20 bg-background-alt">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-4 text-text-high">Built by Operators</h2>
          <p className="body-large text-text-medium mb-12 max-w-2xl">
            FrontForumFocus is bootstrapped and founder-led. We came from impact investing, international development, and founded our own companies. We know what we're talking about.
          </p>
          <p className="body-large text-text-medium">
            Every person on our team has built something, sold something, or measured something. We bring that experience to everything we create.
          </p>
        </div>
      </section>

      {/* Impact So Far Section */}
      <section className="py-24 px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-12 text-text-high">Impact So Far</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="border-border-color shadow-sm text-center">
              <CardContent className="pt-8">
                <p className="heading-1 text-impact-green mb-2">500+</p>
                <p className="body-medium text-text-medium">Founders in our community</p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm text-center">
              <CardContent className="pt-8">
                <p className="heading-1 text-focus-purple mb-2">50+</p>
                <p className="body-medium text-text-medium">Countries represented</p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm text-center">
              <CardContent className="pt-8">
                <p className="heading-1 text-impact-green mb-2">10k+</p>
                <p className="body-medium text-text-medium">Activities tracked in Greta</p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm text-center">
              <CardContent className="pt-8">
                <p className="heading-1 text-focus-purple mb-2">$100M+</p>
                <p className="body-medium text-text-medium">Capital deployed by our community</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Looking Forward Section */}
      <section className="py-24 px-20 bg-gradient-to-br from-impact-green/10 to-focus-purple/10">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-6 text-text-high">Looking Forward</h2>
          <p className="body-large text-text-medium mb-8 max-w-2xl">
            Impact is becoming infrastructure. In 2026 and beyond, every founder and organization will need to measure what matters. We're building the tools, stories, and community to make that happen—and we're just getting started.
          </p>
          <p className="body-large text-text-medium mb-8 max-w-2xl">
            Our roadmap includes expanded measurement frameworks, international expansion, deeper integrations with capital markets, and new tools we're excited to share soon.
          </p>
          <div className="flex items-center gap-4">
            <Button asChild size="lg" className="bg-impact-green hover:bg-impact-green/90 text-white rounded-xl button-text">
              <Link href="/for-founders">Join Our Community</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl button-text border-border-color">
              <Link href="/impact-intelligence">Get Impact Intelligence</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="heading-2 mb-6 text-text-high">Want to Learn More?</h2>
          <p className="body-large text-text-medium mb-8">
            Get in touch with our team or join the FrontForumFocus community to stay updated.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-impact-green hover:bg-impact-green/90 text-white rounded-xl button-text">
              <Link href="#" target="_blank">Schedule a Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl button-text border-border-color">
              <Link href="mailto:hello@frontforumfocus.com">hello@frontforumfocus.com</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
