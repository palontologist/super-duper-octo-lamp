"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { Check, Users, Target, BarChart3, Globe, Star } from "lucide-react";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-white text-text-high">
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-24 px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-6 flex flex-col justify-center">
            <h1 className="heading-1 mb-6 text-text-high">
              Do less. Deliver more impact.
            </h1>
            <p className="body-large text-text-medium mb-8">
              A community + workspace that turns scattered work into mission‑aligned progress — with built‑in impact measurement.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <Button asChild size="lg" className="bg-impact-green hover:bg-impact-green/90 text-white rounded-xl button-text">
                <Link href="/start">Apply for the next Focus Cohort (25 spots)</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl button-text border-border-color">
                <Link href="#impact-snapshot">See an Impact Snapshot</Link>
              </Button>
            </div>
            <p className="caption-text text-text-low">
              Trusted by founders in Nairobi, Lagos, and Cape Town.
            </p>
          </div>

          
        </div>

        {/* Partner Logos Strip */}
        <div className="mt-16 pt-8 border-t border-border-color">
          <p className="caption-text text-text-low text-center mb-6">Trusted by leading impact organizations</p>
          <div className="flex items-center justify-center gap-12 opacity-40 grayscale">
            <div className="w-24 h-8 bg-border-color rounded"></div>
            <div className="w-24 h-8 bg-border-color rounded"></div>
            <div className="w-24 h-8 bg-border-color rounded"></div>
            <div className="w-24 h-8 bg-border-color rounded"></div>
          </div>
        </div>
      </section>

      {/* Problem → Promise Section */}
      <section id="problem" className="py-24 px-20 bg-background-alt">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 text-center mb-16">Too many tasks. Not enough traction.</h2>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-6">
              <p className="body-large text-text-medium">
                Founders and sustainability teams juggle tools, meetings, and reports — and the mission gets lost. 
                Frontforumfocus gives you a weekly rhythm that keeps everyone focused on what advances your mission—and proves it.
              </p>
            </div>
            <div className="col-span-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-impact-green flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="body-medium text-text-high">From scattered tasks to aligned weekly priorities</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-impact-green flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="body-medium text-text-high">From long reports to a one‑page Impact Snapshot</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-impact-green flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="body-medium text-text-high">From solo grind to peer accountability and momentum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 text-center mb-16">How it works</h2>
          <div className="grid grid-cols-3 gap-6">
            <Card className="border-border-color shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-impact-green text-white flex items-center justify-center heading-3 mb-4">
                  1
                </div>
                <CardTitle className="heading-3">Map your mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-medium text-text-medium">
                  Translate mission → quarterly outcomes → weekly &quot;Top 3&quot; in 30 mins.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-focus-purple text-white flex items-center justify-center heading-3 mb-4">
                  2
                </div>
                <CardTitle className="heading-3">Track simple impact metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-medium text-text-medium">
                  Pick 2-3 sector‑specific metrics (AgriTech, CleanTech, FinTech, HealthTech).
                </p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-impact-green text-white flex items-center justify-center heading-3 mb-4">
                  3
                </div>
                <CardTitle className="heading-3">Ship and show progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-medium text-text-medium">
                  Publish a shareable Impact Snapshot in 14 days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section id="proof" className="py-24 px-20 bg-background-alt">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 text-center mb-16">Proof it works</h2>
          <div className="grid grid-cols-12 gap-6 mb-12">
            {/* Testimonial */}
            <div className="col-span-6">
              <Card className="border-border-color shadow-sm h-full">
                <CardContent className="pt-6">
                  <p className="body-large text-text-high mb-6">
                    &quot;We cut ESG reporting time by 50% and shipped 9/12 weekly priorities.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-impact-green flex items-center justify-center text-white font-semibold">
                      CT
                    </div>
                    <div>
                      <p className="body-medium font-semibold text-text-high">CleanTech Founder</p>
                      <p className="caption-text text-text-low">Nairobi</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-warning-color text-warning-color" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="col-span-6 grid grid-cols-3 gap-4">
              <Card className="border-border-color shadow-sm text-center">
                <CardContent className="pt-6">
                  <div className="heading-1 text-impact-green mb-2">14</div>
                  <p className="caption-text text-text-low">days to first Impact Snapshot</p>
                </CardContent>
              </Card>
              <Card className="border-border-color shadow-sm text-center">
                <CardContent className="pt-6">
                  <div className="heading-1 text-focus-purple mb-2">80-90%</div>
                  <p className="caption-text text-text-low">weekly &quot;Top 3&quot; completion</p>
                </CardContent>
              </Card>
              <Card className="border-border-color shadow-sm text-center">
                <CardContent className="pt-6">
                  <div className="heading-1 text-impact-green mb-2">9/10</div>
                  <p className="caption-text text-text-low">cohort satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Bar */}
          <div className="flex items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-impact-green hover:bg-impact-green/90 text-white rounded-xl button-text">
              <Link href="/start">Apply for the next Focus Cohort</Link>
            </Button>
            <Link href="https://sourcia.ai/agent-george" target="_blank" rel="noopener noreferrer" className="body-medium text-focus-purple hover:underline">
              Book a 15‑min intro
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section id="product" className="py-24 px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 text-center mb-16">What you get</h2>
          
          {/* Feature Block A */}
          <div className="grid grid-cols-12 gap-12 mb-16 items-center">
            <div className="col-span-5">
              <div className="aspect-square bg-gradient-to-br from-impact-green/20 to-focus-purple/20 rounded-xl flex items-center justify-center border border-border-color">
                <Target className="w-24 h-24 text-impact-green" />
              </div>
            </div>
            <div className="col-span-7">
              <h3 className="heading-3 mb-4">Mission Map</h3>
              <p className="body-medium text-text-medium">
                Clear line of sight from vision to weekly actions.
              </p>
            </div>
          </div>

          {/* Feature Block B */}
          <div className="grid grid-cols-12 gap-12 mb-16 items-center">
            <div className="col-span-7">
              <h3 className="heading-3 mb-4">Impact Snapshot</h3>
              <p className="body-medium text-text-medium">
                Auto‑generated one‑pager for investors, partners, and grants.
              </p>
            </div>
            <div className="col-span-5">
              <div className="aspect-square bg-gradient-to-br from-focus-purple/20 to-impact-green/20 rounded-xl flex items-center justify-center border border-border-color">
                <BarChart3 className="w-24 h-24 text-focus-purple" />
              </div>
            </div>
          </div>

          {/* Feature Block C */}
          <div className="grid grid-cols-12 gap-12 mb-16 items-center">
            <div className="col-span-5">
              <div className="aspect-square bg-gradient-to-br from-impact-green/20 to-focus-purple/20 rounded-xl flex items-center justify-center border border-border-color">
                <Users className="w-24 h-24 text-impact-green" />
              </div>
            </div>
            <div className="col-span-7">
              <h3 className="heading-3 mb-4">Focus Cohorts</h3>
              <p className="body-medium text-text-medium">
                Weekly sessions, peer check‑ins, and mentor office hours.
              </p>
            </div>
          </div>

          {/* Feature Block D */}
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-7">
              <h3 className="heading-3 mb-4">Public Profiles (opt‑in)</h3>
              <p className="body-medium text-text-medium">
                Show wins and impact to attract partners and talent.
              </p>
            </div>
            <div className="col-span-5">
              <div className="aspect-square bg-gradient-to-br from-focus-purple/20 to-impact-green/20 rounded-xl flex items-center justify-center border border-border-color">
                <Globe className="w-24 h-24 text-focus-purple" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section id="cohorts" className="py-24 px-20 bg-background-alt">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 text-center mb-16">Built for mission‑driven teams</h2>
          <div className="grid grid-cols-3 gap-6">
            <Card className="border-border-color shadow-sm">
              <CardHeader>
                <CardTitle className="heading-3">Founders & small teams (2-20)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-medium text-text-medium">
                  <strong>Outcome:</strong> Prioritize what moves the mission. Share progress with investors and accelerators.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardHeader>
                <CardTitle className="heading-3">Sustainability/ESG leads (SMEs 50-500)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-medium text-text-medium">
                  <strong>Outcome:</strong> Centralize simple metrics and reduce reporting time without enterprise overhead.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardHeader>
                <CardTitle className="heading-3">Hubs & programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-medium text-text-medium">
                  <strong>Outcome:</strong> Run &quot;Cohort‑in‑a‑Box&quot; to help startups ship measurable outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="pricing" className="py-24 px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 text-center mb-16">Join the next 4‑week Focus Cohort</h2>
          <div className="grid grid-cols-12 gap-12">
            {/* Left - Checklist */}
            <div className="col-span-6 space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-impact-green flex-shrink-0 mt-1" />
                <p className="body-medium text-text-high">Weekly live sessions + templates + office hours</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-impact-green flex-shrink-0 mt-1" />
                <p className="body-medium text-text-high">Your first Impact Snapshot in 14 days</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-impact-green flex-shrink-0 mt-1" />
                <p className="body-medium text-text-high">A public profile to showcase wins (optional)</p>
              </div>
            </div>

            {/* Right - Pricing Card */}
            <div className="col-span-6">
              <Card className="border-impact-green shadow-lg">
                <CardHeader>
                  <CardTitle className="heading-3">Early member pricing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-border-color">
                    <span className="body-medium font-semibold">Starter</span>
                    <span className="body-medium text-impact-green">USD 25/user/month</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border-color">
                    <span className="body-medium font-semibold">Team</span>
                    <span className="body-medium text-impact-green">USD 99/user/month</span>
                  </div>
                  <div className="bg-background-alt p-4 rounded-lg">
                    <p className="caption-text text-text-medium">
                      <strong>Guarantee:</strong> If you don&apos;t publish an Impact Snapshot by week 2, join the next cohort free.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="apply" className="py-24 px-20 bg-background-alt">
        <div className="max-w-[640px] mx-auto">
          <h2 className="heading-2 text-center mb-4">Apply for the next Focus Cohort (25 spots)</h2>
          <p className="body-medium text-text-low text-center mb-12">We&apos;ll review applications within 48 hours. Enter your email to get started.</p>
          
          <Card className="border-border-color shadow-lg">
            <CardContent className="pt-6">
              <WaitlistForm 
                buttonText="Apply now"
                placeholder="you@example.com"
                successMessage="Application received! We'll review it within 48 hours and send next steps to your email."
                className="space-y-2"
                inputClassName="bg-white border-border-color text-text-high placeholder-text-low h-12 rounded-xl"
                buttonClassName="bg-impact-green hover:bg-impact-green/90 text-white h-12 rounded-xl button-text px-8"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-20">
        <div className="max-w-[800px] mx-auto">
          <h2 className="heading-2 text-center mb-16">Frequently asked</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border-color rounded-xl px-6">
              <AccordionTrigger className="heading-3 text-left hover:no-underline">
                Do I need to migrate from Notion/Trello?
              </AccordionTrigger>
              <AccordionContent className="body-medium text-text-medium">
                No. Keep your tools. Use Frontforumfocus to set priorities, track impact, and create snapshots.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border-color rounded-xl px-6">
              <AccordionTrigger className="heading-3 text-left hover:no-underline">
                Is this only for &quot;ESG teams&quot;?
              </AccordionTrigger>
              <AccordionContent className="body-medium text-text-medium">
                No. It&apos;s for mission‑driven founders and teams who want momentum and measurable outcomes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border-color rounded-xl px-6">
              <AccordionTrigger className="heading-3 text-left hover:no-underline">
                How much time weekly?
              </AccordionTrigger>
              <AccordionContent className="body-medium text-text-medium">
                90 mins total: 30 mins plan; 60 mins live/check‑ins.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border-color rounded-xl px-6">
              <AccordionTrigger className="heading-3 text-left hover:no-underline">
                What if I can&apos;t share data publicly?
              </AccordionTrigger>
              <AccordionContent className="body-medium text-text-medium">
                Metrics are private by default. Public profiles are opt‑in.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-20 bg-gradient-to-br from-impact-green/10 to-focus-purple/10">
        <div className="max-w-[800px] mx-auto text-center">
          <h3 className="heading-2 mb-6">Ready to go from scattered to mission‑aligned?</h3>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button asChild size="lg" className="bg-impact-green hover:bg-impact-green/90 text-white rounded-xl button-text">
              <Link href="/start">Apply for the next Focus Cohort</Link>
            </Button>
            <Link href="https://sourcia.ai/agent-george" target="_blank" rel="noopener noreferrer" className="body-medium text-focus-purple hover:underline">
              Book a 15‑min intro
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-20 bg-text-high text-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-2xl font-bold text-impact-green">FrontForumFocus</div>
            <nav className="flex gap-6">
              <Link href="/privacy" className="body-medium text-text-low hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="body-medium text-text-low hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="body-medium text-text-low hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <Separator className="bg-white/10 mb-8" />
          <div className="text-center caption-text text-text-low">
            © {new Date().getFullYear()} FrontForumFocus — Built for founders
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border-color p-4 shadow-lg z-40">
        <div className="flex items-center gap-3">
          <Button asChild className="flex-1 bg-impact-green hover:bg-impact-green/90 text-white rounded-xl">
            <Link href="/start">Apply</Link>
          </Button>
          <Link href="https://sourcia.ai/agent-george" target="_blank" rel="noopener noreferrer" className="caption-text text-focus-purple hover:underline whitespace-nowrap">
            Intro call
          </Link>
        </div>
      </div>
    </div>
  );
}