import "./globals.css"
import { Space_Mono } from "next/font/google"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Synapse Hackathon",
  description: "Code, create, and disrupt—one hack at a time!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceMono.className}>
      <body className="bg-black">{children}</body>
    </html>
  )
}

