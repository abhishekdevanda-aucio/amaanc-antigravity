
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// Using a placeholder image for now, later we'd use generate_image or real assets
// In a real scenario, we might use next/image with a blur placeholder
const CASE_STUDIES = [
    {
        id: "fintech-automation", // Using slug as ID for linking in this component
        client: "FinTech Global",
        title: "Automating Loan Origination with Sales Cloud & Einstein",
        stat: "40% Increase in Processing Speed",
        tags: ["Finance", "Sales Cloud", "Automation"],
        color: "bg-blue-600"
    },
    {
        id: "retail-omnichannel",
        client: "Retail Giant",
        title: "Unified Customer View across 500+ Stores",
        stat: "360° Customer Insight",
        tags: ["Retail", "Data Cloud", "Marketing Cloud"],
        color: "bg-emerald-600"
    }
]

export function CaseStudyShowcase() {
    return (
        <section className="py-24 w-full overflow-hidden">
            <div className="container px-4 md:px-8 max-w-screen-2xl">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <span className="text-sm font-semibold tracking-widest text-primary uppercase">Success Stories</span>
                    <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">Real Results for Real Business</h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        See how we've helped leading organizations transform their operations with Salesforce.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {CASE_STUDIES.map((study) => (
                        <div key={study.id} className="group relative overflow-hidden rounded-2xl border border-border bg-background shadow-sm hover:shadow-xl transition-all duration-500">
                            <div className={`h-48 md:h-64 w-full ${study.color} bg-opacity-10 relative overflow-hidden`}>
                                {/* Abstract visual since we don't have images yet */}
                                <div className="absolute inset-0 bg-linear-to-br from-white/10 to-black/5" />
                                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                                    <div className="flex gap-2 mb-3">
                                        {study.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 text-xs font-medium bg-background/90 text-foreground rounded backdrop-blur-md shadow-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-8">
                                <h4 className="text-sm font-medium text-muted-foreground mb-2">{study.client}</h4>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{study.title}</h3>
                                <p className="text-xl font-semibold text-foreground mb-6 block border-l-4 border-primary pl-4">
                                    {study.stat}
                                </p>

                                <Button variant="link" className="p-0 h-auto font-semibold text-primary" asChild>
                                    <Link href={`/case-studies/${study.id}`}>
                                        Read Full Case Study <span aria-hidden="true" className="ml-1">→</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/case-studies">View All Case Studies</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
