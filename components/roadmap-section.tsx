import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock, Rocket } from "lucide-react"

export function RoadmapSection() {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation & Launch",
      status: "completed",
      quarter: "Q1 2025",
      items: [
        "Community building and social media presence",
        "Website development and branding",
        "Whitepaper and tokenomics release",
        "Initial community partnerships",
      ],
    },
    {
      phase: "Phase 2",
      title: "Token Launch & Distribution",
      status: "in-progress",
      quarter: "Q2 2025",
      items: [
        "Smart contract development and audit",
        "Token generation event (TGE)",
        "Initial DEX listings",
        "Community rewards program launch",
      ],
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Development",
      status: "upcoming",
      quarter: "Q3 2025",
      items: [
        "Staking platform development",
        "Governance system implementation",
        "Strategic partnerships expansion",
        "Mobile app development",
      ],
    },
    {
      phase: "Phase 4",
      title: "Expansion & Innovation",
      status: "upcoming",
      quarter: "Q4 2025",
      items: [
        "Cross-chain bridge development",
        "NFT marketplace integration",
        "DeFi protocol partnerships",
        "Global marketing campaign",
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case "in-progress":
        return <Clock className="w-6 h-6 text-primary" />
      case "upcoming":
        return <Circle className="w-6 h-6 text-muted-foreground" />
      default:
        return <Circle className="w-6 h-6 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-primary hover:bg-primary/90">In Progress</Badge>
      case "upcoming":
        return <Badge variant="outline">Upcoming</Badge>
      default:
        return <Badge variant="outline">Upcoming</Badge>
    }
  }

  return (
    <section id="roadmap" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Rocket className="w-4 h-4 mr-2" />
            Roadmap
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Our Journey to <span className="text-primary">Success</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Follow our strategic roadmap as we build and expand the Nitvon ecosystem. Each phase brings us closer to our
            vision of a truly community-driven token.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-px"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-background border-4 border-primary rounded-full md:transform md:-translate-x-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-1/2 md:mr-8" : "md:pl-1/2 md:ml-8"}`}>
                  <Card
                    className={`group hover:shadow-lg transition-all duration-300 ${item.status === "in-progress" ? "ring-2 ring-primary/20" : ""}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(item.status)}
                          <div>
                            <Badge variant="outline" className="mb-2">
                              {item.phase}
                            </Badge>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                          </div>
                        </div>
                        <div className="text-right">
                          {getStatusBadge(item.status)}
                          <div className="text-sm text-muted-foreground mt-1">{item.quarter}</div>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {item.items.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-20 text-center">
          <Card className="inline-block p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-0">
              <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Beyond 2025</h3>
              <p className="text-muted-foreground max-w-md">
                Our roadmap continues to evolve based on community feedback and market opportunities. The future of
                Nitvon is built together with our community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
