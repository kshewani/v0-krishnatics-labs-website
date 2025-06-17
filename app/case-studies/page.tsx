import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Case Studies - Krishnatics Labs | AI Success Stories",
  description:
    "Explore our successful AI automation projects and see how we've helped businesses transform with custom AI solutions, chatbots, and enterprise systems.",
  keywords: "AI case studies, AI success stories, AI automation projects, AI implementation, business transformation",
}

const caseStudies = [
  {
    title: "E-commerce Giant Increases Sales by 35% with AI Recommendation Engine",
    client: "GlobalShop Inc.",
    industry: "E-commerce",
    challenge:
      "Low conversion rates and poor product discovery leading to abandoned carts and reduced customer satisfaction.",
    solution:
      "Implemented a sophisticated AI recommendation engine using collaborative filtering and deep learning to provide personalized product suggestions.",
    results: [
      { metric: "Sales Increase", value: "35%", icon: TrendingUp },
      { metric: "Conversion Rate", value: "+28%", icon: Users },
      { metric: "Implementation Time", value: "12 weeks", icon: Clock },
      { metric: "ROI", value: "450%", icon: DollarSign },
    ],
    technologies: ["Machine Learning", "Deep Learning", "Python", "TensorFlow", "AWS"],
    image: "/placeholder.svg?height=300&width=500",
    testimonial:
      "The AI recommendation system transformed our customer experience. We saw immediate improvements in engagement and sales.",
    clientRole: "CTO, GlobalShop Inc.",
  },
  {
    title: "Healthcare Provider Reduces Patient Wait Times by 60% with AI Scheduling",
    client: "MediCare Plus",
    industry: "Healthcare",
    challenge:
      "Inefficient appointment scheduling leading to long wait times, resource underutilization, and patient dissatisfaction.",
    solution:
      "Developed an AI-powered scheduling system that optimizes appointment allocation based on doctor availability, patient needs, and historical data.",
    results: [
      { metric: "Wait Time Reduction", value: "60%", icon: Clock },
      { metric: "Resource Utilization", value: "+40%", icon: TrendingUp },
      { metric: "Patient Satisfaction", value: "+55%", icon: Users },
      { metric: "Cost Savings", value: "$2.3M", icon: DollarSign },
    ],
    technologies: ["AI Optimization", "Predictive Analytics", "React", "Node.js", "PostgreSQL"],
    image: "/placeholder.svg?height=300&width=500",
    testimonial:
      "The AI scheduling system revolutionized our operations. Both staff and patients are much happier with the improved efficiency.",
    clientRole: "Operations Director, MediCare Plus",
  },
  {
    title: "Financial Services Firm Detects 95% of Fraud with AI Security System",
    client: "SecureBank Corp",
    industry: "Financial Services",
    challenge: "Increasing fraud attempts and false positives in traditional rule-based fraud detection systems.",
    solution:
      "Built an advanced AI fraud detection system using ensemble machine learning models and real-time transaction analysis.",
    results: [
      { metric: "Fraud Detection", value: "95%", icon: TrendingUp },
      { metric: "False Positives", value: "-80%", icon: Users },
      { metric: "Processing Speed", value: "<100ms", icon: Clock },
      { metric: "Annual Savings", value: "$15M", icon: DollarSign },
    ],
    technologies: ["Machine Learning", "Real-time Analytics", "Python", "Apache Kafka", "MongoDB"],
    image: "/placeholder.svg?height=300&width=500",
    testimonial:
      "The AI fraud detection system exceeded our expectations. We've significantly reduced losses while improving customer experience.",
    clientRole: "Chief Risk Officer, SecureBank Corp",
  },
  {
    title: "Manufacturing Company Reduces Downtime by 70% with Predictive Maintenance",
    client: "IndustrialTech Ltd",
    industry: "Manufacturing",
    challenge: "Unexpected equipment failures causing costly downtime and production delays.",
    solution:
      "Implemented IoT sensors and AI-powered predictive maintenance system to forecast equipment failures before they occur.",
    results: [
      { metric: "Downtime Reduction", value: "70%", icon: Clock },
      { metric: "Maintenance Costs", value: "-45%", icon: DollarSign },
      { metric: "Production Efficiency", value: "+32%", icon: TrendingUp },
      { metric: "Equipment Lifespan", value: "+25%", icon: Users },
    ],
    technologies: ["IoT", "Predictive Analytics", "Time Series Analysis", "Azure IoT", "Power BI"],
    image: "/placeholder.svg?height=300&width=500",
    testimonial:
      "The predictive maintenance solution transformed our operations. We can now prevent failures before they happen.",
    clientRole: "Plant Manager, IndustrialTech Ltd",
  },
  {
    title: "Retail Chain Optimizes Inventory with AI Demand Forecasting",
    client: "RetailMax Networks",
    industry: "Retail",
    challenge: "Overstocking and stockouts leading to increased costs and lost sales opportunities.",
    solution:
      "Developed an AI demand forecasting system that analyzes historical sales, seasonal trends, and external factors to optimize inventory levels.",
    results: [
      { metric: "Inventory Costs", value: "-30%", icon: DollarSign },
      { metric: "Stockout Reduction", value: "85%", icon: TrendingUp },
      { metric: "Forecast Accuracy", value: "92%", icon: Users },
      { metric: "Working Capital", value: "+$5M", icon: Clock },
    ],
    technologies: ["Time Series Forecasting", "Machine Learning", "Python", "Tableau", "SQL Server"],
    image: "/placeholder.svg?height=300&width=500",
    testimonial:
      "The AI forecasting system gave us unprecedented visibility into demand patterns. Our inventory management is now highly optimized.",
    clientRole: "Supply Chain Director, RetailMax Networks",
  },
  {
    title: "Logistics Company Reduces Delivery Time by 40% with Route Optimization AI",
    client: "FastTrack Logistics",
    industry: "Logistics",
    challenge:
      "Inefficient delivery routes leading to increased fuel costs, longer delivery times, and customer complaints.",
    solution:
      "Created an AI-powered route optimization system that considers traffic patterns, delivery priorities, and vehicle constraints in real-time.",
    results: [
      { metric: "Delivery Time", value: "-40%", icon: Clock },
      { metric: "Fuel Costs", value: "-25%", icon: DollarSign },
      { metric: "Customer Satisfaction", value: "+50%", icon: Users },
      { metric: "Delivery Capacity", value: "+35%", icon: TrendingUp },
    ],
    technologies: ["Route Optimization", "Real-time Analytics", "Google Maps API", "React Native", "Firebase"],
    image: "/placeholder.svg?height=300&width=500",
    testimonial:
      "The route optimization AI transformed our delivery operations. We're now more efficient and our customers are happier than ever.",
    clientRole: "Operations Manager, FastTrack Logistics",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 text-sm px-4 py-2">
            📊 Proven Results
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Success Stories
            <span className="block text-white">That Drive Results</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries transform their operations, increase efficiency, and
            achieve remarkable growth with our AI solutions.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Badge variant="outline" className="border-cyan-400 text-cyan-400">
                      {study.industry}
                    </Badge>
                    <Badge variant="outline" className="border-purple-400 text-purple-400">
                      {study.client}
                    </Badge>
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-6 leading-tight">{study.title}</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h3>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-purple-400 mb-2">Solution</h3>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-pink-400 mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-slate-700 text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-slate-900/50">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={500}
                    height={300}
                    className="rounded-lg mb-6 w-full object-cover"
                  />

                  <h3 className="text-xl font-semibold text-white mb-4">Key Results</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                        <result.icon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                        <div className="text-sm text-gray-400">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <p className="text-gray-300 italic mb-3">"{study.testimonial}"</p>
                    <p className="text-cyan-400 text-sm font-semibold">{study.clientRole}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Impact by the Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed", icon: TrendingUp },
              { number: "98%", label: "Client Satisfaction", icon: Users },
              { number: "$50M+", label: "Client Savings Generated", icon: DollarSign },
              { number: "24/7", label: "Support & Monitoring", icon: Clock },
            ].map((stat, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center p-6">
                <stat.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the ranks of successful businesses that have transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
