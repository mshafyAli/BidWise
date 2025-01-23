import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function Banner() {
  return (
    <div className="relative h-auto">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, rgba(13, 13, 31, 1) 30%, rgba(240, 24, 140, 1) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-white text-2xl font-bold">
              BidWise
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 text-white">
              <div className="flex items-center space-x-1 cursor-pointer">
                <span>Growth marketing</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <span>Design</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <Link href="/success-stories">Success stories</Link>
              <Link href="/about">About</Link>
              <Link href="/insights">Insights</Link>
              <Link href="/tools">Tools</Link>
            </div>

            {/* CTA Button */}
            <button className="bg-[#E6186F] text-white px-6 py-2 rounded-full hover:bg-[#d1165f] transition-colors">
              Contact us
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-6 pt-20 pb-48">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Smash every paid search target you've got
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                As a Google and Bing certified PPC agency, we'll find the data that makes a difference to your
                brand—then use it to drive real, tangible growth.
              </p>
              <button className="bg-[#E6186F] text-white px-8 py-3 rounded-full text-lg hover:bg-[#d1165f] transition-colors inline-flex items-center">
                Get in touch
                <ChevronDown className="ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative h-[600px]">
              <Image
                src="/smash-graphic.webp"
                alt="Marketing Dashboard"
                width={800}
                height={600}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Partner Logos with diagonal bottom */}
        <div className="relative">
          {/* Diagonal shape */}
          <div
            className="absolute bottom-0 left-0 w-full h-32 bg-white"
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
            }}
          />

          {/* Partner Logos */}
          <div className="container mx-auto px-6 py-12 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=50&width=120"
                    alt={`Partner ${i + 1}`}
                    width={120}
                    height={50}
                    className="opacity-75 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
