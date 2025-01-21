"use client"

import { motion } from "framer-motion"

export default function AnimatedLogo() {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.svg viewBox="0 0 400 200" initial="hidden" animate="visible" className="w-full max-w-3xl mx-auto">
      <motion.path
        d="M50 100 C80 50, 120 50, 150 100 C180 150, 220 150, 250 100 C280 50, 320 50, 350 100"
        stroke="#FFFF00"
        strokeWidth="8"
        fill="none"
        variants={pathVariants}
      />
      {/* Add more paths to complete the SYNAPSE text */}
    </motion.svg>
  )
}

