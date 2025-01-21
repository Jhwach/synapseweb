"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Prizes() {
  const prizes = [
    { place: "1st Prize", amount: "₹XX,XXX", number: "1" },
    { place: "2nd Prize", amount: "₹XX,XXX", number: "2" },
    { place: "3rd Prize", amount: "₹XX,XXX", number: "3" },
    { place: "Best UI/UX", amount: "₹XX,XXX", number: "UI" },
    { place: "Best Hardware", amount: "₹XX,XXX", number: "HW" },
    { place: "Most Innovative", amount: "₹XX,XXX", number: "IN" },
    { place: "Best Solo Hack", amount: "₹XX,XXX", number: "S" },
    { place: "Community Choice", amount: "₹XX,XXX", number: "CC" },
  ]

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[#FFFF00] text-4xl md:text-6xl font-bold mb-4 font-mono">PRIZES</h2>
          <p className="text-[#FFFF00] text-xl font-mono">ALL THE EFFORT NEEDS TO HAVE SOME REWARDS RIGHT?</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {prizes.map((prize, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative aspect-[3/4]"
                  >
                    {/* Dots Border Pattern */}
                    <div className="absolute -inset-2 grid grid-cols-12 gap-2">
                      {[...Array(48)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-[#FFFF00] rounded-full" />
                      ))}
                    </div>

                    {/* Card Content */}
                    <div className="bg-[#FFFF00] h-full w-full rounded-lg border-2 border-black p-6 flex flex-col justify-between relative">
                      <div className="space-y-4">
                        <h3 className="text-black text-2xl font-mono font-bold">{prize.place}</h3>
                        <p className="text-black text-xl font-mono">{prize.amount}</p>
                      </div>

                      {/* Trophy Icon */}
                      <div className="relative">
                        <Trophy className="w-16 h-16 text-black" />
                        <div className="absolute inset-0 flex items-center justify-center text-[#FFFF00] font-mono font-bold text-lg">
                          {prize.number}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-[#FFFF00] border-[#FFFF00] hover:bg-[#FFFF00] hover:text-black -left-12 md:-left-16" />
            <CarouselNext className="text-[#FFFF00] border-[#FFFF00] hover:bg-[#FFFF00] hover:text-black -right-12 md:-right-16" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

