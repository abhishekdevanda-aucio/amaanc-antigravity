
import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import { Button } from '../ui/button'

export function Footer() {
    return (
        <footer className="w-full bg-muted/40 border-t border-border">
            <div className="container px-4 md:px-8 py-10 md:py-16 max-w-screen-2xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex flex-col">
                            <span className="text-2xl font-bold text-primary">Amaanc.</span>
                            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Since 2012</span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Solution-first Salesforce Consulting. Delivering high-impact digital transformation and AI integration.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-foreground">Services</h3>
                        <Link href="/services/sales-cloud" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sales Cloud</Link>
                        <Link href="/services/service-cloud" className="text-sm text-muted-foreground hover:text-primary transition-colors">Service Cloud</Link>
                        <Link href="/services/marketing-cloud" className="text-sm text-muted-foreground hover:text-primary transition-colors">Marketing Cloud</Link>
                        <Link href="/services/data-cloud" className="text-sm text-muted-foreground hover:text-primary transition-colors">Data Cloud & AI</Link>
                    </div>

                    {/* Links Column 2 */}
                    <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-foreground">Company</h3>
                        <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                        <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Case Studies</Link>
                        <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link>
                        <Link href="/newsroom" className="text-sm text-muted-foreground hover:text-primary transition-colors">Newsroom</Link>
                    </div>

                    {/* Contact / Socials */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-foreground">Connect</h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="https://instagram.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="https://facebook.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                        </div>
                        <div className="mt-2">
                            <Button asChild variant="outline" size="sm">
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Amaanc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
