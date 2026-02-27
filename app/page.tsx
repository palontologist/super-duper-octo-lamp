"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full h-screen bg-[#111] text-white overflow-hidden relative flex flex-col items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-5 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-white/10"></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 lg:px-20 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="text-3xl font-bold">
            <span className="text-white">f</span>
            <span className="text-yellow-300">^</span>
            <span className="text-white">3</span>
          </div>
        </motion.div>

        {/* Hero Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              <span className="text-yellow-300">Tech making</span> impact{" "}
              <span className="text-white">measurable</span> for everyone.
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl">
              Clear priorities, accountability, and shipped outcomes.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-full font-bold px-8 py-6 text-lg"
            >
              <a
                href="https://greta-v2.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Try Greta
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          {/* Right Scattered Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-96 hidden lg:block"
          >
            {/* Image Placeholders - Scattered Layout */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center"
            >
              <span className="text-gray-600 text-sm">Product Image 1</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center"
            >
              <span className="text-gray-600 text-sm">Product Image 2</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
              className="absolute top-32 left-32 w-36 h-36 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center"
            >
              <span className="text-gray-600 text-sm">Product Image 3</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 mt-16 text-center max-w-2xl mx-auto"
        >
          <div>
            <div className="text-3xl font-bold text-yellow-300">500+</div>
            <div className="text-gray-400 text-sm">Founders</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-300">50+</div>
            <div className="text-gray-400 text-sm">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-300">10k+</div>
            <div className="text-gray-400 text-sm">Outcomes</div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}

            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <p className="body-large text-text-high mb-6">
                  &quot;Donor reports went from 12 hours to 30 minutes. Our team finally shares the same definition of progress.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-focus-purple flex items-center justify-center text-white font-semibold text-sm">
                    S
                  </div>
                  <div>
                    <p className="body-medium font-semibold text-text-high">Samuel</p>
                    <p className="caption-text text-text-low">Health NGO leader</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border-color shadow-sm">
              <CardContent className="pt-8">
                <p className="body-large text-text-high mb-6">
                  &quot;Greta gave me confidence to fundraise and expand internationally.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-impact-green flex items-center justify-center text-white font-semibold text-sm">
                    J
                  </div>
                  <div>
                    <p className="body-medium font-semibold text-text-high">Joy</p>
                    <p className="caption-text text-text-low">Youth skills innovator</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="heading-2 text-center mb-4">The FrontForumFocus community</h2>
          <p className="body-large text-text-medium text-center mb-16 max-w-2xl mx-auto">
            A global network of founders, operators, and creators who believe impact should be measurable—not just a tagline.
          </p>
          
          <div className="grid grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-impact-green/20 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-impact-green" />
              </div>
              <h3 className="body-medium font-semibold text-text-high mb-2">Discord</h3>
              <p className="caption-text text-text-medium">500+ members from 50+ countries</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-focus-purple/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-focus-purple" />
              </div>
              <h3 className="body-medium font-semibold text-text-high mb-2">Events</h3>
              <p className="caption-text text-text-medium">Live sessions with founders & investors</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-impact-green/20 flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-impact-green" />
              </div>
              <h3 className="body-medium font-semibold text-text-high mb-2">Resources</h3>
              <p className="caption-text text-text-medium">Templates, frameworks, and tools</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-focus-purple/20 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-focus-purple" />
              </div>
              <h3 className="body-medium font-semibold text-text-high mb-2">Office hours</h3>
              <p className="caption-text text-text-medium">Small-group calls on impact, capital, product</p>
            </div>
          </div>

          <div className="text-center">
            <a href="mailto:support@frontforumfocus.com">
              <Button size="lg" className="bg-impact-green hover:bg-impact-green/90 text-white rounded-xl button-text">
                Join the community
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section id="about" className="py-24 px-20 bg-background-alt">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="heading-2 mb-8">About FrontForumFocus</h2>
          <p className="body-large text-text-medium mb-6">
            We're a bootstrapped, founder‑led team building the infrastructure for mission‑driven work.
          </p>
          <p className="body-large text-text-medium mb-8">
            From solo founders to global organizations, we help you answer one question:
          </p>
          <p className="heading-3 text-text-high mb-8">
            Is the work you're doing today actually moving your mission—and your numbers?
          </p>
          <Link href="/about" className="body-medium text-focus-purple hover:underline inline-block">
            Read our story →
          </Link>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="py-24 px-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="heading-2 mb-4">Start building with impact intelligence.</h2>
          <p className="body-large text-text-medium mb-12">
            Get the signals, tools, and community you need to grow with purpose and financial clarity.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-impact-green hover:bg-impact-green/90 text-white rounded-xl button-text">
              <a href="https://greta-v2.vercel.app" target="_blank" rel="noopener noreferrer">Try Greta free</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl button-text border-border-color">
              <Link href="/impact-intelligence">Impact Intelligence</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="apply" className="py-24 px-20 bg-background-alt">
        <div className="max-w-[640px] mx-auto">
          <h2 className="heading-2 text-center mb-4">Stay updated on impact intelligence</h2>
          <p className="body-medium text-text-low text-center mb-12">Get insights, tools, and community updates delivered to your inbox. No spam, just impact.</p>
          
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
                What is Greta exactly?
              </AccordionTrigger>
              <AccordionContent className="body-medium text-text-medium">
                Greta is a calendar-to-impact tool for founders. Connect your calendar, tag your work, and see which clients and projects actually align with your mission and revenue goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border-color rounded-xl px-6">
              <AccordionTrigger className="heading-3 text-left hover:no-underline">
                Do I need to use all three products?
              </AccordionTrigger>
              <AccordionContent className="body-medium text-text-medium">
                No. Choose what fits your needs. Founders often start with Greta. Organizations often start with the Enterprise platform. Anyone can read Impact Intelligence.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border-color rounded-xl px-6">
              <AccordionTrigger className="heading-3 text-left hover:no-underline">
                Is this only for ESG-certified organizations?
              </AccordionTrigger>
              <AccordionContent className="body-medium text-text-medium">
                No. It&apos;s for any founder or organization that cares about impact—whether you're climate tech, education, health, finance, or anything else.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border-color rounded-xl px-6">
              <AccordionTrigger className="heading-3 text-left hover:no-underline">
                What about data privacy?
              </AccordionTrigger>
              <AccordionContent className="body-medium text-text-medium">
                All your data is private by default. You own your impact dashboards and only share what you choose. No selling data. No surprises.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-20 bg-gradient-to-br from-impact-green/10 to-focus-purple/10">
        <div className="max-w-[800px] mx-auto text-center">
          <h3 className="heading-2 mb-6">Ready to measure what matters?</h3>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button asChild size="lg" className="bg-impact-green hover:bg-impact-green/90 text-white rounded-xl button-text">
              <Link href="#greta">Try Greta free</Link>
            </Button>
            <Button asChild size="lg" className="bg-focus-purple hover:bg-focus-purple/90 text-white rounded-xl button-text">
              <Link href="#enterprise">Explore Enterprise</Link>
            </Button>
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
            <Link href="#greta">Try Greta</Link>
          </Button>
          <Button asChild className="flex-1 bg-focus-purple hover:bg-focus-purple/90 text-white rounded-xl">
            <Link href="#enterprise">Enterprise</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
