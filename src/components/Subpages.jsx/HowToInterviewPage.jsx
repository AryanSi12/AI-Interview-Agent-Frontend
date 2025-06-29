import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, User, Upload, Hash, Mic, ArrowRight, CheckCircle, Clock, Brain, FileText, Play } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Choose Your Domain",
    description: "Select the technical domain you want to practice for your interview",
    details:
      "Pick from Web Development, Data Science, Machine Learning, DevOps, System Design, or Cybersecurity based on your target role.",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    estimatedTime: "30 seconds",
    tips: ["Choose the domain that matches your target job", "You can practice multiple domains separately"],
  },
  {
    id: 2,
    title: "Input Your Experience Level",
    description: "Tell us about your experience level to get appropriately challenging questions",
    details:
      "Select from Beginner (0-2 years), Intermediate (2-5 years), or Senior (5+ years) to ensure questions match your skill level.",
    icon: User,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800",
    estimatedTime: "15 seconds",
    tips: ["Be honest about your experience level", "Questions will be tailored to your expertise"],
  },
  {
    id: 3,
    title: "Upload Your Resume",
    description: "Upload your resume so our AI can ask personalized questions about your experience",
    details:
      "Our AI analyzes your resume to generate relevant questions about your projects, skills, and experience mentioned in your CV.",
    icon: Upload,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    estimatedTime: "1 minute",
    tips: ["Use a recent, updated resume", "PDF format works best", "Include relevant projects and skills"],
  },
  {
    id: 4,
    title: "Set Number of Questions",
    description: "Choose how many questions you want to practice with (5-13 questions)",
    details:
      "Select the interview length that fits your schedule. Shorter sessions for quick practice, longer ones for comprehensive preparation.",
    icon: Hash,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    estimatedTime: "10 seconds",
    tips: ["Start with 5-7 questions for first-time users", "13 questions simulate a full interview"],
  },
  {
    id: 5,
    title: "AI Interview Begins",
    description: "Start your audio-based interview with our intelligent AI interviewer",
    details:
      "Speak naturally as our AI asks questions, listens to your responses, and provides real-time feedback on your answers.",
    icon: Mic,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    estimatedTime: "15-30 minutes",
    tips: [
      "Speak clearly and at a normal pace",
      "Take your time to think before answering",
      "Treat it like a real interview",
    ],
  },
]

const features = [
  {
    icon: Brain,
    title: "AI-Powered Questions",
    description: "Intelligent questions based on your resume and experience level",
  },
  {
    icon: Mic,
    title: "Voice Recognition",
    description: "Natural speech-to-text conversion for seamless interaction",
  },
  {
    icon: FileText,
    title: "Detailed Feedback",
    description: "Comprehensive analysis of your responses with improvement suggestions",
  },
  {
    icon: CheckCircle,
    title: "Performance Tracking",
    description: "Track your progress over time and identify areas for improvement",
  },
]

export default function HowToInterviewPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      {/* Header Section */}
      <section className="container py-16 lg:py-24">
        <div className="text-center space-y-6">
          <Badge
            variant="secondary"
            className="bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800"
          >
            <Play className="w-3 h-3 mr-1" />
            Interview Guide
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            How to Take an
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Interview
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Follow these simple steps to start your AI-powered interview preparation journey. Get personalized
            questions, real-time feedback, and track your progress.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="container py-16">
        <div className="space-y-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            const isLast = index === steps.length - 1

            return (
              <div key={step.id} className="relative">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Step Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs font-medium">
                        Step {step.id}
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{step.title}</h2>
                      <p className="text-lg text-slate-600 dark:text-slate-300">{step.description}</p>
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{step.details}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <Clock className="h-4 w-4" />
                        <span>{step.estimatedTime}</span>
                      </div>
                    </div>

                    {/* Tips */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">Pro Tips:</h4>
                      <ul className="space-y-1">
                        {step.tips.map((tip, tipIndex) => (
                          <li
                            key={tipIndex}
                            className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Step Visual */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <Card
                      className={`${step.bgColor} ${step.borderColor} border-2 hover:shadow-lg transition-all duration-300`}
                    >
                      <CardContent className="p-8">
                        <div className="text-center space-y-6">
                          <div
                            className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                          >
                            <IconComponent className="h-12 w-12 text-white" />
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
                          </div>

                          <Badge variant="secondary" className="bg-white/80 dark:bg-slate-800/80">
                            {step.estimatedTime}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Connector Line */}
                {!isLast && (
                  <div className="flex justify-center my-12">
                    <div className="w-px h-16 bg-gradient-to-b from-slate-300 to-slate-200 dark:from-slate-600 dark:to-slate-700"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Features Overview */}
      <section className="container py-16 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            What Makes Our AI Interviews
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Special
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Experience the most advanced AI interview platform with cutting-edge features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border-indigo-200 dark:border-indigo-800">
          <CardContent className="p-12 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100">
                Ready to Start Your
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  AI Interview Journey?
                </span>
              </h2>

              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Join thousands of developers who have improved their interview skills with our AI-powered platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 group"
                  onClick={() => window.location.href = "/domains" }
                >
                  Start Interview Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-slate-300 dark:border-slate-600"
                  onClick={() => window.location.href = "/upload" } 
                >
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Resume First
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>signup required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Instant feedback</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Free to try</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
