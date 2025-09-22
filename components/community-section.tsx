import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, MessageCircle, Users, Heart } from "lucide-react"

export function CommunitySection() {
  const socialPlatforms = [
    {
      name: "Twitter (X)",
      url: "https://x.com/nitvon?s=21",
      icon: "𝕏",
      description: "Follow us for the latest updates and announcements",
      members: "Growing daily",
      color: "bg-blue-500",
    },
    {
      name: "Telegram",
      url: "https://t.me/+jbVxuT7Dk98zZTA0",
      icon: "📱",
      description: "Join our active community chat and discussions",
      members: "Active community",
      color: "bg-blue-400",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@nitvon.com?_t=ZN-8zqovYHXitC&_r=1",
      icon: "🎵",
      description: "Creative content and community highlights",
      members: "Viral content",
      color: "bg-pink-500",
    },
    {
      name: "Reddit",
      url: "https://www.reddit.com/u/Nitvon/s/6BmNqglmjy",
      icon: "🔴",
      description: "In-depth discussions and community governance",
      members: "Deep discussions",
      color: "bg-orange-500",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nitvon.io?igsh=aWRhaTZta2w3amdm&utm_source=qr",
      icon: "📷",
      description: "Visual updates and behind-the-scenes content",
      members: "Visual stories",
      color: "bg-purple-500",
    },
  ]

  const communityFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Global Community",
      description: "Connect with Nitvon supporters from around the world",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Open Discussions",
      description: "Share ideas, ask questions, and contribute to the ecosystem",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community-First",
      description: "Every decision is made with the community in mind",
    },
  ]

  return (
    <section id="community" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Community
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Join the <span className="text-primary">Nitvon</span> Community
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Be part of a vibrant, global community that's building the future of decentralized finance together.
            Connect, contribute, and grow with us.
          </p>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {socialPlatforms.map((platform, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform`}
                  >
                    {platform.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{platform.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {platform.members}
                      </Badge>
                      <Button size="sm" variant="ghost" asChild>
                        <Link
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1"
                        >
                          <span>Join</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Links CTA */}
        <div className="text-center">
          <Card className="inline-block p-6 bg-primary/5 border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-3">All Community Links</h3>
              <p className="text-muted-foreground mb-4">
                Access all our social platforms and community resources in one place
              </p>
              <Button size="lg" asChild>
                <Link
                  href="https://linktr.ee/Nitvon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>Visit Linktree</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
