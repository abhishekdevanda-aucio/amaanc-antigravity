
import { getIndustries } from "@/lib/supabase"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, ArrowRight } from "lucide-react"

export default async function IndustriesPage() {
    const industries = await getIndustries()

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-background py-20 px-4 md:px-8 border-b border-border/50">
                <div className="container max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Industry Solutions</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Specialized expertise for your vertical. We understand the unique challenges and regulatory requirements of your industry.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8 bg-muted/20">
                <div className="container max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {industries.map((ind) => (
                            <Card key={ind.id} className="flex flex-col border-border/50 hover:border-primary/50 transition-colors duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary mb-4">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-2xl">{ind.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <CardDescription className="text-base text-muted-foreground mb-4">
                                        {ind.overview}
                                    </CardDescription>
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Key Challenges:</h4>
                                        <ul className="list-disc list-inside text-sm text-foreground/80">
                                            {ind.challenges.slice(0, 2).map((c, i) => (
                                                <li key={i}>{c}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full group" asChild>
                                        <Link href={`/industries/${ind.slug}`}>
                                            Explore Solutions <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
