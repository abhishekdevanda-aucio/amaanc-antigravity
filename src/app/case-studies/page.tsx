
import { getCaseStudies } from "@/lib/supabase"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy } from "lucide-react"

export default async function CaseStudiesPage() {
    const caseStudies = await getCaseStudies()

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted/30 py-20 px-4 md:px-8">
                <div className="container max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Success Stories</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        See how we help organizations across industries achieve their digital transformation goals.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8">
                <div className="container max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {caseStudies.map((study) => (
                            <Card key={study.id} className="overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 group">
                                <div className="h-48 bg-primary/5 relative flex items-center justify-center">
                                    {/* Placeholder visual */}
                                    <Trophy className="h-16 w-16 text-primary/20 group-hover:text-primary/40 transition-colors" />
                                    <div className="absolute inset-0 bg-linear-to-t from-background to-transparent opacity-50" />
                                </div>
                                <CardHeader>
                                    <div className="text-sm font-medium text-muted-foreground mb-2">{study.client_name}</div>
                                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{study.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground line-clamp-3 mb-4">{study.challenge}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {study.results.slice(0, 2).map((res, i) => (
                                            <span key={i} className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                {res}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="link" className="p-0 text-primary font-semibold" asChild>
                                        <Link href={`/case-studies/${study.slug}`}>
                                            Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
