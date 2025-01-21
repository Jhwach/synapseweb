"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const sections = {
    SYNAPSE: ["HOME", "ABOUT US", "TRACKS", "TIMELINE", "PRIZES", "FAQ"],
    ISTE: ["WEBSITE", "INSTAGRAM", "LINKEDIN", "YOUTUBE", "X"],
    IEEE: ["WEBSITE", "INSTAGRAM", "LINKEDIN", "YOUTUBE", "X"],
  }

  return (
    <footer className="bg-[#FFFF00] py-12 px-4 border-t-2 border-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {Object.entries(sections).map(([title, links]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-black font-bold font-mono mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-black hover:text-[#00FFFF] transition-colors font-mono"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-between items-center pt-8 border-t-2 border-black"
        >
          <p className="text-black flex items-center font-mono">
            MADE WITH <Heart className="w-4 h-4 mx-1 text-black" /> BY ISTE & IEEE
          </p>
          <Image src="/synapse.svg" alt="SYNAPSE" width={120} height={40} className="h-8 w-auto" />
        </motion.div>
      </div>
    </footer>
  )
}

