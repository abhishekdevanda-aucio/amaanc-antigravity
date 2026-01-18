
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const EVENTS = [
    {
        title: "Dreamforce 2025 Recap Webinar",
        date: "Nov 15, 2025",
        type: "Webinar",
        description: "Join our experts as they break down the biggest announcements from Dreamforce and what they mean for your business."
    },
    {
        title: "Salesforce World Tour NYC",
        date: "Dec 10, 2025",
        type: "Conference",
        description: "Meet the Amaanc team at Booth #405. We'll be showcasing our latest AI accelerators."
    }
]

const NEWS = [
    {
        title: "Amaanc Named Top Salesforce Consultant by TechReview",
        date: "Oct 01, 2025",
        source: "Press Release"
    },
    {
        title: "Amaanc Expands Operations to Europe",
        date: "Sep 20, 2025",
        source: "Company News"
    }
]

export default function NewsroomPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-background py-20 px-4 md:px-8 border-b border-border/50">
                <div className="container max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Newsroom & Events</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Stay updated with the latest company announcements and upcoming events.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8">
                <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Events */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
                        {EVENTS.map((event, i) => (
                            <Card key={i} className="border-border/50 bg-muted/20">
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-2">
                                        <Badge variant="outline">{event.type}</Badge>
                                        <span className="text-sm text-muted-foreground">{event.date}</span>
                                    </div>
                                    <CardTitle className="text-xl">{event.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{event.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* News */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold mb-8">Company News</h2>
                        {NEWS.map((item, i) => (
                            <div key={i} className="flex flex-col border-b border-border pb-6 last:border-0">
                                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{item.source} • {item.date}</span>
                                <h3 className="text-xl font-medium hover:text-primary cursor-pointer transition-colors">{item.title}</h3>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    )
}
