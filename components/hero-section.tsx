import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Users, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.jpeg" alt="Futuristic cityscape" fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Built on Solana Blockchain
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
            Welcome to <span className="text-primary">Nitvon</span>
            <br />
            <span className="text-2xl sm:text-4xl lg:text-5xl text-muted-foreground">
              The Future of Community-Driven Tokens
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Nitvon represents the power of community. Built on the Solana blockchain, $NIT offers fast, low-cost
            transactions within a decentralized, community-driven ecosystem designed for collective growth.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Lightning Fast</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Community-Driven</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Secure & Decentralized</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="#community">
                Join Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
              <Link href="#tokenomics">Learn More</Link>
            </Button>
          </div>

          {/* Token Info */}
          <div className="mt-12 p-6 bg-card/50 backdrop-blur rounded-2xl border max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Image src="/logo-yellow.png" alt="Nitvon Logo" width={48} height={48} className="rounded-full" />
              <div className="text-left">
                <h3 className="text-xl font-bold">$NIT Token</h3>
                <p className="text-muted-foreground">Solana Blockchain</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              💎 Together we build. Together we rise. Welcome to Nitvon.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
