"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Upload,
  Mic,
  Target,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Upload Resume & Choose Domain",
    description:
      "Upload your resume and select your target domain. Our AI analyzes your background to create personalized questions.",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    step: "02",
    icon: Mic,
    title: "Take AI Voice Interview",
    description:
      "Engage in natural conversation with our AI interviewer. Practice both technical and behavioral questions.",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    step: "03",
    icon: Target,
    title: "Get Instant Feedback",
    description:
      "Receive detailed feedback on your responses, communication skills, and technical knowledge with actionable insights.",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Track Progress Over Time",
    description:
      "Monitor your improvement with comprehensive analytics and personalized recommendations for continued growth.",
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
]
function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="container py-24 bg-slate-50/50 dark:bg-slate-900/50 transition-colors"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          How It
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Works
          </span>
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Get started with your AI-powered interview preparation in four simple steps
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isLast = index === steps.length - 1

          return (
            <div key={index} className="relative">
              <Card
                className={`group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${step.bgColor} border border-slate-200 dark:border-slate-700`}
              >
                <CardContent className="p-8 text-center">
                  <div className="space-y-6">
                    <div className="relative">
                      <div
                        className={`w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="absolute -top-2 -right-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300">
                        {step.step}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {!isLast && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-slate-400 dark:text-slate-500" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default HowItWorks