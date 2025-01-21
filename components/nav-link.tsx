"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

export default function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <Link href={href} className="relative">
      <motion.span
        className={`text-lg ${isActive ? "text-[#FFFF00]" : "text-[#FFFF00]/70"} hover:text-[#FFFF00] transition-colors`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.span>
      {isActive && <motion.div layoutId="underline" className="absolute left-0 top-full h-[2px] w-full bg-[#FFFF00]" />}
    </Link>
  )
}

