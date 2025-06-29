"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  MessageSquare,
  Brain,
  Zap,
  Target,
  TrendingUp,
  Award,
  Eye,
  BarChart3,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Star,
  Clock,
  Lightbulb,
} from "lucide-react"

const answerParameters = [
  {
    name: "Depth of Content",
    description: "Technical accuracy and completeness of your answer",
    icon: Brain,
    score: 85,
    color: "bg-blue-500",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Confidence",
    description: "How confidently you delivered your response",
    icon: Zap,
    score: 78,
    color: "bg-green-500",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Quality of Solution",
    description: "Effectiveness and optimization of your proposed solution",
    icon: Target,
    score: 92,
    color: "bg-purple-500",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Communication Clarity",
    description: "How clearly you explained complex concepts",
    icon: MessageSquare,
    score: 73,
    color: "bg-orange-500",
    gradient: "from-orange-500 to-red-500",
  },
]

const overallMetrics = [
  {
    title: "Overall Score",
    value: "8.2/10",
    description: "Average of all answer evaluations",
    icon: Star,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
    borderColor: "border-yellow-200 dark:border-yellow-800",
  },
  {
    title: "Rating Change",
    value: "+25",
    description: "Points gained from this interview",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800",
  },
  {
    title: "Time Efficiency",
    value: "18 min",
    description: "Total interview completion time",
    icon: Clock,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
]

const feedbackBenefits = [
  {
    icon: Eye,
    title: "Identify Weak Areas",
    description: "Pinpoint specific skills that need improvement with detailed breakdowns and actionable insights.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    icon: BarChart3,
    title: "Track Growth Over Time",
    description: "Monitor your progress across multiple interviews and see how your skills develop consistently.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800",
  },
  {
    icon: Users,
    title: "Improve Communication",
    description: "Enhance your ability to articulate complex technical concepts clearly and confidently.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
  },
  {
    icon: Target,
    title: "Real-World Preparation",
    description: "Get feedback that directly translates to better performance in actual job interviews.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800",
  },
]

const sampleFeedback = {
  question: "Explain the difference between SQL and NoSQL databases and when you would use each.",
  userAnswer:
    "SQL databases are relational and use structured data with ACID properties. NoSQL databases are more flexible and can handle unstructured data. I'd use SQL for financial systems and NoSQL for social media applications.",
  scores: {
    depth: 75,
    confidence: 85,
    quality: 80,
    communication: 90,
  },
  feedback:
    "Good foundational understanding! You correctly identified key differences and provided relevant use cases. To improve: elaborate on specific NoSQL types (document, key-value, graph) and mention scalability considerations. Your communication was clear and well-structured.",
  suggestions: [
    "Discuss specific NoSQL database types (MongoDB, Cassandra, Redis)",
    "Mention horizontal vs vertical scaling differences",
    "Include performance considerations for each type",
  ],
}

export default function FeedbackExplanationPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      {/* Header Section */}
      <section className="container py-16 lg:py-24">
        <div className="text-center space-y-6">
          <Badge
            variant="secondary"
            className="bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800"
          >
            <MessageSquare className="w-3 h-3 mr-1" />
            Interview Feedback
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Understand Your
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Interview Feedback
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            After every AI interview session, you receive comprehensive, personalized feedback designed to accelerate
            your improvement. Our advanced analysis breaks down your performance across multiple dimensions, providing
            actionable insights that help you excel in real interviews.
          </p>
        </div>
      </section>

      {/* Answer-Level Scoring Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Answer-Level
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Scoring System
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Every answer you provide is evaluated across four key parameters to give you detailed insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {answerParameters.map((param, index) => {
            const IconComponent = param.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-slate-800"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${param.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {param.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300">{param.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Score</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{param.score}%</span>
                    </div>
                    <Progress value={param.score} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Sample Answer Analysis */}
        <Card className="bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Sample Answer Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Question:</h4>
              <p className="text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 p-4 rounded-lg border">
                {sampleFeedback.question}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Your Answer:</h4>
              <p className="text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 p-4 rounded-lg border">
                {sampleFeedback.userAnswer}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(sampleFeedback.scores).map(([key, score], index) => {
                const param = answerParameters.find((p) => p.name.toLowerCase().includes(key))
                return (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{score}%</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 capitalize">{key}</div>
                    <Progress value={score} className="h-1 mt-2" />
                  </div>
                )
              })}
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">AI Feedback:</h4>
              <p className="text-slate-600 dark:text-slate-300 bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
                {sampleFeedback.feedback}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Improvement Suggestions:</h4>
              <ul className="space-y-2">
                {sampleFeedback.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-300 text-sm">{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Overall Metrics Section */}
      <section className="container py-16 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Overall Interview
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Metrics
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive metrics that summarize your entire interview performance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {overallMetrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${metric.bgColor} ${metric.borderColor} border-2`}
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div
                      className={`w-16 h-16 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center mx-auto shadow-lg`}
                    >
                      <IconComponent className={`h-8 w-8 ${metric.color}`} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{metric.value}</div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{metric.title}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">{metric.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* AI-Generated Summary */}
        <Card className="bg-white dark:bg-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <Brain className="h-5 w-5 text-purple-500" />
              AI-Generated Overall Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>Excellent performance overall!</strong> You demonstrated strong technical knowledge across
                  multiple domains. Your communication was clear and well-structured. Areas for improvement include
                  diving deeper into system design trade-offs and providing more specific examples from your experience.
                  Keep practicing complex algorithmic problems to build confidence in optimization discussions.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">
                  Strong Performance
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                  +25 Rating Points
                </Badge>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                  Badge Earned: Problem Solver
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Benefits of Feedback */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Benefits of
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Detailed Feedback
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Transform your interview skills with actionable insights and personalized recommendations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {feedbackBenefits.map((benefit, index) => {
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

      {/* Feedback Process */}
      <section className="container py-16 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            How Feedback is
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Generated
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our AI analyzes multiple aspects of your performance to provide comprehensive feedback
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center bg-white dark:bg-slate-800">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Content Analysis</h3>
              <p className="text-slate-600 dark:text-slate-300">
                AI evaluates technical accuracy, completeness, and depth of your answers using advanced NLP
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white dark:bg-slate-800">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Communication Assessment</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Analyzes clarity, structure, and confidence in your verbal communication and explanations
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white dark:bg-slate-800">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Personalized Insights</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Generates specific recommendations based on your unique strengths and improvement areas
              </p>
            </CardContent>
          </Card>
        </div>
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
                    Ready for Actionable Feedback?
                  </span>
                  <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100">
                  Start Your Interview and
                  <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Get Detailed Feedback
                  </span>
                </h2>

                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Take your first AI interview today and experience our comprehensive feedback system. Every session
                  provides valuable insights to accelerate your interview preparation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => window.location.href = "/domains"} 
                  className="text-lg px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 group transition-all"
                >
                  Take Interview Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-slate-300 dark:border-slate-600"
                >
                  <Award className="mr-2 h-5 w-5" />
                  View Sample Feedback
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Instant detailed feedback</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Actionable improvement tips</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Track progress over time</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
