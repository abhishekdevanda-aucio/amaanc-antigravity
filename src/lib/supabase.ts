
import { createClient } from '@supabase/supabase-js'

// These should be environmental variables in a real app
// For now we will mock the client or use placeholders if env vars are missing
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our CMS content
export type Service = {
    id: string
    slug: string
    title: string
    description: string
    business_problem?: string
    approach?: string
    tools?: string[]
    value_proposition?: string
    icon_name?: string
}

export type Industry = {
    id: string
    slug: string
    name: string
    overview: string
    description: string
    challenges: string[]
    solutions: string[]
}

export type CaseStudy = {
    id: string
    slug: string
    title: string
    client_name: string
    challenge: string
    solution: string
    results: string[]
    image_url?: string
}

// --- MOCK DATA FOR DEVELOPMENT ---

const MOCK_SERVICES: Service[] = [
    {
        id: "1",
        slug: "strategic-foundations",
        title: "Strategic Foundations",
        description: "We ensure your digital roadmap is rock solid before significant investment. Align technology with long-term business goals.",
        business_problem: "Misalignment between tech investment and business outcomes.",
        approach: "Deep-dive discovery workshops and enterprise architecture reviews.",
        tools: ["Salesforce Roadmapping", "Business Analysis", "C-Level Strategy"],
        value_proposition: "Clear path to ROI and reduced project risk.",
        icon_name: "Map"
    },
    {
        id: "2",
        slug: "enterprise-implementation",
        title: "Enterprise Implementation",
        description: "From initial setup to complex multi-cloud rollouts, we handle the entire lifecycle to ensure seamless adoption.",
        business_problem: "Complex deployments often fail due to poor adoption or technical debt.",
        approach: "Agile delivery methodology focusing on incremental value and user adoption.",
        tools: ["Sales Cloud", "Service Cloud", "Experience Cloud"],
        value_proposition: "Faster time-to-value with industry best practices.",
        icon_name: "Building"
    },
    {
        id: "3",
        slug: "continuous-evolution",
        title: "Continuous Evolution",
        description: "Your business evolves, and so should your CRM. Proactive innovation and support, not just ticket resolution.",
        business_problem: "Stagnant systems that don't keep up with market changes.",
        approach: "Proactive managed services model with regular innovation sprints.",
        tools: ["Health Checks", "DevOps", "Release Management"],
        value_proposition: "A system that grows with your business.",
        icon_name: "RefreshCw"
    },
    {
        id: "4",
        slug: "system-integration",
        title: "Seamless Integration",
        description: "Break down data silos. We connect Salesforce with MuleSoft, ERPs, and third-party APIs for a unified view.",
        business_problem: "Fragmented data across multiple disconnected systems.",
        approach: "API-led connectivity strategy using MuleSoft or custom middleware.",
        tools: ["MuleSoft", "REST/SOAP APIs", "Platform Events"],
        value_proposition: "Unified 360-degree view of your customer.",
        icon_name: "Link"
    },
    {
        id: "5",
        slug: "tailored-development",
        title: "Tailored Development",
        description: "When out-of-the-box isn't enough, we engineer custom Lightning Web Components and Apex solutions.",
        business_problem: "Unique business logic that standard Salesforce configuration can't handle.",
        approach: "Custom engineering with a focus on scalability and performance.",
        tools: ["LWC", "Apex", "Heroku"],
        value_proposition: "Zero compromise on your unique business processes.",
        icon_name: "Code"
    },
    {
        id: "6",
        slug: "ai-intelligence",
        title: "AI & Intelligence",
        description: "Leverage Einstein AI and predictive analytics to automate workflows and uncover hidden opportunities.",
        business_problem: "Data rich but insight poor organizations.",
        approach: "Implementing Einstein Prediction Builder and Next Best Action.",
        tools: ["Einstein", "Targeting", "Predictive Analytics"],
        value_proposition: "Automated decision making and predictive insights.",
        icon_name: "Brain"
    }
]

