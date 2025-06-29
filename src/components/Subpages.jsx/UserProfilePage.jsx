"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  User,
  Award,
  CalendarClock,
  TrendingUp,
  BookOpen,
  Mic,
  FileText,
  Star,
  Brain,
  Code,
  Database,
} from "lucide-react"
import useUserStore from "@/store/useUserStore"
import { useNavigate } from "react-router-dom"

const UserProfilePage = () => {
  const user = useUserStore((state) => state.user)
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchInterviewSessions()
  }, [])

  const fetchInterviewSessions = async () => {
    try {
      setLoading(true)
      const response = await axios.get("https://ai-interview-agent-backend-02vk.onrender.cominterview/getAllSessionsByUser", {
        withCredentials: true,
      })
      setSessions(response.data || [])
    } catch (err) {
      setError(err.message)
      console.error("Error fetching sessions:", err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getInitials = (username) => {
    return username ? username.slice(0, 2).toUpperCase() : "U"
  }

  const getRatingColor = (rating) => {
    if (rating >= 1200) return "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
    if (rating >= 1100) return "bg-gradient-to-r from-orange-500 to-red-500 text-white"
    return "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
  }

  const getScoreColor = (score) => {
    if (score >= 7) return "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0"
    if (score >= 4) return "bg-gradient-to-r from-orange-500 to-red-500 text-white border-0"
    return "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0"
  }

  const prepareChartData = () => {
    if (!user?.ratingHistory) return []
    return user.ratingHistory.map((rating, index) => ({
      session: index + 1,
      rating: rating,
    }))
  }

  const calculateAverageScore = (qaList) => {
    if (!qaList || qaList.length === 0) return 0
    const total = qaList.reduce((sum, qa) => sum + (qa.averageScore || 0), 0)
    return (total / qaList.length).toFixed(1)
  }

  // Get icon for domain
  const getDomainIcon = (domain, index) => {
    const icons = [Mic, FileText, Star, Brain, Code, Database]
    const iconColors = [
      "text-blue-400",
      "text-green-400",
      "text-purple-400",
      "text-orange-400",
      "text-indigo-400",
      "text-teal-400",
    ]

    const IconComponent = icons[index % icons.length]
    const colorClass = iconColors[index % iconColors.length]

    return { IconComponent, colorClass }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center">
            <p className="text-slate-400">No user data available</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <TooltipProvider>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
          {/* User Profile Card */}
          <Card className="w-full hover:-translate-y-2 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-500 shadow-xl">
            <CardHeader className="border-b border-navy-700">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                  <User className="h-5 w-5 text-white" />
                </div>
                User Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Avatar className="h-24 w-24 ring-4 ring-purple/20">
                  <AvatarImage src={user.image || "/placeholder.svg"} alt={user.username} />
                  <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    {getInitials(user.username)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      {user.username}
                    </h2>
                    <p className="text-white text-lg">{user.email}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <UITooltip>
                      <TooltipTrigger>
                        <Badge
                          className={`${getRatingColor(user.currentRating)} flex items-center gap-1 px-3 py-1 border-0`}
                        >
                          <Award className="h-3 w-3" />
                          Rating: {user.currentRating}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent className="bg-navy-700 border-navy-600">
                        <p>Current interview rating</p>
                      </TooltipContent>
                    </UITooltip>

                    <UITooltip>
                      <TooltipTrigger>
                        <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 flex items-center gap-1">
                          <CalendarClock className="h-3 w-3" />
                          Joined {formatDate(user.createdAt)}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent className="bg-navy-700 border-navy-600">
                        <p>Member since</p>
                      </TooltipContent>
                    </UITooltip>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="bg-navy-700" />

          {/* Rating History Chart */}
          <Card className="w-full bg-navy-800 border-navy-700 shadow-xl">
            <CardHeader className="border-b border-navy-700">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                Rating Progress
              </CardTitle>
              <CardDescription className="text-slate-400">
                Your rating progression over interview sessions
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={prepareChartData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                    <XAxis
                      dataKey="session"
                      stroke="#94a3b8"
                      label={{ value: "Session Number", position: "insideBottom", offset: -5, fill: "#94a3b8" }}
                    />
                    <YAxis
                      domain={[1000, "dataMax + 50"]}
                      stroke="#94a3b8"
                      label={{ value: "Rating", angle: -90, position: "insideLeft", fill: "#94a3b8" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#334155",
                        border: "1px solid #475569",
                        borderRadius: "8px",
                        color: "#e2e8f0",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      }}
                      formatter={(value) => [value, "Rating"]}
                      labelFormatter={(label) => `Session ${label}`}
                    />
                    <Line
                      type="monotone"
                      dataKey="rating"
                      stroke="url(#chartGradient)"
                      strokeWidth={4}
                      dot={{ fill: "#10b981", strokeWidth: 3, r: 6 }}
                      activeDot={{ r: 8, stroke: "#10b981", strokeWidth: 3, fill: "#059669" }}
                      filter="drop-shadow(0 0 6px rgba(16, 185, 129, 0.4))"
                    />
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Separator className="bg-navy-700" />

          {/* Interview Sessions Table */}
          <Card className="w-full bg-navy-800 border-navy-700 shadow-xl">
            <CardHeader className="border-b border-navy-700">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                Interview Sessions Attended
              </CardTitle>
              <CardDescription className="text-slate-400">
                Your completed interview sessions and performance
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {loading ? (
                <div className="space-y-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-4 p-4">
                      <Skeleton className="h-8 w-8 rounded bg-navy-600" />
                      <Skeleton className="h-4 w-32 bg-navy-600" />
                      <Skeleton className="h-4 w-24 bg-navy-600" />
                      <Skeleton className="h-4 w-16 bg-navy-600" />
                      <Skeleton className="h-4 w-20 bg-navy-600" />
                      <Skeleton className="h-4 w-24 bg-navy-600" />
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="text-center py-8">
                  <p className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                    Error loading sessions: {error}
                  </p>
                </div>
              ) : sessions.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-slate-400">No sessions found.</p>
                </div>
              ) : (
                <div className="rounded-lg border border-navy-700 overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-navy-700hover:-translate-y-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-navy-700/50">
                        <TableHead className="text-slate-300 font-semibold">Domain</TableHead>
                        <TableHead className="text-slate-300 font-semibold">Level</TableHead>
                        <TableHead className="text-slate-300 font-semibold">Questions</TableHead>
                        <TableHead className="text-slate-300 font-semibold">Score</TableHead>
                        <TableHead className="text-slate-300 font-semibold">Date</TableHead>
                        <TableHead className="text-slate-300 font-semibold">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sessions.map((session, index) => {
                        const { IconComponent, colorClass } = getDomainIcon(session.domain, index)
                        const score = calculateAverageScore(session.qaList)
                  
                        return (
                          <TableRow
                            key={session.id || index}
                            onClick={() => navigate(`session/${session.sessionId}`)}
                            className="border-navy-700 cursor-pointer hover:bg-navy-700/30 transition-colors duration-200"
                          >
                             <TableCell className="font-medium">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-navy-700/50 border border-navy-600">
                                  <IconComponent className={`h-4 w-4 ${colorClass}`} />
                                </div>
                                <span className="text-white">{session.domain || "General Programming"}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-xs">
                                {session.experienceLevel || "Intermediate"}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-slate-300">
                              {session.totalQuestions || session.qaList?.length || 0}
                            </TableCell>
                            <TableCell>
                              <Badge className={`${getScoreColor(score)} text-sm font-medium`}>{score}/10</Badge>
                            </TableCell>
                            <TableCell className="text-slate-300">{formatDate(session.createdAt)}</TableCell>
                            <TableCell>
                              {index === 0 ? (
                                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs">
                                  Recent
                                </Badge>
                              ) : (
                                <Badge variant="outline" className="border-navy-600 text-slate-400 text-xs">
                                  Completed
                                </Badge>
                              )}
                            </TableCell>
                          
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </TooltipProvider>
    </div>
  )
}

export default UserProfilePage
