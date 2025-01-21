"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function FAQ() {
  const faqs = [
    {
      question: "WHO IS ELIGIBLE TO PARTICIPATE IN SYNAPSE?",
      answer: "THE HACKATHON IS OPEN TO STUDENTS FROM ALL ACADEMIC DISCIPLINES AND BRANCHES.",
    },
    {
      question: "WHEN AND WHERE WILL THE EVENT BE HELD?",
      answer: "SYNAPSE IS SCHEDULED FROM FEBRUARY 5TH TO 6TH, 2025, AT TBA.",
    },
    {
      question: "WHAT IS THE TEAM SIZE REQUIREMENT?",
      answer: "TEAMS MUST CONSIST OF MINIMUM 3 TO A MAXIMUM OF 5 MEMBERS.",
    },
    {
      question: "WHAT INFORMATION IS REQUIRED FOR REGISTRATION?",
      answer:
        "PARTICIPANTS MUST PROVIDE THEIR NAME, REGISTRATION NUMBER, BRANCH, MOBILE NUMBER, AND HOSTEL DETAILS (IF APPLICABLE) DURING REGISTRATION ON THE SYNAPSE PORTAL.",
    },
    {
      question: "ARE THERE ANY RULES FOR HARDWARE-BASED PROJECTS?",
      answer:
        "TEAMS MUST BRING THEIR OWN COMPONENTS OR REQUEST SPECIFIC HARDWARE DURING REGISTRATION, SUBJECT TO AVAILABILITY AND ORGANIZER APPROVAL.",
    },
  ]

  return (
    <section className="bg-[#FFFF00] py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* FAQ Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-black text-6xl font-mono font-bold mb-16"
        >
          FAQs
        </motion.h2>

        {/* FAQ Grid */}
        <div className="grid gap-8 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-8 border-l-2 border-black"
            >
              <div className="absolute left-0 bottom-0 w-8 h-[2px] bg-black" />
              <h3 className="text-black text-xl font-mono font-bold mb-2">{faq.question}</h3>
              <p className="text-black font-mono">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        {/* Register Button */}
        <motion.a
          href="#register"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ backgroundColor: "#00FFFF" }}
          viewport={{ once: true }}
          className="bg-black text-[#FFFF00] w-full py-4 px-6 rounded-lg flex items-center justify-between font-mono group relative overflow-hidden"
        >
          <span>REGISTER FOR SYNAPSE NOW</span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: [0, 8, 0] }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ArrowRight className="w-6 h-6 transition-colors group-hover:text-black" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  )
}

