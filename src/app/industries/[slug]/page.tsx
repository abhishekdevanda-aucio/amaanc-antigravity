
import { getIndustryBySlug, getIndustries } from "@/lib/supabase"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, ShieldCheck, TrendingUp } from "lucide-react"

export async function generateStaticParams() {
    const industries = await getIndustries()
    return industries.map((ind) => ({
        slug: ind.slug,
    }))
}

export default async function IndustryPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const industry = await getIndustryBySlug(slug)

    if (!industry) {
        notFound()
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative bg-primary text-primary-foreground py-24 overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="container relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-semibold mb-6 backdrop-blur">
                        Industry Focus
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{industry.name}</h1>
                    <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl">
                        {industry.overview}
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8">
                <div className="container max-w-7xl mx-auto space-y-24">

                    {/* Challenges & Solutions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                        {/* Challenges Side */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-4 flex items-center">
                                    <TrendingUp className="mr-3 text-destructive h-8 w-8" />
                                    Common Challenges
                                </h2>
                                <p className="text-muted-foreground">The roadblocks slowing down innovation in {industry.name}.</p>
                            </div>
                            <ul className="space-y-4">
                                {industry.challenges.map((challenge, idx) => (
                                    <li key={idx} className="flex items-start p-4 bg-muted/30 rounded-lg border-l-4 border-destructive">
                                        <span className="font-medium text-foreground">{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Solutions Side */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-4 flex items-center">
                                    <ShieldCheck className="mr-3 text-primary h-8 w-8" />
                                    Our Solutions
                                </h2>
                                <p className="text-muted-foreground">How Amaanc leverages Salesforce to solve these problems.</p>
                            </div>
                            <ul className="space-y-4">
                                {industry.solutions.map((solution, idx) => (
                                    <li key={idx} className="flex items-start p-4 bg-primary/5 rounded-lg border border-primary/10">
                                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                                        <span className="font-medium text-foreground">{solution}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="rounded-3xl bg-foreground text-background p-8 md:p-16 text-center">
                        <h3 className="text-3xl font-bold mb-6">Partner with {industry.name} Experts</h3>
                        <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
                            We've helped dozens of companies in the {industry.name} space achieve operational excellence.
                        </p>
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/contact">Speak to an Expert</Link>
                        </Button>
                    </div>

                </div>
            </section>
        </div>
    )
}
