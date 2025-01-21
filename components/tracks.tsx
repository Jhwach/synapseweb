"use client"

import { motion } from "framer-motion"
import { Shield, TrendingUp, Heart, Lightbulb, Zap, Globe } from "lucide-react"

export default function Tracks() {
  const tracks = [
    {
      title: "Defence and Security",
      icon: Shield,
      gridSpan: "col-span-12 md:col-span-4",
    },
    {
      title: "Fintech",
      icon: TrendingUp,
      gridSpan: "col-span-12 md:col-span-4",
    },
    {
      title: "Healthcare",
      icon: Heart,
      gridSpan: "col-span-12 md:col-span-4",
    },
    {
      title: "Open Innovation",
      icon: Lightbulb,
      gridSpan: "col-span-12 md:col-span-4",
    },
    {
      title: "TRACKS",
      isTitle: true,
      gridSpan: "col-span-12 md:col-span-4",
    },
    {
      title: "Sponsored Track",
      isSponsored: true,
      gridSpan: "col-span-12 md:col-span-4",
    },
    {
      title: "Energy and Agriculture",
      icon: Zap,
      gridSpan: "col-span-12 md:col-span-6",
    },
    {
      title: "Social Good and SDGs",
      icon: Globe,
      gridSpan: "col-span-12 md:col-span-6",
    },
  ]

  return (
    <section className="py-20 px-4 bg-[#FFFF00] relative">
      {/* Decorative dots */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 p-4 pointer-events-none">
        {[...Array(144)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-black/20 rounded-full" />
        ))}
      </div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-12 gap-4 max-w-6xl mx-auto">
          {tracks.map((track, index) => {
            if (track.isTitle) {
              return (
                <motion.div key={index} className={`${track.gridSpan} flex items-center justify-center`}>
                  <h2 className="text-black text-6xl font-mono font-bold">{track.title}</h2>
                </motion.div>
              )
            }

            return (
              <motion.div
                key={index}
                whileHover={{ backgroundColor: "#00FFFF" }}
                className={`${track.gridSpan} ${
                  track.isSponsored ? "bg-black" : "bg-[#FFFF00]"
                } border-2 border-black rounded-lg p-6 flex flex-col justify-between`}
              >
                <h3 className={`text-${track.isSponsored ? "[#FFFF00]" : "black"} text-2xl font-mono`}>
                  {track.title}
                </h3>
                {track.icon && (
                  <track.icon className={`w-12 h-12 text-${track.isSponsored ? "[#FFFF00]" : "black"} self-end mt-4`} />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

