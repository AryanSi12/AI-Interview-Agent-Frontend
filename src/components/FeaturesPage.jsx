"use client"

import {
  Mic,
  FileText,
  BarChart2,
  Star,
  ArrowRight,
  Users,
  Trophy,
  Clock,
  CheckCircle,
  Quote,
  ChevronDown,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function FeaturesPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const features = [
    {
      icon: FileText,
      title: "Smart Resume Analysis",
      description:
        "Upload your resume and get AI-powered personalized recommendations for improvement, domain matching, keyword optimization, and targeted prep guidance based on industry standards.",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
      features: ["ATS Compatibility Check", "Keyword Optimization", "Industry-Specific Tips", "Format Recommendations"],
    },
    {
      icon: Mic,
      title: "AI-Powered Interview",
      description:
        "Experience realistic audio-based interview simulations with adaptive questioning, real-time voice analysis, and domain-specific scenarios tailored to your experience level.",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      hoverColor: "hover:bg-green-100 dark:hover:bg-green-900/30",
      features: ["Voice Recognition", "Adaptive Questions", "Real-time Analysis", "Multiple Domains"],
    },
    {
      icon: BarChart2,
      title: "Comprehensive Feedback",
      description:
        "Receive detailed scoring on answer depth, confidence levels, clarity of communication, and technical accuracy, plus actionable suggestions for improvement and growth areas.",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      hoverColor: "hover:bg-purple-100 dark:hover:bg-purple-900/30",
      features: ["Detailed Scoring", "Communication Analysis", "Improvement Tips", "Progress Tracking"],
    },
    {
      icon: Star,
      title: "Performance Analytics",
      description:
        "Track your interview performance over time, compete with peers in a gamified environment, and unlock achievements as you improve your skills and confidence.",
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      hoverColor: "hover:bg-orange-100 dark:hover:bg-orange-900/30",
      features: ["Performance Metrics", "Peer Comparison", "Achievement System", "Growth Analytics"],
    },
  ]

  const stats = [
    { icon: Users, value: "50,000+", label: "Active Users", color: "text-blue-600 dark:text-blue-400" },
    { icon: Trophy, value: "95%", label: "Success Rate", color: "text-green-600 dark:text-green-400" },
    { icon: Clock, value: "1M+", label: "Practice Sessions", color: "text-purple-600 dark:text-purple-400" },
    { icon: CheckCircle, value: "500+", label: "Companies", color: "text-orange-600 dark:text-orange-400" },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      content:
        "The AI interview practice helped me identify my weak points and improve my communication skills. I landed my dream job at Google!",
      avatar: "SC",
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager at Microsoft",
      content:
        "The resume analysis feature was a game-changer. It helped me optimize my resume for ATS systems and get more interview calls.",
      avatar: "MR",
    },
    {
      name: "Emily Johnson",
      role: "Data Scientist at Amazon",
      content:
        "The detailed feedback and performance tracking kept me motivated throughout my job search. Highly recommend this platform!",
      avatar: "EJ",
    },
  ]

  const faqs = [
    {
      question: "How does the AI interview simulation work?",
      answer:
        "Our AI uses advanced natural language processing to conduct realistic interviews. It adapts questions based on your responses, analyzes your speech patterns, and provides real-time feedback on your performance.",
    },
    {
      question: "Is my resume data secure and private?",
      answer:
        "Absolutely. We use enterprise-grade encryption to protect your data. Your resume and personal information are never shared with third parties and are stored securely in compliance with data protection regulations.",
    },
    {
      question: "Can I practice for specific companies or roles?",
      answer:
        "Yes! Our platform offers company-specific interview preparation for 500+ companies across various industries. You can also customize practice sessions based on specific job roles and requirements.",
    },
    {
      question: "What kind of feedback do I receive?",
      answer:
        "You'll receive comprehensive feedback including communication clarity, technical accuracy, confidence levels, and specific suggestions for improvement. Our AI also tracks your progress over time.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 7-day free trial with full access to all features. No credit card required to start, and you can cancel anytime during the trial period.",
    },
  ]

  return (
    <div className="relative min-h-screen">
      {/* Background Decorations */}

      <div className="relative container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20 space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className="px-6 py-3 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              ✨ Powered by Advanced AI Technology
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
              Everything You Need to
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ace Your Next Interview
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Transform your interview skills with our comprehensive AI-powered platform. Get personalized training,
              detailed feedback, and the confidence you need to land your dream job at top companies worldwide.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center space-y-2">
                  <div className="flex justify-center">
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">{stat.value}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Powerful Features for Interview Success
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Our comprehensive suite of AI-powered tools helps you prepare, practice, and perfect your interview
              skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm ${feature.hoverColor}`}
                >
                  <CardHeader className="pb-4">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <IconComponent className={`w-8 h-8 ${feature.color}`} />
                    </div>

                    {/* Title */}
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors mb-3">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Description */}
                    <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                      {feature.description}
                    </CardDescription>

                    {/* Feature List */}
                    <div className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-100/30 dark:to-slate-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              )
            })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Success Stories from Our Users
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-slate-400 mb-4" />
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100">{testimonial.name}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Get answers to common questions about our AI interview platform.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-md">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center space-y-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-3xl p-12 backdrop-blur-sm">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100">
              Ready to transform your interview skills?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Join thousands of successful candidates who have improved their interview performance and landed their
              dream jobs with our comprehensive AI-powered platform. Start your journey today!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => window.location.href = "/domains"}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group text-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-10 py-4 rounded-2xl font-semibold transition-all duration-300 text-lg"
            >
              Watch Demo
            </Button>
          </div>

          {/* Additional Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-500 dark:text-slate-400 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
