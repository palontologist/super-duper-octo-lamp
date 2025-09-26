"use client"

import { WaitlistForm } from "@/components/ui/waitlist-form";
import Image from "next/image";
import { ComicText } from "@/components/magicui/comic-text";
import { motion } from "framer-motion";



export default function Page() {
  return (
    <div className="min-h-screen bg-[#111] flex flex-col relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/soph.png')"
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
 
        
        {/* Main content area */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 pb-24 sm:pb-32 pt-24">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-white mb-4 sm:mb-6">
           Your focus is broken.
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl text-center text-white/80 max-w-2xl px-4 mb-8 sm:mb-12">
            Align your daily actions with your core mission.
          </p>
          <div className="w-full max-w-5xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
                <Image
                  src="/mm.png"
                  alt="Step 1 screenshot"
                  width={240}
                  height={480}
                  className="rounded-xl ring-1 ring-white/10 shadow-lg object-cover w-40 sm:w-48 md:w-60 h-auto"
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  priority={false}
                />
                <Image
                  src="/n.png"
                  alt="Step 2 screenshot"
                  width={240}
                  height={480}
                  className="rounded-xl ring-1 ring-white/10 shadow-lg object-cover w-40 sm:w-48 md:w-60 h-auto"
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  priority={false}
                />
                <Image
                  src="/nn.png"
                  alt="Step 3 screenshot"
                  width={240}
                  height={480}
                  className="rounded-xl ring-1 ring-white/10 shadow-lg object-cover w-40 sm:w-48 md:w-60 h-auto"
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
          {/* Narrative paragraphs (no nested <p>) */}
          <p className="mx-auto max-w-[70ch] text-left text-white/80 text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-4">
            As a founder, you&apos;re constantly pulled in a dozen directions.
          </p>
          <p className="mx-auto max-w-[70ch] text-left text-white/80 text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-4 mt-3">
            The tools we&apos;re forced to use—our calendars, notes, and chats—are just a list of tasks.
          </p>
          <p className="mx-auto max-w-[70ch] text-left text-white/80 text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-4 mt-3">
            They show us what we&apos;re doing, but they have no idea what we&apos;re trying to achieve.
          </p>
          <p className="mx-auto max-w-[70ch] text-left text-white/80 text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-4 mt-3">
            They aren&apos;t aligned with our ambition.
          </p>
          <p className="mx-auto max-w-[70ch] text-left text-white/80 text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-4 mt-3">
            Greta is the first tool of its kind to connect every meeting, every task, and every idea back to your North Star.
          </p>
          <p className="mx-auto max-w-[70ch] text-left text-white/80 text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-4 mt-3">
            It’s the clarity you need to confidently say &quot;no&quot; to distractions and &quot;yes&quot; to building your future.
          </p>

          {/* Connect Purpose to Outcomes Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mt-16 mb-16 px-4"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Connect Purpose to Outcomes
              </h2>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Where makers, founders, and ambitious teams align what they do with why they do it—then track, measure, and amplify their impact.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tools and Community Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Tools and Community
              </h2>
              <p className="text-xl text-white/70">
                Everything you need to transform purpose into measurable impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Greta */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4">Greta</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Your personal mission-alignment app
                </p>
                <div className="mt-6">
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                    Try Greta
                  </button>
                </div>
              </motion.div>

              {/* Enterprise Impact Dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-5xl mb-6">📊</div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Impact Dashboard</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Track and measure organizational alignment at scale
                </p>
                <div className="mt-6">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>

              {/* F³ Podcast */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-5xl mb-6">🎙️</div>
                <h3 className="text-2xl font-bold text-white mb-4">F³ Podcast</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Conversations that spark
                </p>
                <div className="mt-6">
                  <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                    Listen Now
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-8 bg-white/5"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-xl text-white/70">
                Four simple steps to transform your focus
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-teal-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Join F³</h3>
                <p className="text-white/80 leading-relaxed">
                  Start your journey with our community of focused founders
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Activate your tools</h3>
                <p className="text-white/80 leading-relaxed">
                  Set up Greta and connect your existing workflow
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Track & measure your impact</h3>
                <p className="text-white/80 leading-relaxed">
                  See how every action aligns with your North Star
                </p>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Grow, learn, and share</h3>
                <p className="text-white/80 leading-relaxed">
                  Connect with the community and amplify your impact
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 pb-24 sm:pb-32 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              Ready to make purpose practical?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Start For Free
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Try Greta
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Listen to the Podcast
              </motion.button>
            </div>
          </motion.div>

          {/* Try it section */}
          <div className="space-y-8 text-center mb-8">
            <ComicText fontSize={2}>Join the Founder&apos;s Circle!</ComicText>
          </div>
          
          {/* Pricing copy (no nested <p>) */}
          <div className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl text-center mb-8 px-4 space-y-2">
            <p>It’s $15/month, billed annually ($180).</p>
            <p>This charter price is locked in for life for our first 20 members, and includes a 30-minute personal onboarding call with me to set up your North Star.</p>
            <p>The standard price will be $25/month.</p>
          </div>
          
          {/* Waitlist Form */}
          <div className="w-full max-w-sm sm:max-w-md">
            <WaitlistForm
              buttonText="Get Onboarded"
              placeholder="you@company.com"
              inputClassName="bg-gray-800/50 border-gray-700 text-white h-10 sm:h-12 flex-grow min-w-0 text-sm sm:text-base"
              buttonClassName="bg-teal-500 hover:bg-teal-600 text-white h-10 sm:h-12 px-4 sm:px-6 font-semibold whitespace-nowrap text-sm sm:text-base"
              successMessage="We'll contact you soon!"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
