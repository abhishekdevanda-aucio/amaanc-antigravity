
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
    const navItems = [
        { name: "Services", href: "/services" },
        { name: "Industries", href: "/industries" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    {/* Logo Placeholder */}
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-primary">Amaanc.</span>
                        <span className="text-[0.6rem] font-medium tracking-wider text-muted-foreground uppercase leading-none">Since 2012</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="transition-colors hover:text-primary text-foreground/80"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Button asChild variant="default" className="hidden md:inline-flex bg-primary hover:bg-primary/90">
                        <Link href="/contact">Get in Touch</Link>
                    </Button>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <div className="flex flex-col gap-6 mt-8">
                                    <Link href="/" className="flex items-center gap-2" onClick={() => { }}>
                                        <span className="text-xl font-bold">Amaanc.</span>
                                    </Link>
                                    <nav className="flex flex-col gap-4">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="text-lg font-medium hover:text-primary transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                        <Link href="/contact" className="mt-4">
                                            <Button className="w-full">Get in Touch</Button>
                                        </Link>
                                    </nav>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
