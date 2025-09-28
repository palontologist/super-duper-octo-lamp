"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-black text-white">

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Image - Using MOSHED image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0 overflow-hidden"
        >
          <Image
            src="/new.png"
            alt="Abstract hero background"
            fill
            className="object-cover opacity-80"
            priority
          />
          
          {/* Glitch effect overlay elements */}
          <motion.div
            animate={{ 
              x: [0, 10, -5, 0],
              opacity: [0.3, 0.7, 0.3] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute top-20 left-20 w-[30px] h-[30px] bg-cyan-400 opacity-30"
          />
          <motion.div
            animate={{ 
              x: [0, -8, 12, 0],
              opacity: [0.2, 0.6, 0.2] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1 
            }}
            className="absolute top-40 right-32 w-[30px] h-[30px] bg-pink-400 opacity-30"
          />
          <motion.div
            animate={{ 
              x: [0, 15, -10, 0],
              opacity: [0.4, 0.8, 0.4] 
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2 
            }}
            className="absolute bottom-32 left-40 w-[30px] h-[30px] bg-purple-400 opacity-30"
          />
        </motion.div>

        {/* Hero Text */}
        <div className="relative z-10 px-8 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-4"
          >
            
                Community + tools to connect purpose
            
                with outcomes
           
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
            className="mx-auto max-w-2xl text-lg md:text-xl text-white/70 font-medium"
          >
            Where ambitious founders and teams align daily work to what matters—with community, breakthrough tools, and AI-powered insights.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="/start">Try Greta</Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="rounded-full px-6">
              <Link href="/start?demo=1">Request Demo</Link>
            </Button>

            <Button asChild size="lg" variant="ghost" className="rounded-full px-6">
              <Link href="/waitlist">Join Newsletter</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Problem & Vision Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Most platforms track your output—not your true impact.
          </h2>
          <p className="text-lg md:text-xl opacity-80 mb-8">
            In today&apos;s world, it&apos;s easy to get lost in busywork, fragmented tasks, and metrics that don&apos;t move the needle. FrontForumFocus is built for those who believe that every action, task, and goal should drive real progress towards purpose—individually and at scale.
          </p>
          <p className="text-base md:text-lg font-medium text-teal-300">
            We put purpose at the heart of productivity.
          </p>
        </div>
      </section>

      {/* Ecosystem: Greta + Impact Dashboard + Podcast */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-black via-neutral-900 to-black">
        <div className="max-w-6xl w-full">
          <h2 className="font-bold text-4xl text-center mb-6">Our Ecosystem</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Greta Card */}
            <div className="flex-1 bg-white/5 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Greta: Your Mission OS</h3>
              <p className="mb-3">
                Turn your daily grind into purpose-driven progress. Score your tasks for mission alignment, reflect with AI-powered insights, and stay truly on track—all in one app.
              </p>
              <a href="https://greta-v2.vercel.app/dashboard" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">See Greta in action →</a>
            </div>
            {/* Impact Dashboard Card */}
            <div className="flex-1 bg-white/5 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Impact Dashboard (Enterprise)</h3>
              <p className="mb-3">
                Visualize and report your organization’s real-world impact. From ESG and SDGs to custom outcomes, track progress, spot opportunities, and share your story with the world.
              </p>
              <a href="https://impact-dash-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Explore the dashboard →</a>
            </div>
            {/* Podcast Card */}
            <div className="flex-1 bg-white/5 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Podcast</h3>
              <p className="mb-3">
                Unfiltered conversations with founders and leaders who make purpose practical. Get inspired—and get moving.
              </p>
              <a href="#" className="text-cyan-300 underline">Listen now →</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-neutral-950">
        <div className="max-w-6xl w-full text-center">
          <h2 className="font-bold text-4xl mb-8">How It Works</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="flex-1">
              <div className="text-5xl text-cyan-300 mb-2">1</div>
              <div>Join FrontForumFocus—free for founders and teams</div>
            </div>
            <div className="flex-1">
              <div className="text-5xl text-cyan-300 mb-2">2</div>
              <div>Activate Greta or request Enterprise Impact tools</div>
            </div>
            <div className="flex-1">
              <div className="text-5xl text-cyan-300 mb-2">3</div>
              <div>Get actionable AI nudges, track alignment, measure results</div>
            </div>
            <div className="flex-1">
              <div className="text-5xl text-cyan-300 mb-2">4</div>
              <div>Celebrate impact—share your story and learn from the community</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="min-h-screen flex items-center justify-center py-16 bg-black">
        <div className="max-w-4xl w-full text-center">
          <h2 className="font-bold text-3xl mb-4">Real Impact, Real Stories</h2>
          <div className="text-lg mb-8 opacity-80">
            <p>“Greta helped our team stay focused—impact is now a conversation, not just a spreadsheet.”</p>
            <p className="mt-4 italic text-cyan-300">— FFF Beta User</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/5 rounded-xl p-6">+20 founders aligned daily</div>
            <div className="bg-white/5 rounded-xl p-6">Enterprise dashboards for 2+ pilot companies</div>
            <div className="bg-white/5 rounded-xl p-6">Podcast listeners in 12+ countries</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center py-16">
          <h2 className="text-4xl font-extrabold mb-4">Make purpose the north star for your team</h2>
          <p className="text-white/70 mb-6">Start a free trial and see how small changes in focus create outsized impact.</p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="https://greta-v2.vercel.app/" target="_blank" rel="noopener noreferrer">Try Greta</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link href="https://sourcia.ai/agent-george" target="_blank" rel="noopener noreferrer">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/70">© {new Date().getFullYear()} Greta — Built for founders</div>
          <nav className="flex gap-4 text-sm">
            <Link href="/privacy" className="text-white/60 hover:underline">Privacy</Link>
            <Link href="/terms" className="text-white/60 hover:underline">Terms</Link>
            <Link href="/contact" className="text-white/60 hover:underline">Contact</Link>
          </nav>
        </div>
      </footer>

    </div>
  );
}