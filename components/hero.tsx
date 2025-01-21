"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Use Next.js Image for SVG rendering if needed
import HeroSVG from "/public/HERO.svg"; // Path to your SVG file

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex flex-col items-center justify-center bg-black">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {/* Render the SVG directly */}
        <Image
          src={HeroSVG}
          alt="Hero Illustration"
          className="w-72 h-72 md:w-[28rem] md:h-[28rem]" // Adjusted size
          priority
        />
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
  );
}
