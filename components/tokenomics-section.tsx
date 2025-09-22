import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Coins, TrendingUp, Users, Lock } from "lucide-react"

export function TokenomicsSection() {
  const tokenomics = [
    {
      category: "Community Rewards",
      percentage: 40,
      amount: "400M $NIT",
      description: "Distributed to active community members and contributors",
      icon: <Users className="w-5 h-5" />,
      color: "bg-primary",
    },
    {
      category: "Liquidity Pool",
      percentage: 30,
      amount: "300M $NIT",
      description: "Ensures stable trading and market liquidity",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "bg-secondary",
    },
    {
      category: "Development Fund",
      percentage: 20,
      amount: "200M $NIT",
      description: "Funds ongoing development and ecosystem growth",
      icon: <Coins className="w-5 h-5" />,
      color: "bg-accent",
    },
    {
      category: "Team & Advisors",
      percentage: 10,
      amount: "100M $NIT",
      description: "Locked for 2 years with gradual vesting",
      icon: <Lock className="w-5 h-5" />,
      color: "bg-muted-foreground",
    },
  ]

  const keyMetrics = [
    { label: "Total Supply", value: "1B $NIT", description: "Fixed supply, no inflation" },
    { label: "Blockchain", value: "Solana", description: "Fast & low-cost transactions" },
    { label: "Token Type", value: "Utility", description: "Real use cases in ecosystem" },
    { label: "Launch Date", value: "2025", description: "Community-driven launch" },
  ]

  return (
    <section id="tokenomics" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Tokenomics
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            <span className="text-primary">$NIT</span> Token Distribution
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Transparent and fair distribution designed to maximize community benefit and ensure long-term sustainability
            of the Nitvon ecosystem.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Token Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Distribution Chart */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Token Allocation</h3>
            {tokenomics.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${item.color.replace("bg-", "bg-")} text-white`}>{item.icon}</div>
                    <div>
                      <div className="font-semibold">{item.category}</div>
                      <div className="text-sm text-muted-foreground">{item.amount}</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-primary">{item.percentage}%</div>
                </div>
                <Progress value={item.percentage} className="h-3" />
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-6">
            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Coins className="w-6 h-6 text-primary" />
                  <span>Token Utility</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Governance Rights</div>
                    <div className="text-sm text-muted-foreground">
                      Vote on community proposals and ecosystem changes
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Staking Rewards</div>
                    <div className="text-sm text-muted-foreground">Earn rewards by staking $NIT tokens</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Ecosystem Access</div>
                    <div className="text-sm text-muted-foreground">Access to exclusive features and services</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Community Benefits</div>
                    <div className="text-sm text-muted-foreground">Special perks and early access to new features</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <CardContent className="p-0">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">DYOR</div>
                  <div className="font-semibold mb-2">Do Your Own Research</div>
                  <div className="text-sm text-muted-foreground">
                    Always research before investing in any cryptocurrency. This is not financial advice.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
