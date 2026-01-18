
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Cog, BarChart3, Database, Workflow, ShieldCheck } from "lucide-react"
import Link from "next/link"

const services = [
    {
        title: "Strategic Foundations",
        description: "We ensure your digital roadmap is rock solid before writing a single line of code.",
        icon: Cloud,
        href: "/services/strategic-foundations"
    },
    {
        title: "Enterprise Implementation",
        description: "From initial setup to complex multi-cloud rollouts, we ensure seamless adoption.",
        icon: Database,
        href: "/services/enterprise-implementation"
    },
    {
        title: "Continuous Evolution",
        description: "Proactive innovation and support (Managed Services) to keep your system growing.",
        icon: ShieldCheck,
        href: "/services/continuous-evolution"
    },
    {
        title: "Seamless Integration",
        description: "Connect Salesforce with MuleSoft, ERPs, and third-party APIs for a unified view.",
        icon: Workflow,
        href: "/services/system-integration"
    },
    {
        title: "Tailored Development",
        description: "Custom Lightning Web Components and Apex solutions for unique business logic.",
        icon: Cog,
        href: "/services/tailored-development"
    },
    {
        title: "AI & Intelligence",
        description: "Leverage Einstein AI to automate workflows and uncover predictive insights.",
        icon: BarChart3,
        href: "/services/ai-intelligence"
    }
]

export function ServicesOverview() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-8 max-w-screen-2xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <div className="flex flex-col gap-2 max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Solution-First Expertise</h2>
                        <p className="text-muted-foreground text-lg">Comprehensive Salesforce solutions designed to solve real business problems.</p>
                    </div>
                    <Link href="/services" className="text-primary font-medium hover:underline underline-offset-4 flex items-center group">
                        View All Services <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <Link key={service.title} href={service.href} className="group h-full">
                            <Card className="h-full border-border/50 bg-background/50 hover:bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                <CardHeader>
                                    <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
