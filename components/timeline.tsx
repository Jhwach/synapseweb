"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"
import { ChevronRight } from "lucide-react"

export default function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const events = [
    { day: "DAY 1", time: "9:00 AM", event: "Hack Begins", align: "right" },
    { day: "DAY 1", time: "11:00 AM", event: "Review One", align: "left" },
    { day: "DAY 2", time: "5:00 PM", event: "Review Two", align: "right" },
    { day: "DAY 2", time: "7:00 PM", event: "Final Pitching", align: "left" },
  ]

  return (
    <section className="py-20 px-4 bg-black min-h-screen relative" ref={ref}>
      {/* Moving Timeline Headline */}
      <div className="overflow-hidden w-full bg-black border-y-2 border-[#FFFF00] py-2 mb-20">
        <motion.div
          animate={{
            x: [0, -1000],
            transition: {
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            },
          }}
          className="whitespace-nowrap text-[#FFFF00] text-2xl font-mono flex items-center"
        >
          {[...Array(5)].map((_, i) => (
            <span key={i} className="flex items-center">
              HACK TIMELINE
              <ChevronRight className="mx-4 h-6 w-6" />
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto max-w-5xl relative">
        {/* Vertical Line */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#FFFF00]"
          style={{
            scaleY,
            originY: 0,
            position: "absolute",
            top: 0,
            bottom: 0,
          }}
        />

        {/* Timeline Content */}
        <div className="relative">
          {events.map((event, index) => (
            <div key={index} className="mb-32">
              {/* Day Label */}
              {(index === 0 || (index > 0 && events[index - 1].day !== event.day)) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex justify-center mb-12"
                >
                  <div className="bg-white text-black px-6 py-2 rounded-full font-mono">{event.day}</div>
                </motion.div>
              )}

              {/* Event Card */}
              <div className={`flex ${event.align === "left" ? "justify-start" : "justify-end"} relative`}>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: event.align === "left" ? -100 : 100,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`w-[calc(50%-40px)] ${event.align === "left" ? "mr-auto" : "ml-auto"}`}
                >
                  {/* Time */}
                  <div
                    className={`text-[#FFFF00] font-mono mb-2 ${event.align === "left" ? "text-right" : "text-left"}`}
                  >
                    {event.time}
                  </div>

                  {/* Card */}
                  <div className="relative">
                    {/* Shadow Layers */}
                    <div className="absolute top-1 left-1 w-full h-full bg-white/20 rounded-lg" />
                    <div className="absolute top-0.5 left-0.5 w-full h-full bg-white/40 rounded-lg" />

                    {/* Main Card */}
                    <div className="bg-[#FFFF00] p-4 rounded-lg relative font-mono">{event.event}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

