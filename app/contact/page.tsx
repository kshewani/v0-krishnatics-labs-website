import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare, Users, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Krishnatics Labs | Get Started with AI Solutions",
  description:
    "Contact Krishnatics Labs for AI automation solutions. Schedule a consultation and discover how we can transform your business with custom AI technology.",
  keywords:
    "contact AI agency, AI consultation, AI automation contact, custom AI solutions inquiry, AI development services",
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@krishnaticslabs.com",
    description: "Send us an email and we'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Speak directly with our AI experts",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Innovation Drive, Tech Valley, CA 94025",
    description: "Schedule an in-person consultation",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon-Fri: 9AM-6PM PST",
    description: "We're here when you need us",
  },
]

const services = [
  "AI-Enabled Custom Software",
  "AI Chatbots",
  "Agentic AI Solutions",
  "AI Corporate Training",
  "Enterprise Blockchain Solutions",
  "AI Consulting & Strategy",
  "Predictive Analytics",
  "Computer Vision Solutions",
]

const faqs = [
  {
    question: "How long does it take to implement an AI solution?",
    answer:
      "Implementation timelines vary based on project complexity. Simple chatbots can be deployed in 4-6 weeks, while complex custom AI systems may take 12-20 weeks. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve businesses across all industries including healthcare, finance, retail, manufacturing, logistics, and more. Our AI solutions are customized to meet specific industry requirements and regulations.",
  },
  {
    question: "Do you provide ongoing support after implementation?",
    answer:
      "Yes, we offer comprehensive post-implementation support including monitoring, maintenance, updates, and optimization. Our support packages are tailored to your specific needs and can include 24/7 monitoring.",
  },
  {
    question: "What's the typical ROI for AI implementations?",
    answer:
      "ROI varies by use case, but our clients typically see 200-500% ROI within the first year. We work with you to define clear success metrics and track performance throughout the implementation.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 text-sm px-4 py-2">
            🚀 Let's Build the Future Together
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Transform
            <span className="block text-white">Your Business with AI?</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get in touch with our AI experts to discuss your project requirements and discover how Krishnatics Labs can
            help you leverage artificial intelligence to drive growth and innovation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-cyan-400" />
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                    <Input
                      placeholder="John"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                    <Input
                      placeholder="Doe"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                  <Input
                    placeholder="Your Company"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <Input
                    placeholder="+1 (555) 123-4567"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Service of Interest</label>
                  <Select>
                    <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white focus:border-cyan-400">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      {services.map((service, index) => (
                        <SelectItem
                          key={index}
                          value={service.toLowerCase().replace(/\s+/g, "-")}
                          className="text-white hover:bg-slate-700"
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Budget</label>
                  <Select>
                    <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white focus:border-cyan-400">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="under-25k" className="text-white hover:bg-slate-700">
                        Under $25,000
                      </SelectItem>
                      <SelectItem value="25k-50k" className="text-white hover:bg-slate-700">
                        $25,000 - $50,000
                      </SelectItem>
                      <SelectItem value="50k-100k" className="text-white hover:bg-slate-700">
                        $50,000 - $100,000
                      </SelectItem>
                      <SelectItem value="100k-250k" className="text-white hover:bg-slate-700">
                        $100,000 - $250,000
                      </SelectItem>
                      <SelectItem value="over-250k" className="text-white hover:bg-slate-700">
                        Over $250,000
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Description *</label>
                  <Textarea
                    placeholder="Tell us about your project requirements, goals, and any specific challenges you're facing..."
                    rows={5}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 resize-none"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 py-4 text-lg font-semibold"
                >
                  Send Message <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-gray-400 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Ready to start your AI journey? Our team of experts is here to help you transform your business with
                  cutting-edge AI solutions.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                          <p className="text-cyan-400 font-medium mb-2">{info.details}</p>
                          <p className="text-gray-400 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Stats */}
              <Card className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">150+</div>
                      <div className="text-sm text-gray-400">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">98%</div>
                      <div className="text-sm text-gray-400">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-400 mb-1">24/7</div>
                      <div className="text-sm text-gray-400">Support Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">5+</div>
                      <div className="text-sm text-gray-400">Years Experience</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our AI solutions and services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
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
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a free consultation with our AI experts and discover how we can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-4 text-lg font-semibold"
            >
              <Users className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold"
            >
              <Zap className="mr-2 h-5 w-5" />
              Get Quick Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
