"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#FFFF00] px-4 py-3"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-black text-2xl font-bold">
          SYNAPSE
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {["ABOUT", "TRACKS", "TIMELINE", "PRIZES", "FAQ"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-black font-medium hover:opacity-70 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#00FFFF] px-6 py-2 rounded-lg text-black font-bold 
                     border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                     hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
                     hover:translate-x-[2px] hover:translate-y-[2px]
                     transition-all"
        >
          REGISTER NOW
        </motion.button>
      </div>
    </motion.header>
  )
}

