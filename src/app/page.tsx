
import { Hero } from "@/components/home/Hero"
import { ServicesOverview } from "@/components/home/Overview"
import { CaseStudyShowcase } from "@/components/home/CaseStudies"
import { Testimonials } from "@/components/home/Testimonials"
import { CTA } from "@/components/home/CTA"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesOverview />
      <CaseStudyShowcase />
      <Testimonials />
      <CTA />
    </div>
  )
}
