"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import {
  TrendingUp,
  Target,
  Eye,
  BarChart3,
  Trophy,
  Crown,
  Star,
  Zap,
  Brain,
  Clock,
  ArrowRight,
  Award,
  Users,
  Sparkles,
} from "lucide-react"

const benefits = [
  {
    icon: Eye,
    title: "Understand Your Strengths & Weaknesses",
    description:
      "Get detailed insights into which areas you excel at and which need improvement across different domains.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    icon: TrendingUp,
    title: "Visualize Progress Over Time",
    description: "Track your improvement journey with detailed charts and analytics showing your growth trajectory.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800",
  },
  {
    icon: Target,
    title: "Set Personal Improvement Goals",
    description:
      "Use your current rating to set realistic targets and milestones for your interview preparation journey.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
  },
  {
    icon: BarChart3,
    title: "Domain-Specific Score Feedback",
    description: "Get separate ratings for different domains like System Design, DSA, Frontend, Backend, and more.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800",
  },
]


const ratingFactors = [
  {
    factor: "Answer Quality",
    weight: "40%",
    description: "Technical accuracy, completeness, and clarity of your responses",
    icon: Brain,
  },
  {
    factor: "Time Management",
    weight: "25%",
    description: "How efficiently you answer questions within the given time frame",
    icon: Clock,
  },
  {
    factor: "Communication",
    weight: "20%",
    description: "Clarity of explanation and ability to articulate complex concepts",
    icon: Users,
  },
  {
    factor: "Problem Solving",
    weight: "15%",
    description: "Approach to breaking down problems and finding solutions",
    icon: Target,
  },
]

export default function PerformanceRatingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      {/* Header Section */}
      <section className="container py-16 lg:py-24">
        <div className="text-center space-y-6">
          <Badge
            variant="secondary"
            className="bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800"
          >
            <Trophy className="w-3 h-3 mr-1" />
            Performance Rating
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Track Your Performance
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Like a Pro
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Every AI interview you complete contributes to your performance rating. Track your growth, compete with
            others, and watch your skills improve over time. Our intelligent rating system adapts to your progress,
            ensuring you're always challenged at the right level.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Why Performance Ratings
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Matter
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Transform your interview preparation with data-driven insights and competitive motivation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${benefit.bgColor} ${benefit.borderColor} border-2`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {benefit.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>


      {/* Rating System Explanation */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            How Your Rating is
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Calculated
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our intelligent algorithm considers multiple factors to give you a fair and accurate performance rating
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {ratingFactors.map((factor, index) => {
            const IconComponent = factor.icon
            return (
              <Card key={index} className="bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">{factor.factor}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {factor.weight}
                        </Badge>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{factor.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Adaptive System */}
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border-indigo-200 dark:border-indigo-800">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Adaptive Rating System</h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Our AI continuously adapts to your performance level, ensuring questions become more challenging as you
                improve. This keeps you in the optimal learning zone and prevents stagnation in your growth.
              </p>
              <div className="flex items-center justify-center gap-8 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Dynamic</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Difficulty Adjustment</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Real-time</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Performance Tracking</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Personalized</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Growth Path</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border-indigo-200 dark:border-indigo-800 shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    Ready to Build Your Rating?
                  </span>
                  <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100">
                  Start Your Journey to
                  <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Interview Mastery
                  </span>
                </h2>

                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Take your first AI interview today and begin building your performance rating. Compete with thousands
                  of developers and track your progress to interview success.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 group transition-all"
                >
                  Start Interview Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-slate-300 dark:border-slate-600"
                >
                  <Award className="mr-2 h-5 w-5" />
                  View My Dashboard
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  <span>Earn badges & achievements</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span>Track your improvement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span>Compete with others</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
