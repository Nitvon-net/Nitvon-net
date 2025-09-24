import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Globe, TrendingUp, Users, Shield, Coins } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Lightning Fast",
      description: "Built on Solana for ultra-fast transactions with minimal fees",
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Decentralized",
      description: "Fully decentralized ecosystem powered by community governance",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Growth Focused",
      description: "Designed for sustainable growth and long-term value creation",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community-Driven",
      description: "Every decision is made by and for the community members",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure & Audited",
      description: "Built with security-first approach and regular audits",
    },
    {
      icon: <Coins className="w-8 h-8 text-primary" />,
      title: "Utility Token",
      description: "Real utility with multiple use cases within the ecosystem",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About Nitvon
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Empowering Communities Through <span className="text-primary">Blockchain Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Nitvon represents the power of community. Built on the Solana blockchain, $NIT offers fast, low-cost
            transactions within a decentralized, community-driven ecosystem designed for collective growth.
          </p>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/lifestyle-trading.png"
                  alt="Trading from home lifestyle"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Trade Anywhere</h3>
                <p className="text-muted-foreground text-pretty">
                  Experience the freedom of trading from the comfort of your home with Nitvon's fast transactions.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/lifestyle-office.png"
                  alt="Professional office lifestyle"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Professional Growth</h3>
                <p className="text-muted-foreground text-pretty">
                  Build your financial future with professional-grade tools and community support.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/lifestyle-cycling.png"
                  alt="Active lifestyle cycling"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Active Community</h3>
                <p className="text-muted-foreground text-pretty">
                  Join an active community that's always moving forward, just like you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Community Owned</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">⚡</div>
            <div className="text-muted-foreground">Solana Speed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">🌍</div>
            <div className="text-muted-foreground">Global Reach</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">🚀</div>
            <div className="text-muted-foreground">Future Ready</div>
          </div>
        </div>
      </div>
    </section>
  )
}
