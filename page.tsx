"use client"

import { motion } from "framer-motion"
import Header from "./components/header"
import AnimatedLogo from "./components/animated-logo"
import Sponsors from "./components/sponsors"
import OurSponsors from "./components/our-sponsors"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#FFFF00]">
      <Header />

      <main className="pt-20">
        <div className="container mx-auto px-4 min-h-[80vh] flex flex-col items-center justify-center space-y-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <AnimatedLogo />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-4xl font-mono text-center"
          >
            Code, create, and disrupt—one hack at a time!
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255,255,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00FFFF] text-black px-8 py-3 rounded-full text-lg font-medium
                       border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                       hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                       transition-shadow duration-200"
            >
              REGISTER NOW
            </motion.button>
          </motion.div>
        </div>

        <Sponsors />
        <OurSponsors />
      </main>
    </div>
  )
}

