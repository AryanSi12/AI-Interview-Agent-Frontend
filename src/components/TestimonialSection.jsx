"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Google",
    avatar: "/placeholder.svg",
    rating: 5,
    quote:
      "AI Interviewer helped me practice for my Google interview. The feedback was incredibly detailed and helped me improve my technical communication significantly.",
    domain: "Frontend",
    initials: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Data Scientist",
    company: "Microsoft",
    avatar: "/placeholder.svg",
    rating: 5,
    quote:
      "The machine learning interview simulations were spot-on. I felt completely prepared for my Microsoft interview thanks to the personalized practice sessions.",
    domain: "ML",
    initials: "MJ",
  },
  {
    name: "Priya Patel",
    role: "Backend Engineer",
    company: "Netflix",
    avatar: "/placeholder.svg",
    rating: 5,
    quote:
      "Amazing platform! The system design questions and feedback helped me understand complex architectural concepts better than any other resource.",
    domain: "Backend",
    initials: "PP",
  },
  {
    name: "Alex Rodriguez",
    role: "Full Stack Developer",
    company: "Stripe",
    avatar: "/placeholder.svg",
    rating: 5,
    quote:
      "The resume analysis feature identified gaps I didn't know I had. After practicing for 2 weeks, I aced my Stripe interview with confidence!",
    domain: "Full Stack",
    initials: "AR",
  },
  {
    name: "Emily Wang",
    role: "DevOps Engineer",
    company: "Amazon",
    avatar: "/placeholder.svg",
    rating: 5,
    quote:
      "The AI interviewer asked questions that were incredibly similar to my actual Amazon interview. This platform is truly a game-changer for interview prep.",
    domain: "DevOps",
    initials: "EW",
  },
  {
    name: "David Kim",
    role: "Security Engineer",
    company: "Meta",
    avatar: "/placeholder.svg",
    rating: 5,
    quote:
      "Comprehensive coverage of cybersecurity topics with realistic scenarios. The detailed feedback helped me articulate my experience much more effectively.",
    domain: "Security",
    initials: "DK",
  },
]

function TestimonialsSection() {
  return (
    <section id="testimonials" className="container py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          Trusted by
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            50,000+ Developers
          </span>
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          See how AI Interviewer has helped developers land their dream jobs at top tech companies
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
          >
            <CardContent className="p-6 space-y-4">
              {/* Rating */}
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-slate-200 dark:text-slate-700" />
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>

                <Badge
                  variant="secondary"
                  className="text-xs bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
                >
                  {testimonial.domain}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-slate-200 dark:border-slate-700">
        {[
          { label: "Interviews Completed", value: "50,000+" },
          { label: "Success Rate", value: "98%" },
          { label: "Companies", value: "500+" },
          { label: "User Rating", value: "4.9/5" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection