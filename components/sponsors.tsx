"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Sponsors() {
  return (
    <section className="py-20 px-4 bg-[#FFFF00]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <motion.h2 className="text-black text-4xl md:text-6xl font-bold text-center mb-20">BROUGHT TO YOU BY</motion.h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
          {/* IEEE-VIT Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-6">
              <Image src="/IEEE.svg" alt="IEEE-VIT Logo" width={80} height={80} className="object-contain" />
              <h3 className="text-black text-3xl font-bold">IEEE-VIT</h3>
            </div>
            <p className="text-black font-mono text-base leading-relaxed">
            IEEE VIT is the student chapter of the Institute of Electrical and Electronics Engineers (IEEE) at VIT. Our goal is to foster innovation and technical excellence by providing students with opportunities to explore the fields of electrical, electronics, computer science, and related disciplines. We organize workshops, technical events, and networking sessions to enhance skills, encourage collaboration, and promote professional growth. Through these activities, IEEE VIT aims to create a vibrant community of aspiring engineers dedicated to shaping the future with cutting-edge technology.
            </p>
          </motion.div>

          {/* ISTE-VIT Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-6">
              <Image src="/ISTE.svg" alt="ISTE-VIT Logo" width={80} height={80} className="object-contain" />
              <h3 className="text-black text-3xl font-bold">ISTE-VIT</h3>
            </div>
            <p className="text-black font-mono text-base leading-relaxed">
            ISTE VIT is the student chapter of the Indian Society for Technical Education (ISTE) at VIT. Our mission is to empower students with the technical and managerial skills needed to address future challenges. We provide a platform for learning through workshops, seminars, and technical events across various domains such as engineering, management, and design. ISTE VIT fosters a community of passionate individuals dedicated to personal and professional growth, aiming to create well-rounded engineers ready to make an impact in the world.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

