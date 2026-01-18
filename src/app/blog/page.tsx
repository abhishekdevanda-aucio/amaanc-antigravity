
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

const BLOG_POSTS = [
    {
        slug: "future-of-ai-salesforce",
        title: "The Future of AI in Salesforce Ecosystem",
        excerpt: "How Einstein GPT is revolutionizing the way we interact with CRM data.",
        date: "October 12, 2025",
        author: "John Doe"
    },
    {
        slug: "migrating-to-lightning",
        title: "Best Practices for Migrating to Lightning Experience",
        excerpt: "A comprehensive guide to ensuring a smooth transition from Classic to Lightning.",
        date: "September 28, 2025",
        author: "Jane Smith"
    },
    {
        slug: "data-cloud-explained",
        title: "Salesforce Data Cloud: A Primer",
        excerpt: "Understanding the real-time data platform and how it unifies your customer view.",
        date: "September 15, 2025",
        author: "Alex Johnson"
    }
]

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-background py-20 px-4 md:px-8 border-b border-border/50">
                <div className="container max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Amaanc Insights</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Thoughts, trends, and expert advice on Salesforce, AI, and Digital Transformation.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8">
                <div className="container max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post) => (
                            <Card key={post.slug} className="flex flex-col border-border/50 hover:shadow-lg transition-all">
                                <CardHeader>
                                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                                        <Calendar className="h-3 w-3 mr-1" /> {post.date}
                                    </div>
                                    <CardTitle className="text-xl line-clamp-2 hover:text-primary cursor-pointer">
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <CardDescription className="line-clamp-3">
                                        {post.excerpt}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="link" className="p-0" asChild>
                                        <Link href={`/blog/${post.slug}`}>Read Article</Link>
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
