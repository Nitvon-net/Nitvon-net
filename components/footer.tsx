import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Heart } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { name: "Twitter", url: "https://x.com/nitvon?s=21", icon: "𝕏" },
    { name: "Telegram", url: "https://t.me/+jbVxuT7Dk98zZTA0", icon: "📱" },
    { name: "TikTok", url: "https://www.tiktok.com/@nitvon.com?_t=ZN-8zqovYHXitC&_r=1", icon: "🎵" },
    { name: "Reddit", url: "https://www.reddit.com/u/Nitvon/s/6BmNqglmjy", icon: "🔴" },
    { name: "Instagram", url: "https://www.instagram.com/nitvon.io?igsh=aWRhaTZta2w3amdm&utm_source=qr", icon: "📷" },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Community", href: "#community" },
    { name: "Roadmap", href: "#roadmap" },
  ]

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image src="/logo.png" alt="Nitvon Logo" width={40} height={40} className="rounded-full" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">Nitvon</span>
                <span className="text-sm text-primary font-semibold">$NIT</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-pretty mb-6 max-w-md">
              A community-driven token built on Solana blockchain, empowering people worldwide through blockchain
              accessibility and collective growth.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Together we build. Together we rise.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="ghost" size="sm" className="w-full justify-start p-0 h-auto" asChild>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
                  >
                    <span className="text-base">{link.icon}</span>
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </Link>
                </Button>
              ))}
              <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent" asChild>
                <Link
                  href="https://linktr.ee/Nitvon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>All Links</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">© 2025 Nitvon ($NIT). Built with ❤️ by the community.</div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p className="mb-1">
                ⚠️ <strong>Disclaimer:</strong> Not financial advice. DYOR.
              </p>
              <p>Built on Solana blockchain • Community-driven • Decentralized</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
