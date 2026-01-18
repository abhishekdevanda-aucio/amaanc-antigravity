
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Cloud,
    Headphones,
    Megaphone,
    BrainCircuit,
    ShoppingCart,
    Database,
    LayoutDashboard,
    Zap
} from "lucide-react"

const FEATURES = [
    {
        title: "Sales Cloud",
        description: "Accelerate your sales cycle and close deals faster with the world's #1 CRM.",
        icon: Cloud,
        benefits: ["Lead Management", "Opportunity Tracking", "Sales Forecasting"],
        color: "text-blue-500 bg-blue-500/10"
    },
    {
        title: "Service Cloud",
        description: "Provide personalized support across every channel and increase customer satisfaction.",
        icon: Headphones,
        benefits: ["Omni-Channel Routing", "Knowledge Base", "Service Analytics"],
        color: "text-purple-500 bg-purple-500/10"
    },
    {
        title: "Marketing Cloud",
        description: "Build meaningful relationships and distinct brand moments with data-first digital marketing.",
        icon: Megaphone,
        benefits: ["Journey Builder", "Email Studio", "Social Studio"],
        color: "text-orange-500 bg-orange-500/10"
    },
    {
        title: "Einstein AI",
        description: "Discover insights, predict outcomes, and recommend next steps with built-in AI.",
        icon: BrainCircuit,
        benefits: ["Predictive Scoring", "Automated Discovery", "Voice Assistant"],
        color: "text-indigo-500 bg-indigo-500/10"
    },
    {
        title: "Commerce Cloud",
        description: "Create seamless ecommerce experiences that convert shoppers into loyal customers.",
        icon: ShoppingCart,
        benefits: ["Unified Commerce", "AI-Powered Merchandising", "Order Management"],
        color: "text-green-500 bg-green-500/10"
    },
    {
        title: "Data Cloud",
        description: "Connect all your data in real-time to create a single source of truth.",
        icon: Database,
        benefits: ["Real-Time Data", "Identity Resolution", "Data Harmonization"],
        color: "text-cyan-500 bg-cyan-500/10"
    },
    {
        title: "Tableau Analytics",
        description: "See and understand your data with the world's leading analytics platform.",
        icon: LayoutDashboard,
        benefits: ["Visual Analytics", "Interactive Dashboards", "Data Sharing"],
        color: "text-yellow-500 bg-yellow-500/10"
    },
    {
        title: "MuleSoft Integration",
        description: "Connect any app, data, or device with APIs to automate workflows.",
        icon: Zap,
        benefits: ["API Management", "Anypoint Platform", "Automated Integration"],
        color: "text-sky-500 bg-sky-500/10"
    }
]

export default function KeyFeaturesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 px-4 md:px-8 bg-background">
                <div className="container max-w-7xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">The Power of the Platform</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Amaanc leverages the full spectrum of the Salesforce ecosystem to deliver transformative results.
                    </p>
                </div>

                <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURES.map((feature, idx) => (
                        <Card key={idx} className="border-border/50 hover:shadow-lg transition-all duration-300 group">
                            <CardHeader>
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.color}`}>
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="mb-6 h-20">
                                    {feature.description}
                                </CardDescription>
                                <div className="flex flex-wrap gap-2">
                                    {feature.benefits.map((benefit, i) => (
                                        <Badge key={i} variant="secondary" className="text-xs font-normal bg-muted">
                                            {benefit}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}
