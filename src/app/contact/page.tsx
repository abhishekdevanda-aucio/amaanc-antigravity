
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        // In a real app we'd call an API route here to trigger emails
        // const formData = new FormData(event.currentTarget)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000) // Reset after 5s for demo
    }

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary text-primary-foreground py-20 px-4 md:px-8">
                <div className="container max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Let's Start a Conversation</h1>
                    <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                        Ready to transform your business? Our team of experts is here to help you navigate your Salesforce journey.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8 -mt-10">
                <div className="container max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Contact Info */}
                        <div className="space-y-6 lg:col-span-1">
                            <Card className="border-border/50 shadow-md">
                                <CardContent className="p-8 space-y-8">
                                    <div className="flex items-start">
                                        <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 shrink-0">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                                            <p className="text-muted-foreground">hello@amaanc.com</p>
                                            <p className="text-muted-foreground">support@amaanc.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 shrink-0">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                                            <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                            <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 9am to 6pm EST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 shrink-0">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                                            <p className="text-muted-foreground">
                                                123 Innovation Drive,<br />
                                                Tech Valley, CA 94000
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card className="border-border/50 shadow-lg">
                                <CardContent className="p-8 md:p-10">
                                    {submitted ? (
                                        <div className="h-96 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                                            <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                                <CheckCircle2 className="h-10 w-10" />
                                            </div>
                                            <h3 className="text-2xl font-bold">Message Sent!</h3>
                                            <p className="text-muted-foreground max-w-md">Thank you for contacting us. One of our consultants will be in touch with you shortly.</p>
                                            <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Full Name</Label>
                                                    <Input id="name" name="name" placeholder="John Doe" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="company">Company</Label>
                                                    <Input id="company" name="company" placeholder="Acme Inc." required />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Work Email</Label>
                                                    <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Phone Number</Label>
                                                    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="interest">Area of Interest</Label>
                                                <Select name="interest">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a topic" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="salesforce-implementation">Salesforce Implementation</SelectItem>
                                                        <SelectItem value="managed-services">Managed Services</SelectItem>
                                                        <SelectItem value="integration">System Integration</SelectItem>
                                                        <SelectItem value="consulting">General Consulting</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message">Message</Label>
                                                <Textarea id="message" name="message" placeholder="How can we help you?" className="min-h-[150px]" required />
                                            </div>

                                            <Button type="submit" size="lg" className="w-full md:w-auto">
                                                Send Message <Send className="ml-2 h-4 w-4" />
                                            </Button>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function CheckCircle2({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    )
}
