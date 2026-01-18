
"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TESTIMONIALS = [
    {
        author: "Sarah Jenkins",
        role: "CTO, Global Logistics",
        content: "Amaanc transformed our legacy CRM into a powerhouse. The integration with our ERP was flawless, and the AI insights have revolutionized our sales forecasting.",
        initials: "SJ"
    },
    {
        author: "Michael Chen",
        role: "VP of Sales, TechStream",
        content: "The level of expertise their team brought to the table was unmatched. They didn't just implement Salesforce; they re-engineered our entire sales process for efficiency.",
        initials: "MC"
    },
    {
        author: "Elena Rodriguez",
        role: "Director of Operations, HealthPlus",
        content: "We needed a partner who understood the nuances of healthcare compliance. Amaanc delivered a secure, scalable Service Cloud solution that our team loves.",
        initials: "ER"
    }
]

export function Testimonials() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-8 max-w-screen-2xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Trusted by Industry Leaders</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Don't just take our word for it. Hear from the visionary leaders we've partnered with.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, i) => (
                        <Card key={i} className="border-border/50 bg-muted/20 shadow-none hover:bg-muted/40 transition-colors">
                            <CardHeader>
                                <Quote className="h-8 w-8 text-primary/40 mb-2" />
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg italic text-muted-foreground leading-relaxed">"{t.content}"</p>
                            </CardContent>
                            <CardFooter className="flex items-center gap-4 pt-4">
                                <Avatar>
                                    <AvatarImage src="" alt={t.author} />
                                    <AvatarFallback className="bg-primary/10 text-primary">{t.initials}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="font-semibold text-foreground">{t.author}</h4>
                                    <p className="text-sm text-muted-foreground">{t.role}</p>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
