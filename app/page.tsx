import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { CommunitySection } from "@/components/community-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TokenomicsSection />
        <CommunitySection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  )
}
