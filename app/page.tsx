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
