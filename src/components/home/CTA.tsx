
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTA() {
    return (
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                </svg>
            </div>

            <div className="container px-4 md:px-8 max-w-screen-2xl relative z-10 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
                    Ready to Solve Your Biggest <br className="hidden sm:inline" /> Business Challenges?
                </h2>
                <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-10">
                    Partner with a consultancy that prioritizes your outcomes over billable hours. Let's build something scalable together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold shadow-xl" asChild>
                        <Link href="/contact">
                            Schedule a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors" asChild>
                        <Link href="/services">
                            Explore Our Services
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
