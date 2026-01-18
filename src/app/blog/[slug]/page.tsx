
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // In a real app we would fetch MDX or content here.

    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-16 md:py-24 px-4 md:px-8">
                <div className="container max-w-3xl mx-auto">
                    <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                    </Link>

                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                        Sample Blog Post Title for {slug}
                    </h1>
                    <div className="flex items-center text-sm text-muted-foreground mb-12 border-b border-border pb-8">
                        <span>By Admin</span>
                        <span className="mx-2">•</span>
                        <span>October 12, 2025</span>
                        <span className="mx-2">•</span>
                        <span>5 min read</span>
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                            This is a placeholder for the blog post content. In a production environment,
                            this would be rendered from a CMS or Markdown file.
                        </p>
                        <h2>Why Salesforce?</h2>
                        <p>
                            Salesforce remains the dominant player in the CRM space due to its extensibility...
                        </p>
                        <blockquote>
                            "Innovation is the ability to see change as an opportunity - not a threat."
                        </blockquote>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    <div className="mt-16 pt-8 border-t border-border">
                        <div className="bg-muted/30 rounded-xl p-8 text-center">
                            <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
                            <p className="text-muted-foreground mb-6">Get the latest insights delivered to your inbox.</p>
                            <Button>Subscribe Now</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
