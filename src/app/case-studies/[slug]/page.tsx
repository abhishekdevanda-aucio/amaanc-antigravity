
import { getCaseStudyBySlug, getCaseStudies } from "@/lib/supabase"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

export async function generateStaticParams() {
    const studies = await getCaseStudies()
    return studies.map((study) => ({
        slug: study.slug,
    }))
}

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const study = await getCaseStudyBySlug(slug)

    if (!study) {
        notFound()
    }

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-background py-16 md:py-24 border-b border-border/50">
                <div className="container max-w-7xl px-4 md:px-8 mx-auto">
                    <Link href="/case-studies" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{study.title}</h1>
                    <p className="text-xl text-primary font-medium">{study.client_name}</p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8">
                <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                    <div className="md:col-span-2 space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">The Solution</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">{study.solution}</p>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <div className="bg-muted/30 rounded-2xl p-8 border border-border">
                            <h3 className="text-xl font-bold mb-6">Key Results</h3>
                            <ul className="space-y-4">
                                {study.results.map((result, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                                        <span className="font-medium">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
