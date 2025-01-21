"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Sponsors from "@/components/sponsors"
import OurSponsors from "@/components/our-sponsors"
import Tracks from "@/components/tracks"
import Timeline from "@/components/timeline"
import Prizes from "@/components/prizes"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Sponsors />
        <OurSponsors />
        <Tracks />
        <Timeline />
        <Prizes />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

