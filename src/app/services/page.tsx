
import { getServices } from "@/lib/supabase"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cloud, ShieldCheck, BarChart3, Database, Cog, Workflow } from "lucide-react"

// Map icon strings to components
const IconMap: Record<string, any> = {
    "Cloud": Cloud,
    "ShieldCheck": ShieldCheck,
    "BarChart3": BarChart3,
    "Database": Database,
    "Cog": Cog,
    "Workflow": Workflow
}

export default async function ServicesPage() {
    const services = await getServices()

    return (
        <div className="flex flex-col min-h-screen">
            {/* Services Hero */}
            <section className="bg-muted/30 py-20 px-4 md:px-8">
                <div className="container max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Salesforce Solutions for Every Need</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        From implementation to optimization, we provide end-to-end services to help you get the most out of the Salesforce ecosystem.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 md:px-8">
                <div className="container max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => {
                            const Icon = IconMap[service.icon_name || "Cloud"] || Cloud
                            return (
                                <Card key={service.id} className="flex flex-col border-border/50 hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <CardDescription className="text-base text-muted-foreground mb-4">
                                            {service.description}
                                        </CardDescription>
                                        <p className="text-sm font-medium text-foreground">
                                            <span className="text-primary mr-2">Value Prop:</span>
                                            {service.value_proposition}
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group" asChild>
                                            <Link href={`/services/${service.slug}`} className="flex items-center">
                                                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary/5 px-4 md:px-8">
                <div className="container max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Every business is unique. Contact us to discuss your specific requirements and how we can tailor our services to your goals.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Book a Strategy Call</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
