import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, Clock, User, Search, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "AI Blog - Krishnatics Labs | AI Insights & Industry Updates",
  description:
    "Stay updated with the latest AI trends, insights, and industry news. Expert articles on AI automation, machine learning, and business transformation.",
  keywords:
    "AI blog, artificial intelligence insights, AI trends, machine learning articles, AI automation news, AI industry updates",
}

const featuredPost = {
  title: "The Future of Agentic AI: How Autonomous Agents Will Transform Business Operations",
  excerpt:
    "Explore how agentic AI systems are revolutionizing business processes by enabling autonomous decision-making and task execution without human intervention.",
  author: "Dr. Rajesh Kumar",
  date: "December 15, 2024",
  readTime: "8 min read",
  category: "Agentic AI",
  image: "/placeholder.svg?height=400&width=600",
  featured: true,
}

const blogPosts = [
  {
    title: "10 Ways AI Chatbots Are Revolutionizing Customer Service in 2024",
    excerpt:
      "Discover the latest innovations in AI chatbot technology and how they're transforming customer interactions across industries.",
    author: "Sarah Chen",
    date: "December 12, 2024",
    readTime: "6 min read",
    category: "AI Chatbots",
    image: "/placeholder.svg?height=250&width=400",
    trending: true,
  },
  {
    title: "Enterprise Blockchain: Beyond Cryptocurrency to Real Business Value",
    excerpt:
      "Learn how enterprises are leveraging blockchain technology for supply chain transparency, digital identity, and secure transactions.",
    author: "Michael Rodriguez",
    date: "December 10, 2024",
    readTime: "7 min read",
    category: "Blockchain",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    title: "Building AI-First Organizations: A Strategic Guide for Leaders",
    excerpt:
      "A comprehensive guide for business leaders on how to transform their organizations with AI-first strategies and culture.",
    author: "Dr. Emily Watson",
    date: "December 8, 2024",
    readTime: "10 min read",
    category: "AI Strategy",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    title: "The ROI of AI Corporate Training: Measuring Success in Skill Development",
    excerpt:
      "Analyze the return on investment of AI training programs and how to measure their impact on organizational capabilities.",
    author: "James Thompson",
    date: "December 5, 2024",
    readTime: "5 min read",
    category: "AI Training",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    title: "Predictive Analytics in Manufacturing: Preventing Downtime Before It Happens",
    excerpt:
      "Explore how predictive analytics and IoT sensors are helping manufacturers prevent equipment failures and optimize operations.",
    author: "Lisa Park",
    date: "December 3, 2024",
    readTime: "8 min read",
    category: "Predictive Analytics",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    title: "Ethical AI Development: Building Responsible AI Systems for the Future",
    excerpt:
      "Understand the importance of ethical considerations in AI development and how to build responsible AI systems.",
    author: "Dr. Rajesh Kumar",
    date: "December 1, 2024",
    readTime: "9 min read",
    category: "AI Ethics",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    title: "Computer Vision in Retail: Transforming the Shopping Experience",
    excerpt:
      "Discover how computer vision technology is revolutionizing retail through automated checkout, inventory management, and customer analytics.",
    author: "Anna Martinez",
    date: "November 28, 2024",
    readTime: "6 min read",
    category: "Computer Vision",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    title: "Natural Language Processing: Breaking Down Language Barriers in Business",
    excerpt: "Learn how NLP technology is enabling businesses to process and understand human language at scale.",
    author: "David Kim",
    date: "November 25, 2024",
    readTime: "7 min read",
    category: "NLP",
    image: "/placeholder.svg?height=250&width=400",
  },
]

const categories = [
  "All Posts",
  "Agentic AI",
  "AI Chatbots",
  "Blockchain",
  "AI Strategy",
  "AI Training",
  "Predictive Analytics",
  "AI Ethics",
  "Computer Vision",
  "NLP",
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 text-sm px-4 py-2">
            📚 AI Insights & Updates
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Knowledge Hub
            <span className="block text-white">Stay Ahead of the Curve</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore the latest insights, trends, and innovations in artificial intelligence. From technical deep-dives
            to strategic guidance, we share knowledge that matters.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search articles..."
              className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-cyan-400"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Featured Article</h2>
            <p className="text-gray-400">Our latest insights on AI innovation</p>
          </div>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0">Featured</Badge>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="border-cyan-400 text-cyan-400 w-fit mb-4">
                  {featuredPost.category}
                </Badge>

                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{featuredPost.title}</h3>

                <p className="text-gray-300 mb-6 text-lg">{featuredPost.excerpt}</p>

                <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 w-fit">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-10 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0"
                    : "border-slate-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Latest Articles</h2>
              <p className="text-gray-400">Stay updated with our latest insights</p>
            </div>
            <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
              View All Posts
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="outline" className="border-cyan-400 text-cyan-400 bg-slate-900/80">
                      {post.category}
                    </Badge>
                    {post.trending && (
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <Button variant="ghost" className="text-cyan-400 hover:text-white hover:bg-cyan-400/20 p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Stay Updated with AI Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter and get the latest AI trends, insights, and updates delivered to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-cyan-400"
            />
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8">
              Subscribe
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI solutions can transform your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
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