const MOCK_INDUSTRIES: Industry[] = [
    {
        id: "1",
        slug: "energy-utilities",
        name: "Energy & Utilities",
        overview: "The energy sector is undergoing a massive shift towards renewables and decentralization. We help utilities providers modernize their legacy stack.",
        description: "Modernizing infrastructure for the renewable age. Scale customer operations and billing.",
        challenges: ["Complex Billing", "Field Service", "Renewable Integration"],
        solutions: ["Energy & Utilities Cloud", "Field Service Lightning", "CPQ"]
    },
    {
        id: "2",
        slug: "public-sector",
        name: "Public Sector",
        overview: "We help government agencies move away from paper-based processes. Our secure, compliant solutions improve citizen engagement.",
        description: "Digital transformation for government services. Enhancing citizen engagement and operational transparency.",
        challenges: ["Citizen Engagement", "Legacy Modernization", "Compliance"],
        solutions: ["Public Sector Solutions", "Experience Cloud", "Shield"]
    },
    {
        id: "3",
        slug: "financial-services",
        name: "Financial Services",
        overview: "In an industry defined by trust and compliance, adding agility is key. We build secure implementations that unify the client journey.",
        description: "Secure, compliant solutions for banking and wealth management. Achieve a unified Customer 360 view.",
        challenges: ["Regulatory Compliance", "Data Security", "Personalization"],
        solutions: ["Financial Services Cloud", "Shield Encryption", "Tableau"]
    },
    {
        id: "4",
        slug: "nonprofit",
        name: "Nonprofit & Charity",
        overview: "We understand the unique constraints of the nonprofit sector. Our solutions optimize donor engagement ensuring more resources go to the cause.",
        description: "Maximize your impact. Streamline donor management, grant tracking, and program delivery.",
        challenges: ["Donor Retention", "Volunteer Management", "Impact Reporting"],
        solutions: ["Nonprofit Cloud", "NPSP", "Marketing Cloud"]
    },
    {
        id: "5",
        slug: "media-communications",
        name: "Media & Comms",
        overview: "From subscriber management to ad sales pipelines, we help media companies harness their data to deliver personalized content.",
        description: "Manage high-volume subscriber data and streamline ad sales in a fast-paced digital landscape.",
        challenges: ["Subscriber Churn", "Ad Tech Integration", "High Volume Data"],
        solutions: ["Media Cloud", "Data Cloud", "Revenue Cloud"]
    },
    {
        id: "6",
        slug: "healthcare",
        name: "Healthcare",
        overview: "We implement Health Cloud solutions that put the patient at the center, ensuring HIPAA compliance while improving care coordination.",
        description: "Patient-first digital journeys. Secure data handling and clinical trial management optimization.",
        challenges: ["HIPAA Compliance", "Patient Journey", "Interoperability"],
        solutions: ["Health Cloud", "MuleSoft Accelerator", "Scheduler"]
    }
]

const MOCK_CASE_STUDIES: CaseStudy[] = [
    {
        id: "1",
        slug: "fintech-automation",
        title: "Automating Loan Origination with Sales Cloud & Einstein",
        client_name: "FinTech Global",
        challenge: "Manual loan processing was taking 5+ days, leading to high drop-off rates and customer dissatisfaction.",
        solution: "We implemented Sales Cloud with custom Apex automation and Einstein Scorecard to predict loan eligibility instantly.",
        results: ["40% Increase in Processing Speed", "20% Reduction in Risk", "15% Efficiency Gain"],
        image_url: ""
    },
    {
        id: "2",
        slug: "retail-omnichannel",
        title: "Unified Customer View across 500+ Stores",
        client_name: "Retail Giant",
        challenge: "Siloed customer data between online and offline stores prevented personalized marketing.",
        solution: "Implemented Data Cloud to unify profiles and Marketing Cloud to trigger real-time offers based on purchase history.",
        results: ["360° Customer Insight", "3x ROI on Campaigns", "25% Increase in Repeat Sales"],
        image_url: ""
    }
]

// --- HELPER FUNCTIONS ---

export async function getServices(): Promise<Service[]> {
    return MOCK_SERVICES
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
    return MOCK_SERVICES.find(s => s.slug === slug) || null
}

export async function getIndustries(): Promise<Industry[]> {
    return MOCK_INDUSTRIES
}

export async function getIndustryBySlug(slug: string): Promise<Industry | null> {
    return MOCK_INDUSTRIES.find(i => i.slug === slug) || null
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
    return MOCK_CASE_STUDIES
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
    return MOCK_CASE_STUDIES.find(c => c.slug === slug) || null
}
