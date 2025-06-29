"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Search,
  Lightbulb,
  Target,
  Brain,
  Upload,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Shield,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const benefits = [
  {
    icon: Search,
    title: "Personalized Resume Review",
    description: "Get detailed analysis of your resume's strengths and weaknesses with actionable insights.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    icon: Lightbulb,
    title: "Suggested Changes for Improvement",
    description: "Receive specific recommendations to enhance your resume's impact and readability.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800",
  },
  {
    icon: Target,
    title: "Key Topics to Prepare Before Interview",
    description: "Identify important topics and skills from your resume that interviewers are likely to ask about.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
  },
  {
    icon: Brain,
    title: "Recommended Domains to Practice",
    description: "Get personalized domain suggestions based on your skills and experience for targeted practice.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800",
  },
]

const technicalFeatures = [
  {
    icon: Brain,
    title: "Advanced NLP Processing",
    description: "Our AI uses natural language processing to understand context and meaning in your resume",
  },
  {
    icon: Zap,
    title: "Skills Extraction",
    description: "Automatically identifies and categorizes technical and soft skills from your experience",
  },
  {
    icon: TrendingUp,
    title: "Structure Analysis",
    description: "Evaluates resume format, organization, and presentation for maximum impact",
  },
  {
    icon: Shield,
    title: "Domain Matching",
    description: "Aligns your background with relevant technical domains for targeted interview preparation",
  },
]

const stats = [
  { number: "98%", label: "Accuracy Rate", description: "In skill identification" },
  { number: "15+", label: "Analysis Points", description: "Comprehensive review areas" },
  { number: "50+", label: "Domain Categories", description: "Technical specializations" },
  { number: "3 min", label: "Analysis Time", description: "Fast, detailed results" },
]

export default function ResumeAnalysisInfoPage() {

  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      {/* Header Section */}
      <section className="container py-16 lg:py-24">
        <div className="text-center space-y-6">
          <Badge
            variant="secondary"
            className="bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800"
          >
            <FileText className="w-3 h-3 mr-1" />
            Resume Analysis
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Why Resume Analysis
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Matters
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Your resume is the foundation of every interview conversation. Our AI-powered analysis transforms your
            resume into a strategic advantage by identifying key talking points, suggesting improvements, and creating
            personalized interview questions that help you prepare for exactly what employers want to discuss.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            How Resume Analysis
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Helps You
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Unlock the full potential of your resume with comprehensive AI analysis and personalized recommendations
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

      {/* Technical Explanation Section */}
      <section className="container py-16 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            How Our AI
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Analyzes Your Resume
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Advanced artificial intelligence technology breaks down your resume into actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {technicalFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-800"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Detailed Process */}
        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">The Analysis Process</h3>
                <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                  Our sophisticated AI engine processes your resume through multiple layers of analysis
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Document Parsing</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Extracts and structures all text content, preserving context and relationships between sections
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Intelligent Analysis</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Uses NLP to understand skills, experience levels, and identifies gaps or strengths in your profile
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Domain Matching</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Aligns your background with relevant technical domains and generates targeted interview questions
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sample Analysis Preview */}
      <section className="container py-16 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            What You'll
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Receive
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            See a sample of the comprehensive analysis and recommendations you'll get
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Strengths Identified
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <div className="font-medium text-slate-900 dark:text-slate-100">Strong Technical Skills</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Comprehensive React, Node.js, and cloud technologies experience
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <div className="font-medium text-slate-900 dark:text-slate-100">Project Leadership</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Clear evidence of leading cross-functional teams and delivering results
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <div className="font-medium text-slate-900 dark:text-slate-100">Quantified Achievements</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Good use of metrics to demonstrate impact and results
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Improvement Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-4 w-4 text-yellow-500 mt-0.5" />
                <div>
                  <div className="font-medium text-slate-900 dark:text-slate-100">Add More Keywords</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Include "microservices", "Docker", and "CI/CD" to match job requirements
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="h-4 w-4 text-yellow-500 mt-0.5" />
                <div>
                  <div className="font-medium text-slate-900 dark:text-slate-100">Strengthen Summary</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Lead with your most impressive achievement and years of experience
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="h-4 w-4 text-yellow-500 mt-0.5" />
                <div>
                  <div className="font-medium text-slate-900 dark:text-slate-100">Format Consistency</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Standardize date formats and bullet point styles throughout
                  </div>
                </div>
              </div>
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
                    Ready to Optimize Your Resume?
                  </span>
                  <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100">
                  Get Your Personalized
                  <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Resume Analysis Now
                  </span>
                </h2>

                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Upload your resume and receive comprehensive analysis with actionable insights in under 3 minutes.
                  Transform your resume into your strongest interview asset.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full max-w-2xl mx-auto">
                <Button
                  size="lg"
                  onClick={() => navigate("/resume-analysis/upload")}
                  className="flex items-center justify-center text-base sm:text-lg px-4 py-3 sm:px-8 sm:py-6 w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold group transition-all text-center whitespace-nowrap"
                >
                  <Upload className="mr-2 h-5 w-5 text-white shrink-0 group-hover:scale-110 transition-transform" />
                  Upload Resume
                  <ArrowRight className="ml-2 h-5 w-5 text-white shrink-0 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-base sm:text-lg px-4 py-3 sm:px-8 sm:py-6 w-full sm:w-auto border-slate-300 dark:border-slate-600 text-white text-center whitespace-nowrap"
                >
                  View Sample Analysis
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Free analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Instant results</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Privacy protected</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

