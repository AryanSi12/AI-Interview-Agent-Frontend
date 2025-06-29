"use client"

import { useState, useRef } from "react"
import axios from "axios"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Upload,
  FileText,
  Loader2,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Eye,
  Trash2,
  Brain,
  Target,
  Award,
  TrendingUp,
} from "lucide-react"

const ResumeAnalysis = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [analysis, setAnalysis] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef(null)

  const allowedFileTypes = [".pdf", ".docx", ".txt"]
  const maxFileSize = 10 * 1024 * 1024 // 10MB

  const validateFile = (file) => {
    if (!file) {
      return "Please select a file"
    }

    const fileExtension = "." + file.name.split(".").pop().toLowerCase()
    if (!allowedFileTypes.includes(fileExtension)) {
      return `File type not supported. Please upload ${allowedFileTypes.join(", ")} files only.`
    }

    if (file.size > maxFileSize) {
      return "File size must be less than 10MB"
    }

    return null
  }

  const handleFileSelect = (file) => {
    const validationError = validateFile(file)
    if (validationError) {
      setError(validationError)
      return
    }

    setSelectedFile(file)
    setError(null)
    setAnalysis(null)
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0])
    }
  }

  const handleSubmit = async () => {
    if (!selectedFile) {
      setError("Please select a file first")
      return
    }

    try {
      setLoading(true)
      setError(null)
        console.log(selectedFile);
        
      const formData = new FormData()
      formData.append("file", selectedFile)

      const response = await axios.post("https://ai-interview-agent-backend-02vk.onrender.com/interview/getResumeAnalysis", formData,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      })
      console.log(response);
      
      setAnalysis(response.data)
    } catch (err) {
      console.error("Error analyzing resume:", err)
      setError(err.response?.data?.message || "Failed to analyze resume. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleRetry = () => {
    setError(null)
    setAnalysis(null)
    handleSubmit()
  }

  const handleReset = () => {
    setSelectedFile(null)
    setAnalysis(null)
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const getFileIcon = (filename) => {
    const extension = filename.split(".").pop().toLowerCase()
    switch (extension) {
      case "pdf":
        return <FileText className="h-5 w-5 text-red-500" />
      case "docx":
        return <FileText className="h-5 w-5 text-blue-500" />
      case "txt":
        return <FileText className="h-5 w-5 text-gray-500" />
      default:
        return <FileText className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Resume Analysis
          </h1>
          <p className="text-lg text-gray-300 dark:text-gray-400 max-w-2xl mx-auto">
            Upload your resume and get detailed AI-powered analysis with personalized feedback and improvement
            suggestions.
          </p>
        </div>

        {/* Upload Section */}
        <Card className="mb-8 bg-white/10 dark:bg-gray-800/50 border-gray-700 dark:border-gray-600 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white dark:text-gray-100 flex items-center gap-2">
              <Upload className="h-5 w-5 text-indigo-400" />
              Upload Resume
            </CardTitle>
            <CardDescription className="text-gray-300 dark:text-gray-400">
              Supported formats: PDF, DOCX, TXT (Max size: 10MB)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* File Upload Area */}
            <div
              className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
                dragActive
                  ? "border-indigo-400 bg-indigo-400/10"
                  : "border-gray-600 dark:border-gray-500 hover:border-indigo-400 hover:bg-indigo-400/5"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.txt"
                onChange={handleFileInputChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              <div className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <Upload className="h-8 w-8 text-indigo-400" />
                </div>
                <div>
                  <p className="text-lg font-medium text-white dark:text-gray-100 mb-2">
                    Drop your resume here, or{" "}
                    <span className="text-indigo-400 hover:text-indigo-300 cursor-pointer underline">browse files</span>
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-500">{allowedFileTypes.join(", ")} up to 10MB</p>
                </div>
              </div>
            </div>

            {/* Selected File Preview */}
            {selectedFile && (
              <Card className="bg-gray-800/50 dark:bg-gray-700/50 border-gray-600 dark:border-gray-500">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {getFileIcon(selectedFile.name)}
                      <div>
                        <p className="font-medium text-white dark:text-gray-100">{selectedFile.name}</p>
                        <p className="text-sm text-gray-400 dark:text-gray-500">{formatFileSize(selectedFile.size)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Ready
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleReset}
                        className="text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Error Alert */}
            {error && (
              <Alert className="bg-red-500/10 border-red-500/30 text-red-400">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <Button
                onClick={handleSubmit}
                disabled={!selectedFile || loading}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Brain className="h-4 w-4 mr-2" />
                    Analyze Resume
                  </>
                )}
              </Button>

              {error && (
                <Button
                  onClick={handleRetry}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Retry
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Analysis Results */}
        {analysis && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white dark:text-gray-100 mb-2">Analysis Complete</h2>
              <p className="text-gray-300 dark:text-gray-400">Here's your detailed resume analysis</p>
            </div>

            {/* Analysis Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white dark:text-gray-100 mb-2">Strengths</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-400">Key highlights identified</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white dark:text-gray-100 mb-2">Improvements</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-400">Areas to enhance</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white dark:text-gray-100 mb-2">Recommendations</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-400">Expert suggestions</p>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Analysis */}
            <Card className="bg-white/10 dark:bg-gray-800/50 border-gray-700 dark:border-gray-600 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white dark:text-gray-100 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-indigo-400" />
                  Detailed Analysis
                </CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-400">
                  Comprehensive review of your resume
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96 w-full rounded-lg border border-gray-600 dark:border-gray-500">
                  <div className="p-6 space-y-4">
                    {typeof analysis === "string" ? (
                      <div className="prose prose-invert max-w-none">
                        <p className="text-gray-200 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                          {analysis}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {analysis.strengths && (
                          <div>
                            <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Strengths
                            </h3>
                            <p className="text-gray-200 dark:text-gray-300 leading-relaxed">{analysis.strengths}</p>
                          </div>
                        )}

                        {analysis.improvements && (
                          <div>
                            <Separator className="bg-gray-600 dark:bg-gray-500" />
                            <h3 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                              <TrendingUp className="h-5 w-5" />
                              Areas for Improvement
                            </h3>
                            <p className="text-gray-200 dark:text-gray-300 leading-relaxed">{analysis.improvements}</p>
                          </div>
                        )}

                        {analysis.recommendations && (
                          <div>
                            <Separator className="bg-gray-600 dark:bg-gray-500" />
                            <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                              <Award className="h-5 w-5" />
                              Recommendations
                            </h3>
                            <p className="text-gray-200 dark:text-gray-300 leading-relaxed">
                              {analysis.recommendations}
                            </p>
                          </div>
                        )}

                        {!analysis.strengths && !analysis.improvements && !analysis.recommendations && (
                          <p className="text-gray-200 dark:text-gray-300 leading-relaxed">
                            {JSON.stringify(analysis, null, 2)}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
              >
                <Upload className="h-4 w-4 mr-2" />
                Analyze Another Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResumeAnalysis
