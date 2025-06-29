"use client"

import { useState, useEffect, use } from "react"
import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import useUserStore from "@/store/useUserStore";
import interviewStore from "../../store/interviewStore"
import useResumeStore from "../../store/resumeStore"
import {
  Upload,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  Users,
  Target,
  Sparkles,
  LogIn,
  Shield,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function DomainInterviewSetupPage() {
  const { domain } = useParams()
  const [selectedFile, setSelectedFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate();

  // Authentication state
  const user = useUserStore((state) => state.user)
  const isAuthenticated = useUserStore((state) => state.isAuthenticated)
  const clearUser = useUserStore((state) => state.clearUser)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      domain: domain || "",
      experienceLevel: "Fresher",
      numberOfQuestions: 3,
      resume: null,
    },
  })

  const watchedValues = watch()
  const watchedResume = watch("resume"); // This watches the input field named "resume"


  // Check authentication on component mount
  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Authentication Required", {
        description: "Please log in to start your AI interview session.",
        action: {
          label: "Log In",
          onClick: () => {
            navigate('/login')
          },
        },
        duration: 5000,
        position: "top-right",
      })
    }
  }, [isAuthenticated])

  // Format domain name for display
  const formatDomainName = (domainParam) => {
    if (!domainParam) return "Interview"
    return domainParam
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const domainDisplayName = formatDomainName(domain)

  // Experience level options
  const experienceLevels = [
    { value: "fresher", label: "Fresher", description: "New to the field" },
    { value: "junior", label: "1-2 years", description: "Junior level experience" },
    { value: "mid", label: "3-5 years", description: "Mid-level experience" },
    { value: "senior", label: "5+ years", description: "Senior level experience" },
  ]

  // Handle file upload
  const handleFileChange = (event) => {
    if (!isAuthenticated) {
      toast.error("Login Required", {
        description: "Please log in to upload your resume.",
        action: {
          label: "Log In",
          onClick: () => navigate('/login'),
        },
        position: "top-right",
      })
      event.target.value = ""
      return
    }

    const file = event.target.files[0]

    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ]

      if (allowedTypes.includes(file.type)) {
        setSelectedFile(file)
        console.log(selectedFile);

        setValue("resume", file)
        toast.success("Resume Uploaded", {
          description: `${file.name} has been uploaded successfully.`,
          position: "top-right",
        })
      } else {
        toast.error("Invalid File Type", {
          description: "Please upload a PDF, DOC, or DOCX file.",
          position: "top-right",
        })
        event.target.value = ""
      }
    }
  }

  // Handle experience level change
  const handleExperienceLevelChange = (value) => {
    if (!isAuthenticated) {
      toast.error("Login Required", {
        description: "Please log in to configure your interview settings.",
        action: {
          label: "Log In",
          onClick: () => console.log("Navigate to login"),
        },
        position: "top-right",
      })
      return
    }
    setValue("experienceLevel", value, { shouldValidate: true })
  }

  // Handle form submission
  const onSubmit = async (data) => {
    // Check authentication before proceeding
    if (!isAuthenticated) {
      toast.error("Authentication Required", {
        description: "You must be logged in to start an interview session.",
        action: {
          label: "Log In Now",
          onClick: () => {
            // Navigate to login page
            navigate('/login')
          },
        },
        duration: 6000,
        position: "top-right",
      })
      return
    }

    setIsSubmitting(true)
    console.log(data.resume[0]);
    interviewStore.getState().setInterview({
      domain: data.domain,
      experienceLevel: data.experienceLevel,
      numberOfQuestions: data.numberOfQuestions,
    })

    useResumeStore.getState().setResume(data.resume[0])

    navigate("/guidelines");
  }

  // Get estimated time based on number of questions
  const getEstimatedTime = (questions) => {
    const timePerQuestion = 2.5 // minutes
    const totalMinutes = Math.round(questions * timePerQuestion)
    return `${totalMinutes} min`
  }

  return (
    <div className="min-h-screen mt-8 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-6">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300 border-0 shadow-sm"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Interview Setup
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight transition-colors duration-300">
              Start Your{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {domainDisplayName}
              </span>{" "}
              Interview
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
              Get ready for a personalized AI interview based on your domain, experience, and resume. Configure your
              session below to begin.
            </p>
          </div>

          {/* Authentication Status */}
          <div className="flex justify-center">
            {isAuthenticated ? (
              <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm">
                <Shield className="w-4 h-4" />
                <span>Authenticated as {user?.name || user?.email}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-4 py-2 rounded-full text-sm">
                <LogIn className="w-4 h-4" />
                <span>Please log in to continue</span>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <Target className="w-4 h-4 text-blue-500" />
              <span>Personalized Questions</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <Clock className="w-4 h-4 text-green-500" />
              <span>Real-time Feedback</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <Users className="w-4 h-4 text-purple-500" />
              <span>Audio-based Interview</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-xl mx-auto">
          <Card
            className={`bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-xl transition-all duration-300 ${!isAuthenticated ? "opacity-75 pointer-events-none" : ""
              }`}
          >
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Interview Configuration
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300">
                {isAuthenticated
                  ? "Customize your interview experience with the settings below"
                  : "Please log in to configure your interview settings"}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Domain Field (Read-only) */}
                <div className="space-y-2">
                  <Label htmlFor="domain" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Selected Domain
                  </Label>
                  <div className="relative">
                    <Input
                      id="domain"
                      value={domainDisplayName}
                      readOnly
                      className="bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 cursor-not-allowed"
                    />
                    <CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500" />
                  </div>
                </div>

                {/* Experience Level */}
                <div className="space-y-2">
                  <Label htmlFor="experienceLevel" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Experience Level <span className="text-red-500">*</span>
                  </Label>
                  <Select onValueChange={handleExperienceLevelChange} disabled={!isAuthenticated}>
                    <SelectTrigger className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600">
                      <SelectValue placeholder={isAuthenticated ? "Select your experience level" : "Login required"} />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          <div className="flex flex-col">
                            <span className="font-medium">{level.label}</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">{level.description}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.experienceLevel && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Please select your experience level
                    </p>
                  )}
                </div>

                {/* Number of Questions */}
                <div className="space-y-2">
                  <Label htmlFor="numberOfQuestions" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Number of Questions <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="numberOfQuestions"
                      type="number"
                      min="3"
                      max="23"
                      disabled={!isAuthenticated}
                      {...register("numberOfQuestions", {
                        required: "Number of questions is required",
                        min: { value: 3, message: "Minimum 3 questions required" },
                        max: { value: 23, message: "Maximum 23 questions allowed" },
                        valueAsNumber: true,
                      })}
                      className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600"
                    />
                    {watchedValues.numberOfQuestions >= 3 && watchedValues.numberOfQuestions <= 23 && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                        <Clock className="w-3 h-3" />
                        <span>~{getEstimatedTime(watchedValues.numberOfQuestions)}</span>
                      </div>
                    )}
                  </div>
                  {errors.numberOfQuestions && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.numberOfQuestions.message}
                    </p>
                  )}
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Choose between 5-23 questions (approximately 2.5 minutes per question)
                  </p>
                </div>

                {/* Resume Upload */}
                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Resume Upload <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      disabled={!isAuthenticated}
                      {...register("resume", { required: "Resume is required" })}
                    />
                    <Label
                      htmlFor="resume"
                      className={`flex items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg transition-colors bg-slate-50 dark:bg-slate-800/50 ${isAuthenticated
                          ? "cursor-pointer hover:border-slate-400 dark:hover:border-slate-500"
                          : "cursor-not-allowed opacity-50"
                        }`}
                    >
                      <div className="text-center space-y-2">
                        {watchedResume?.length > 0 ? (
                          <>
                            <FileText className="w-8 h-8 text-green-500 mx-auto" />
                            <div className="space-y-1">
                              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                {watchedResume[0]?.name}
                              </p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">
                                {(watchedResume[0]?.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <Upload className="w-8 h-8 text-slate-400 mx-auto" />
                            <div className="space-y-1">
                              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                {isAuthenticated ? "Click to upload resume" : "Login to upload resume"}
                              </p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">PDF, DOC, or DOCX (Max 10MB)</p>
                            </div>
                          </>
                        )}

                      </div>
                    </Label>
                  </div>
                  {errors.resume && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.resume.message}
                    </p>
                  )}
                </div>

                {/* Interview Preview */}
                {isAuthenticated &&
                  watchedValues.experienceLevel &&
                  watchedValues.numberOfQuestions >= 5 &&
                  selectedFile && (
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 space-y-3">
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Interview Preview
                      </h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-slate-600 dark:text-slate-400">Domain:</span>
                          <p className="font-medium text-slate-900 dark:text-slate-100">{domainDisplayName}</p>
                        </div>
                        <div>
                          <span className="text-slate-600 dark:text-slate-400">Experience:</span>
                          <p className="font-medium text-slate-900 dark:text-slate-100">
                            {experienceLevels.find((l) => l.value === watchedValues.experienceLevel)?.label}
                          </p>
                        </div>
                        <div>
                          <span className="text-slate-600 dark:text-slate-400">Questions:</span>
                          <p className="font-medium text-slate-900 dark:text-slate-100">
                            {watchedValues.numberOfQuestions}
                          </p>
                        </div>
                        <div>
                          <span className="text-slate-600 dark:text-slate-400">Duration:</span>
                          <p className="font-medium text-slate-900 dark:text-slate-100">
                            ~{getEstimatedTime(watchedValues.numberOfQuestions)}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting || !isAuthenticated}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {!isAuthenticated ? (
                    <div className="flex items-center gap-2">
                      <LogIn className="w-4 h-4" />
                      <span>Login Required</span>
                    </div>
                  ) : isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Starting Interview...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Start AI Interview</span>
                    </div>
                  )}
                </Button>

                {/* Help Text */}
                <div className="text-center space-y-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {isAuthenticated
                      ? "Your interview will be audio-based and tailored to your experience level and resume"
                      : "Please log in to access personalized interview features"}
                  </p>
                  <div className="flex justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      <span>Secure & Private</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      <span>Real-time Feedback</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      <span>Detailed Analysis</span>
                    </span>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Login Prompt for Unauthenticated Users */}
          {!isAuthenticated && (
            <Card className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0">
              <CardContent className="p-6 text-center">
                <LogIn className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Login Required</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Create an account or log in to access personalized AI interviews, save your progress, and get detailed
                  feedback.
                </p>
                <Button
                  onClick={() => navigate('/login')}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Log In Now
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
