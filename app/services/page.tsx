import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, Cpu, GraduationCap, LinkIcon, Zap, Shield, BarChart3, MessageSquare } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Services - Krishnatics Labs | Custom AI Solutions & Automation",
  description:
    "Comprehensive AI services including custom software, chatbots, agentic AI, corporate training, and blockchain solutions. Transform your business with AI.",
  keywords:
    "AI services, custom AI software, AI chatbots, agentic AI, AI training, blockchain solutions, machine learning, automation",
}

const services = [
  {
    icon: Cpu,
    title: "AI-Enabled Custom Software",
    description: "Bespoke AI applications designed specifically for your business needs and industry requirements.",
    features: [
      "Custom machine learning models",
      "Predictive analytics systems",
      "Computer vision applications",
      "Natural language processing",
      "Automated decision-making systems",
      "Integration with existing workflows",
    ],
    benefits: [
      "Increased operational efficiency",
      "Data-driven decision making",
      "Competitive advantage",
      "Scalable solutions",
    ],
    pricing: "Starting from $25,000",
    timeline: "8-16 weeks",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Intelligent conversational AI that enhances customer experience and automates support operations.",
    features: [
      "Natural language understanding",
      "Multi-channel deployment",
      "Integration with CRM systems",
      "Sentiment analysis",
      "Multilingual support",
      "Advanced conversation flows",
    ],
    benefits: [
      "24/7 customer support",
      "Reduced response times",
      "Cost-effective scaling",
      "Improved customer satisfaction",
    ],
    pricing: "Starting from $8,000",
    timeline: "4-8 weeks",
  },
  {
    icon: Bot,
    title: "Agentic AI Solutions",
    description:
      "Autonomous AI agents that can perform complex tasks, make decisions, and adapt to changing conditions.",
    features: [
      "Autonomous task execution",
      "Multi-agent coordination",
      "Real-time decision making",
      "Learning and adaptation",
      "Goal-oriented behavior",
      "Human-AI collaboration",
    ],
    benefits: ["Reduced manual intervention", "Improved accuracy", "Scalable automation", "Enhanced productivity"],
    pricing: "Starting from $35,000",
    timeline: "12-20 weeks",
  },
  {
    icon: GraduationCap,
    title: "AI Corporate Training Programs",
    description: "Comprehensive training programs to upskill your team and build internal AI capabilities.",
    features: [
      "Customized curriculum",
      "Hands-on workshops",
      "Industry-specific use cases",
      "Certification programs",
      "Ongoing mentorship",
      "Project-based learning",
    ],
    benefits: [
      "Enhanced team capabilities",
      "Faster AI adoption",
      "Reduced dependency on external vendors",
      "Innovation culture development",
    ],
    pricing: "Starting from $15,000",
    timeline: "6-12 weeks",
  },
  {
    icon: LinkIcon,
    title: "Enterprise Blockchain Solutions",
    description: "Secure, scalable blockchain implementations for enterprise applications and digital transformation.",
    features: [
      "Smart contract development",
      "Decentralized applications (DApps)",
      "Supply chain transparency",
      "Digital identity management",
      "Cryptocurrency integration",
      "Consensus mechanism design",
    ],
    benefits: ["Enhanced security", "Improved transparency", "Reduced intermediary costs", "Immutable record keeping"],
    pricing: "Starting from $40,000",
    timeline: "16-24 weeks",
  },
  {
    icon: BarChart3,
    title: "AI Analytics & Insights",
    description: "Advanced analytics platforms that transform your data into actionable business insights.",
    features: [
      "Real-time data processing",
      "Predictive modeling",
      "Interactive dashboards",
      "Automated reporting",
      "Anomaly detection",
      "Performance optimization",
    ],
    benefits: ["Data-driven decisions", "Improved forecasting", "Risk mitigation", "Operational insights"],
    pricing: "Starting from $20,000",
    timeline: "8-12 weeks",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We analyze your business needs, current processes, and identify AI opportunities.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Develop a comprehensive AI strategy aligned with your business objectives.",
  },
  {
    step: "03",
    title: "Design & Development",
    description: "Create and build custom AI solutions using cutting-edge technologies.",
  },
  {
    step: "04",
    title: "Testing & Validation",
    description: "Rigorous testing to ensure optimal performance and reliability.",
  },
  {
    step: "05",
    title: "Deployment & Integration",
    description: "Seamless integration with your existing systems and workflows.",
  },
  {
    step: "06",
    title: "Support & Optimization",
    description: "Ongoing support, monitoring, and continuous improvement.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 text-sm px-4 py-2">
            🚀 Comprehensive AI Solutions
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Services That Transform
            <span className="block text-white">Your Business</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From custom AI software to enterprise blockchain solutions, we deliver cutting-edge technology that drives
            real business results and competitive advantage.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <Zap className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <Shield className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                    <div>
                      <p className="text-sm text-gray-400">Starting Price</p>
                      <p className="text-lg font-semibold text-white">{service.pricing}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Timeline</p>
                      <p className="text-lg font-semibold text-white">{service.timeline}</p>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
                    asChild
                  >
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a systematic approach to ensure successful AI implementation and maximum ROI for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your AI needs and create a custom solution that drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/contact">
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
