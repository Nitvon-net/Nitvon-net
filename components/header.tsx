"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ExternalLink } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const socialLinks = [
    { name: "Twitter", url: "https://x.com/nitvon?s=21", icon: "𝕏" },
    { name: "Telegram", url: "https://t.me/+jbVxuT7Dk98zZTA0", icon: "📱" },
    { name: "TikTok", url: "https://www.tiktok.com/@nitvon.com?_t=ZN-8zqovYHXitC&_r=1", icon: "🎵" },
    { name: "Reddit", url: "https://www.reddit.com/u/Nitvon/s/6BmNqglmjy", icon: "🔴" },
    { name: "Instagram", url: "https://www.instagram.com/nitvon.io?igsh=aWRhaTZta2w3amdm&utm_source=qr", icon: "📷" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo-yellow.png" alt="Nitvon Logo" width={40} height={40} className="rounded-full" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Nitvon</span>
              <span className="text-sm text-primary font-semibold">$NIT</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#tokenomics" className="text-foreground hover:text-primary transition-colors">
              Tokenomics
            </Link>
            <Link href="#community" className="text-foreground hover:text-primary transition-colors">
              Community
            </Link>
            <Link href="#roadmap" className="text-foreground hover:text-primary transition-colors">
              Roadmap
            </Link>
          </nav>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-2">
            {socialLinks.slice(0, 3).map((link) => (
              <Button key={link.name} variant="ghost" size="sm" asChild>
                <Link href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                  <span>{link.icon}</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
            ))}
            <Button asChild>
              <Link href="https://linktr.ee/Nitvon" target="_blank" rel="noopener noreferrer">
                All Links
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#about"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#tokenomics"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tokenomics
              </Link>
              <Link
                href="#community"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                href="#roadmap"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Roadmap
              </Link>
              <div className="flex flex-wrap gap-2 pt-4">
                {socialLinks.map((link) => (
                  <Button key={link.name} variant="outline" size="sm" asChild>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1"
                    >
                      <span>{link.icon}</span>
                      <span>{link.name}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
