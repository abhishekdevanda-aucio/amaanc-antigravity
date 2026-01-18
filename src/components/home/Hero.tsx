
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-background pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-30 dark:opacity-20">
                <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary/30 blur-[100px]" />
            </div>

            <div className="container px-4 md:px-8 max-w-screen-2xl">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-muted-foreground shadow-sm mb-4"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                        Since 2012 - Trusted Salesforce Partners
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
                    >
                        Solution-First <span className="text-primary bg-clip-text">Salesforce</span> Consulting
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance"
                    >
                        We don't just build technology; we solve business problems. Transforming complex systems into simple growth engines since 2012.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4"
                    >
                        <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20" asChild>
                            <Link href="/contact">
                                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-background/50 backdrop-blur" asChild>
                            <Link href="/case-studies">
                                View Case Studies
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="pt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground/80"
                    >
                        <div className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Certified Experts</div>
                        <div className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> 500+ Projects</div>
                        <div className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Global Presence</div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
