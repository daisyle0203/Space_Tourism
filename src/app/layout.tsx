import "./globals.css"
import { Bellefair, Barlow_Condensed } from "next/font/google"
import Navbar from "@/components/Navbar"

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--bellefair-font",
})

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--barlow-font",
})

export const metadata = {
  title: "Space Tourism",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${bellefair.variable} bg-primary`}>
        <Navbar />
      </body>
    </html>
  )
}
