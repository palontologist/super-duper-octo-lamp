"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { CheckCircle, Zap, Users, TrendingUp, Target, ArrowRight } from "lucide-react";

export default function ForFoundersPage() {
  return (
    <div className="w-full min-h-screen bg-white text-text-high">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-border-color z-50 py-4 px-20">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link href="/" className="heading-3 text-impact-green">
            FrontForumFocus
          </Link>
          <Navigation isWhitePage={true} />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-20 bg-gradient-to-br from-impact-green/10 to-background-alt">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="heading-1 mb-6 text-text-high">For Founders & Indie Builders</h1>
          <p className="heading-3 text-text-medium mb-8">
            Tools and stories to help you price your time, grow revenue, and stay aligned with your impact thesis.
          </p>
          <div className="flex items-center gap-4">
            <Button asChild size="lg" className="bg-impact-green hover:bg-impact-green/90 text-white rounded-xl button-text">
              <Link href="#greta">Try Greta Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl button-text border-border-color">
              <Link href="#stories">Founder Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-12 text-text-high">The Founder's Dilemma</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-warning-color/20 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-warning-color" />
                </div>
                <h3 className="heading-3 mb-3 text-text-high">Mission vs. Revenue</h3>
                <p className="body-medium text-text-medium">
                  You want to build something meaningful, but you also need to pay the bills. How do you know which clients and projects actually align with your mission?
                </p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-text-low/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-text-high" />
                </div>
                <h3 className="heading-3 mb-3 text-text-high">Time is Your Asset</h3>
                <p className="body-medium text-text-medium">
                  As a solo founder, your time is your most valuable resource. But how much is it actually worth? Are you pricing yourself for impact or just getting by?
                </p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-impact-green/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-impact-green" />
                </div>
                <h3 className="heading-3 mb-3 text-text-high">Feeling Isolated</h3>
                <p className="body-medium text-text-medium">
                  It&apos;s lonely at the top. You need peers who get it—other founders who are building with purpose, not just profit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Greta Solution Section */}
      <section id="greta" className="py-24 px-20 bg-background-alt">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-4 text-text-high">Greta: Your Decision Dashboard</h2>
          <p className="body-large text-text-medium mb-12 max-w-2xl">
            Connect your calendar. Tag your work. See the real picture. Make better decisions about which clients, projects, and activities are truly worth your time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="heading-3 mb-4 text-text-high">How It Works</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-impact-green text-white flex items-center justify-center flex-shrink-0 font-semibold">
                    1
                  </div>
                  <div>
                    <p className="body-medium font-semibold text-text-high">Connect Your Calendar</p>
                    <p className="body-small text-text-medium">Pull in meetings, work blocks, and projects automatically from Google Calendar or Outlook.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-impact-green text-white flex items-center justify-center flex-shrink-0 font-semibold">
                    2
                  </div>
                  <div>
                    <p className="body-medium font-semibold text-text-high">AI Learns Your Patterns</p>
                    <p className="body-small text-text-medium">Greta automatically tags your activities and learns which types of work you focus on most.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-impact-green text-white flex items-center justify-center flex-shrink-0 font-semibold">
                    3
                  </div>
                  <div>
                    <p className="body-medium font-semibold text-text-high">Get Real Insights</p>
                    <p className="body-small text-text-medium">See your effective hourly rate by client, time allocation by project type, and mission-alignment scores.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border-color rounded-lg p-8">
              <h3 className="heading-3 mb-6 text-text-high">Sample Insights</h3>
              <div className="space-y-4">
                <div className="p-4 bg-impact-green/5 rounded-lg border border-impact-green/20">
                  <p className="body-small font-semibold text-impact-green mb-1">Supplier Calls</p>
                  <p className="body-small text-text-high"><strong>87% mission-aligned</strong> – Double down</p>
                </div>
                <div className="p-4 bg-focus-purple/5 rounded-lg border border-focus-purple/20">
                  <p className="body-small font-semibold text-focus-purple mb-1">Fundraising & Admin</p>
                  <p className="body-small text-text-high"><strong>65% mission-aligned</strong> – Keep, but optimize</p>
                </div>
                <div className="p-4 bg-warning-color/5 rounded-lg border border-warning-color/20">
                  <p className="body-small font-semibold text-warning-color mb-1">Social Media Posting</p>
                  <p className="body-small text-text-high"><strong>23% mission-aligned</strong> – Delegate or cut</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-impact-green hover:bg-impact-green/90 text-white rounded-xl button-text">
              <Link href="#" target="_blank">Start Your Free 14-Day Trial</Link>
            </Button>
            <p className="body-small text-text-low mt-4">No credit card required. Founder plan: $25/month billed yearly.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-12 text-text-high">Built for Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border-color shadow-sm">
              <CardHeader>
                <Zap className="w-8 h-8 text-impact-green mb-2" />
                <CardTitle className="heading-3">Real-Time Dashboards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-medium text-text-medium">
                  See your time allocation, revenue per hour, and mission alignment in real-time. Update your strategy based on actual data, not gut feeling.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardHeader>
                <CheckCircle className="w-8 h-8 text-focus-purple mb-2" />
                <CardTitle className="heading-3">AI-Powered Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-medium text-text-medium">
                  Greta suggests which projects to double down on, which to optimize, and which to let go. It learns your priorities and helps you stay aligned.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-impact-green mb-2" />
                <CardTitle className="heading-3">Pricing Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-medium text-text-medium">
                  Understand your effective hourly rate by client type and project. Price confidently knowing your actual costs and market value.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardHeader>
                <Users className="w-8 h-8 text-focus-purple mb-2" />
                <CardTitle className="heading-3">Community Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-medium text-text-medium">
                  Connect with 500+ founders building with impact. Share insights, get advice, and celebrate wins together in our private community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Stories Section */}
      <section id="stories" className="py-24 px-20 bg-background-alt">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 mb-12 text-text-high">Founder Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <p className="body-large text-text-high mb-6">
                  &quot;Greta helped me see that I was undercharging for my most impactful work. I raised rates by 40% and turned down the projects that didn&apos;t align with my mission.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-impact-green flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div>
                    <p className="body-medium font-semibold text-text-high">Alex</p>
                    <p className="caption-text text-text-low">Climate Tech Founder</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <p className="body-large text-text-high mb-6">
                  &quot;The community aspect changed everything. Talking to other founders who get the mission-vs-money tension made me feel less alone. Plus, the tactical advice has been invaluable.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-focus-purple flex items-center justify-center text-white font-semibold">
                    J
                  </div>
                  <div>
                    <p className="body-medium font-semibold text-text-high">Joy</p>
                    <p className="caption-text text-text-low">EdTech Builder</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <p className="body-large text-text-high mb-6">
                  &quot;I used to feel guilty about saying no to projects. Greta gave me data to back up my decisions. Now I say no confidently because I know it&apos;s the right move for my mission.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-impact-green flex items-center justify-center text-white font-semibold">
                    S
                  </div>
                  <div>
                    <p className="body-medium font-semibold text-text-high">Sam</p>
                    <p className="caption-text text-text-low">Health Innovation Founder</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="heading-2 mb-6 text-text-high">Ready to Price Your Impact?</h2>
          <p className="body-large text-text-medium mb-8">
            Join 500+ founders who are aligning their time, capital, and decisions with their deepest missions.
          </p>
          <Button asChild size="lg" className="bg-impact-green hover:bg-impact-green/90 text-white rounded-xl button-text">
            <Link href="#" target="_blank">Start Free 14-Day Trial</Link>
          </Button>
          <p className="body-small text-text-low mt-6">
            Questions? <Link href="#" className="text-focus-purple hover:underline">Book a 15-min intro call</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
