"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function OurSponsors() {
  const sponsors = [
    {
      name: "Microsoft Learn Student Ambassador",
      image: "/MLSA.svg",
      width: 180,
      height: 180,
    },
    {
      name: "Jio",
      image: "/JIO.svg",
      width: 180,
      height: 180,
    },
    {
      name: "Sketch",
      image: "/SKETCH.svg",
      width: 180,
      height: 180,
    },
  ]

  return (
    <section className="py-20 px-4 bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <motion.h2 className="text-[#FFFF00] text-4xl md:text-6xl font-bold text-center mb-20">OUR SPONSORS</motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center items-center max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="w-full flex justify-center"
            >
              <Image
                src={sponsor.image || "/synapse.svg"}
                alt={sponsor.name}
                width={sponsor.width}
                height={sponsor.height}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

