"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Calendar,
  BookOpen,
  Target,
  MessageSquare,
  Brain,
  Star,
  TrendingUp,
  FileText,
  User,
  Award,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

const SessionDetail = () => {
  const { sessionId } = useParams()
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (sessionId) {
      fetchSessionDetail()
    }
  }, [sessionId])

  const fetchSessionDetail = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`https://ai-interview-agent-backend-02vk.onrender.cominterview/getSessionDetailById/${sessionId}`, {
        withCredentials: true,
      })
      setSession(response.data)
    } catch (err) {
      setError(err.message)
      console.error("Error fetching session detail:", err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getScoreColor = (score) => {
    if (score >= 8) return "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
    if (score >= 6) return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
    if (score >= 4) return "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
    return "bg-gradient-to-r from-red-500 to-pink-500 text-white"
  }

  const getScoreIcon = (score) => {
    if (score >= 8) return <CheckCircle className="h-4 w-4" />
    if (score >= 6) return <TrendingUp className="h-4 w-4" />
    if (score >= 4) return <AlertCircle className="h-4 w-4" />
    return <AlertCircle className="h-4 w-4" />
  }

  const calculateAverageScore = (qaItem) => {
    if (!qaItem) return 0
    const scores = [
      qaItem.confidenceScore || 0,
      qaItem.qualityScore || 0,
      qaItem.communicationScore || 0,
      qaItem.depthScore || 0,
    ]
    return (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(1)
  }

  const calculateFinalScore = () => {
    if (!session.qaList || session.qaList.length === 0) return 0
    const totalScore = session.qaList.reduce((sum, qa) => {
      const avgScore = Number.parseFloat(calculateAverageScore(qa))
      return sum + avgScore
    }, 0)
    return (totalScore / session.qaList.length).toFixed(1)
  }

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="space-y-6">
            <Skeleton className="h-8 w-48 bg-muted" />
            <Card className="bg-card border-border">
              <CardHeader>
                <Skeleton className="h-6 w-64 bg-muted" />
                <Skeleton className="h-4 w-96 bg-muted" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-20 bg-muted" />
                  ))}
                </div>
              </CardContent>
            </Card>
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <Skeleton className="h-6 w-full bg-muted" />
                  <Skeleton className="h-20 w-full bg-muted" />
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, j) => (
                      <Skeleton key={j} className="h-16 bg-muted" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="bg-card border-border max-w-md">
          <CardContent className="p-6 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">Error Loading Session</h2>
            <p className="text-muted-foreground mb-4">{error}</p>
            <Link to="/profile">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Profile
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="bg-card border-border max-w-md">
          <CardContent className="p-6 text-center">
            <FileText className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">Session Not Found</h2>
            <p className="text-muted-foreground mb-4">The requested session could not be found.</p>
            <Link to="/profile">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Profile
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/profile">
            <Button
              variant="outline"
              className="border-border text-muted-foreground hover:bg-slate-800 hover:text-white bg-transparent"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Profile
            </Button>
          </Link>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Interview Session Details
          </h1>
        </div>

        {/* Session Overview */}
        <Card className="mb-8 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30  shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BookOpen className="h-6 w-6" />
              {session.domain || "General Programming"}
            </CardTitle>
            <CardDescription className="text-indigo-100">
              Session conducted on {formatDate(session.createdAt)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/20">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-indigo-100">Experience Level</p>
                  <p className="font-semibold">{session.experienceLevel || "Intermediate"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/20">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-indigo-100">Total Questions</p>
                  <p className="font-semibold">{session.qaList?.length || 0}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/20">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-indigo-100">Date</p>
                  <p className="font-semibold">{formatDate(session.createdAt).split(",")[0]}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/20">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-indigo-100">Time</p>
                  <p className="font-semibold">{formatDate(session.createdAt).split(",")[1]}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Score Section */}
        <Card className="mb-8 bg-green-400/50 dark:bg-green-900/30 text-white border-0 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Award className="h-6 w-6" />
              Final Session Score
            </CardTitle>
            <CardDescription className="text-green-100">Overall performance across all questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">{calculateFinalScore()}</div>
                <div className="text-xl text-green-100">out of 10</div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  {Number.parseFloat(calculateFinalScore()) >= 8 ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      <span className="text-green-100">Excellent Performance</span>
                    </>
                  ) : Number.parseFloat(calculateFinalScore()) >= 6 ? (
                    <>
                      <TrendingUp className="h-5 w-5" />
                      <span className="text-green-100">Good Performance</span>
                    </>
                  ) : Number.parseFloat(calculateFinalScore()) >= 4 ? (
                    <>
                      <AlertCircle className="h-5 w-5" />
                      <span className="text-green-100">Average Performance</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-5 w-5" />
                      <span className="text-green-100">Needs Improvement</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Q&A Section */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-indigo-400" />
            Questions & Answers
          </h2>

          {session.qaList?.map((qa, index) => (
            <Card key={index} className="bg-card border-border shadow-xl">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Q{index + 1}
                  </span>
                  Question
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Question */}
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
                  <p className="text-foreground leading-relaxed">{qa.question}</p>
                </div>

                {/* Answer */}
                <div>
                  <h4 className="text-foreground font-semibold mb-2 flex items-center gap-2">
                    <User className="h-4 w-4 text-indigo-400" />
                    Your Answer
                  </h4>
                  <div className="p-4 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
                    <p className="text-foreground leading-relaxed whitespace-pre-wrap">{qa.answer}</p>
                  </div>
                </div>

                {/* Scoring Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="bg-muted/50 border-border">
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-medium text-muted-foreground">Confidence</span>
                      </div>
                      <Badge className={`${getScoreColor(qa.confidenceScore || 0)} text-lg font-bold px-3 py-1`}>
                        {qa.confidenceScore || 0}/10
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/50 border-border">
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Award className="h-4 w-4 text-blue-400" />
                        <span className="text-sm font-medium text-muted-foreground">Quality</span>
                      </div>
                      <Badge className={`${getScoreColor(qa.qualityScore || 0)} text-lg font-bold px-3 py-1`}>
                        {qa.qualityScore || 0}/10
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/50 border-border">
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <MessageSquare className="h-4 w-4 text-green-400" />
                        <span className="text-sm font-medium text-muted-foreground">Communication</span>
                      </div>
                      <Badge className={`${getScoreColor(qa.communicationScore || 0)} text-lg font-bold px-3 py-1`}>
                        {qa.communicationScore || 0}/10
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/50 border-border">
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Brain className="h-4 w-4 text-purple-400" />
                        <span className="text-sm font-medium text-muted-foreground">Depth</span>
                      </div>
                      <Badge className={`${getScoreColor(qa.depthScore || 0)} text-lg font-bold px-3 py-1`}>
                        {qa.depthScore || 0}/10
                      </Badge>
                    </CardContent>
                  </Card>
                </div>

                {/* Average Score and Feedback */}
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    {getScoreIcon(calculateAverageScore(qa))}
                    <span className="text-foreground font-semibold">Average Score:</span>
                    <Badge className={`${getScoreColor(calculateAverageScore(qa))} text-lg font-bold px-3 py-1`}>
                      {calculateAverageScore(qa)}/10
                    </Badge>
                  </div>
                </div>

                {/* Score Feedback Accordion */}
                {qa.scoreFeedbackText && (
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`feedback-${index}`} className="border-border">
                      <AccordionTrigger className="text-foreground hover:text-indigo-400">
                        View Detailed Feedback
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="p-4 bg-muted/30 rounded-lg border border-border mt-2">
                          <p className="text-foreground leading-relaxed whitespace-pre-wrap">{qa.scoreFeedbackText}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="bg-slate-700 my-8" />

        {/* AI Feedback Section */}
        {session.feedback && (
          <Card className="mb-8 bg-card border-border shadow-xl">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Brain className="h-6 w-6 text-indigo-400" />
                AI Feedback & Recommendations
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Overall assessment and suggestions for improvement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-500/30">
                <p className="text-foreground leading-relaxed whitespace-pre-wrap text-lg">{session.feedback}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default SessionDetail
