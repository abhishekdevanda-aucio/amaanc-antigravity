
import { getServiceBySlug, getServices } from "@/lib/supabase"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

// Generate static params for known services (in a real app this might be dynamic or ISR)
export async function generateStaticParams() {
    const services = await getServices()
    return services.map((service) => ({
        slug: service.slug,
    }))
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const service = await getServiceBySlug(slug)

    if (!service) {
        notFound()
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Simple Header for Service */}
            <section className="bg-background py-16 md:py-24 border-b border-border/50">
                <div className="container max-w-7xl px-4 md:px-8 mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                                Service Offerings
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{service.title}</h1>
                            <p className="text-xl text-muted-foreground">{service.description}</p>
                            <Button size="lg" className="mt-4" asChild>
                                <Link href="/contact">Get Started</Link>
                            </Button>
                        </div>
                        <div className="w-full md:w-1/3 aspect-square bg-muted/30 rounded-2xl flex items-center justify-center p-8 border border-border">
                            {/* Placeholder for Service Image/Icon Illustration */}
                            <div className="text-center">
                                <span className="text-6xl mb-4 block">🛠️</span>
                                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Service illustration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Body */}
            <section className="py-20 px-4 md:px-8">
                <div className="container max-w-5xl mx-auto space-y-20">

                    {/* The Challenge */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-4">
                            <h3 className="text-2xl font-bold text-foreground">The Business Challenge</h3>
                        </div>
                        <div className="md:col-span-8">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {service.business_problem}
                            </p>
                        </div>
                    </div>

                    {/* Our Approach */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-4">
                            <h3 className="text-2xl font-bold text-foreground">Our Approach</h3>
                        </div>
                        <div className="md:col-span-8">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                {service.approach}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.tools?.map(tool => (
                                    <div key={tool} className="flex items-center p-3 bg-muted/30 rounded-lg border border-border/50">
                                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                                        <span className="font-medium">{tool}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Value Delivered */}
                    <div className="rounded-2xl bg-primary/5 border border-primary/10 p-8 md:p-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">Key Value Delivered</h3>
                        <p className="text-xl md:text-2xl font-medium text-primary">&quot;{service.value_proposition}&quot;</p>
                    </div>

                </div>
            </section>

            {/* Next Steps */}
            <section className="border-t border-border py-16 text-center">
                <div className="container">
                    <h3 className="text-2xl font-bold mb-6">Ready to transform your {service.title} experience?</h3>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/services">
                            <span className="mr-2">←</span> Back to All Services
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
