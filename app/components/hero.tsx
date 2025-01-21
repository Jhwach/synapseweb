"use client"

import { motion } from "framer-motion"

export default function Hero() {
  const letterVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section className="min-h-screen pt-20 flex flex-col items-center justify-center bg-black">
      <motion.div
        className="text-[#FFFF00] text-8xl md:text-9xl font-bold tracking-wider mb-8"
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1 }}
      >
        {"SYNAPSE".split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-[#FFFF00] text-xl md:text-2xl font-mono"
      >
        Code, create, and disrupt—one hack at a time!
      </motion.p>
    </section>
  )
}

