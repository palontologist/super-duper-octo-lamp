"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, ArrowRight, BookOpen } from "lucide-react";

export default function StoriesPage() {
  return (
    <div className="w-full min-h-screen bg-white text-text-high pt-24">
      {/* Hero Section */}
      <section className="py-24 px-20 bg-gradient-to-br from-impact-green/10 to-background-alt">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="heading-1 mb-6 text-text-high">Stories from Our Community</h1>
          <p className="body-large text-text-medium mb-8 max-w-2xl">
            Learn from founders, organizations, and leaders who are building with impact. These are real stories from real people solving real problems.
          </p>
        </div>
      </section>

      {/* Podcast Episodes Section */}
      <section className="py-24 px-20">
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
                    <div className="inline-block px-3 py-1 bg-impact-green/20 text-impact-green rounded-full mb-3">
                      <p className="caption-text font-semibold">Education</p>
                    </div>
                    <h3 className="heading-3 mb-3 text-text-high">
                      Dropout: Building the Future of Learning
                    </h3>
                    <p className="body-medium text-text-medium mb-2">
                      with Leeland Zhang
                    </p>
                    <p className="body-small text-text-low mb-6">
                      Leeland shares how Dropout is reimagining education for the next generation. We explore the tension between access, quality, and sustainability—and how to build at the intersection of all three.
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
                    <div className="inline-block px-3 py-1 bg-focus-purple/20 text-focus-purple rounded-full mb-3">
                      <p className="caption-text font-semibold">Community</p>
                    </div>
                    <h3 className="heading-3 mb-3 text-text-high">
                      Building Global Learning Communities
                    </h3>
                    <p className="body-medium text-text-medium mb-2">
                      with Aryan Marxaney
                    </p>
                    <p className="body-small text-text-low mb-6">
                      How do you build learning experiences that work across different geographies, languages, and contexts? Aryan discusses the infrastructure needed to scale community-driven impact globally.
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
                    <div className="inline-block px-3 py-1 bg-impact-green/20 text-impact-green rounded-full mb-3">
                      <p className="caption-text font-semibold">Philanthropy</p>
                    </div>
                    <h3 className="heading-3 mb-3 text-text-high">
                      The Awari Collective: Redefining Global Philanthropy
                    </h3>
                    <p className="body-medium text-text-medium mb-2">
                      with Elena, Founder of Awari Collective
                    </p>
                    <p className="body-small text-text-low mb-6">
                      Elena shares the journey of Awari Collective—a pioneering force in redefining how philanthropy works globally. From Geneva to Nigeria, discover how they're building trust and empowering communities.
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

      {/* Case Studies Section */}
      <section className="py-24 px-20 bg-background-alt">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-4 text-text-high">Case Studies</h2>
          <p className="body-medium text-text-medium mb-12">
            See how real organizations have used FrontForumFocus to measure, track, and optimize their impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <Card className="border-border-color shadow-sm overflow-hidden">
              <CardHeader className="bg-impact-green/5">
                <div className="inline-block px-3 py-1 bg-impact-green/20 text-impact-green rounded-full mb-3 w-fit">
                  <p className="caption-text font-semibold">Climate Tech</p>
                </div>
                <CardTitle className="heading-3">CleanTech Startup Doubles Pricing & Halves Reporting Time</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="body-small text-text-low"><strong>The Challenge:</strong> A climate tech startup was undercharging for their core offering and spending 20+ hours per month on reporting to impact investors.</p>
                  <p className="body-small text-text-low"><strong>The Solution:</strong> Using Greta, they identified that 70% of their revenue came from work that was 90%+ mission-aligned. They raised rates by 40% and implemented FrontForumFocus's automated reporting.</p>
                  <p className="body-small text-text-low"><strong>The Result:</strong> Pricing aligned with impact. Reporting time cut from 20 hours to 3 hours per month. Investor confidence increased due to real-time dashboards.</p>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 2 */}
            <Card className="border-border-color shadow-sm overflow-hidden">
              <CardHeader className="bg-focus-purple/5">
                <div className="inline-block px-3 py-1 bg-focus-purple/20 text-focus-purple rounded-full mb-3 w-fit">
                  <p className="caption-text font-semibold">EdTech NGO</p>
                </div>
                <CardTitle className="heading-3">Education NGO Accelerates Program Decisions</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="body-small text-text-low"><strong>The Challenge:</strong> A growing education NGO had 12 different programs across 5 countries. They couldn't see which ones were driving real impact—or which were burning resources.</p>
                  <p className="body-small text-text-low"><strong>The Solution:</strong> Implemented FrontForumFocus enterprise platform to centralize data from all programs. Created real-time dashboards showing cost per student, learning outcomes, and retention rates.</p>
                  <p className="body-small text-text-low"><strong>The Result:</strong> Identified that 2 programs were 5x more cost-effective than others. Reallocated resources. Within 12 months, impact per dollar increased by 40%.</p>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 3 */}
            <Card className="border-border-color shadow-sm overflow-hidden">
              <CardHeader className="bg-impact-green/5">
                <div className="inline-block px-3 py-1 bg-impact-green/20 text-impact-green rounded-full mb-3 w-fit">
                  <p className="caption-text font-semibold">Impact Fund</p>
                </div>
                <CardTitle className="heading-3">Impact Fund Standardizes Portfolio Measurement</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="body-small text-text-low"><strong>The Challenge:</strong> An impact fund with 30+ portfolio companies had zero standardized way to track impact across investments. Each company reported differently—or didn't report at all.</p>
                  <p className="body-small text-text-low"><strong>The Solution:</strong> Deployed FrontForumFocus across the entire portfolio. Created standardized dashboards for financial performance + impact metrics for each company and fund-level aggregates.</p>
                  <p className="body-small text-text-low"><strong>The Result:</strong> Full visibility into portfolio impact for the first time. Identified top performers. Better decision-making on follow-on funding. LP reporting went from 6 weeks to 2 weeks.</p>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 4 */}
            <Card className="border-border-color shadow-sm overflow-hidden">
              <CardHeader className="bg-focus-purple/5">
                <div className="inline-block px-3 py-1 bg-focus-purple/20 text-focus-purple rounded-full mb-3 w-fit">
                  <p className="caption-text font-semibold">Corporate ESG</p>
                </div>
                <CardTitle className="heading-3">Fortune 500 Company Proves ESG ROI</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="body-small text-text-low"><strong>The Challenge:</strong> ESG was seen as a cost center. Leadership wanted to understand the actual business impact of ESG initiatives—and struggled to connect programs to outcomes.</p>
                  <p className="body-small text-text-low"><strong>The Solution:</strong> Built integrated dashboard connecting ESG programs to financial metrics, risk reduction, employee retention, and brand value. Real-time tracking of progress toward ESG targets.</p>
                  <p className="body-small text-text-low"><strong>The Result:</strong> Showed that ESG initiatives reduced operational costs by $5M annually. Increased employee retention by 12%. Board approved 2x budget increase for ESG initiatives.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-4 text-text-high">Impact Intelligence Newsletter</h2>
          <p className="body-medium text-text-medium mb-12">
            Deep dives into the infrastructure, capital, and technology shaping impact in 2026.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-border-color shadow-sm overflow-hidden">
              <CardHeader className="bg-impact-green/5">
                <CardTitle className="heading-3 text-impact-green">Edition 1: The Rise of Impact Investment</CardTitle>
                <p className="body-small text-text-medium mt-2">What Does Trust Really Mean?</p>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="body-medium text-text-high mb-4">
                  <strong>Welcome to the new era of Impact.</strong> We've opened the door and guess what? Proof's inside.
                </p>
                <p className="body-small text-text-medium mb-6">
                  This edition explores how trust is actually being built in impact investing—beyond buzzwords and into measurable infrastructure. We analyze where capital is flowing, what frameworks investors are using, and what this means for founders building with impact.
                </p>
                <Button asChild variant="outline" className="w-full rounded-lg border-impact-green text-impact-green hover:bg-impact-green/5">
                  <Link href="/impact-intelligence" className="flex items-center justify-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Read Full Edition
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm overflow-hidden">
              <CardHeader className="bg-focus-purple/5">
                <CardTitle className="heading-3 text-focus-purple">Edition 2: Where Will Trust Be Built?</CardTitle>
                <p className="body-small text-text-medium mt-2">Who Gets to Shape It in 2030?</p>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="body-medium text-text-high mb-4">
                  <strong>Impact infrastructure is being built right now.</strong> The question isn't whether trust will be built—it's where, and who gets to shape it.
                </p>
                <p className="body-small text-text-medium mb-6">
                  We explore the emerging platforms, technologies, and networks that will define impact measurement and capital allocation in 2030. From decentralized verification systems to new governance models.
                </p>
                <Button asChild variant="outline" className="w-full rounded-lg border-focus-purple text-focus-purple hover:bg-focus-purple/5">
                  <Link href="/impact-intelligence" className="flex items-center justify-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Read Full Edition
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-impact-green hover:bg-impact-green/90 text-white rounded-xl button-text">
              <Link href="/impact-intelligence">Subscribe to Impact Intelligence</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-20 bg-gradient-to-br from-impact-green/10 to-focus-purple/10">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="heading-2 mb-6 text-text-high">Your Story Matters</h2>
          <p className="body-large text-text-medium mb-8">
            Are you building something with impact? We'd love to hear your story and share it with our community.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-impact-green hover:bg-impact-green/90 text-white rounded-xl button-text">
              <Link href="mailto:hello@frontforumfocus.com">Share Your Story</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl button-text border-border-color">
              <Link href="/for-founders">Join Our Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
