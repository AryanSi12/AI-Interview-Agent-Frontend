"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Mic, Volume2, Loader2, MicOff, VolumeX, SkipForward, RotateCcw, Info, Trash2 } from "lucide-react"
import axios from "axios"
import interviewStore from "../../store/interviewStore"
import useResumeStore from "../../store/resumeStore"
import { useNavigate } from "react-router-dom"
import { set } from "react-hook-form"

export default function AIInterviewPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [transcription, setTranscription] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingQuestion, setIsLoadingQuestion] = useState(true)
  const [speechSupported, setSpeechSupported] = useState(true)
  const [error, setError] = useState("")
  const [interviewQuestion, setInterviewQuestion] = useState("")
  const [showNavigationAlert, setShowNavigationAlert] = useState(false)
  const [pendingNavigation, setPendingNavigation] = useState(null)
  const interview = interviewStore((state) => state.interview)
  const resume = useResumeStore((state) => state.resume)
  const hasStartedInterview = useRef(false)
  const shouldKeepListeningRef = useRef(false);

  const recognitionRef = useRef(null)
  const synthRef = useRef(null)
  const interviewDetails = useRef(null)
  const navigate = useNavigate()

  // Navigation protection
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault()
      e.returnValue = ""
      return ""
    }

    const handlePopState = (e) => {
      e.preventDefault()
      setPendingNavigation("back")
      setShowNavigationAlert(true)
      window.history.pushState(null, "", window.location.href)
    }

    // Add beforeunload listener for page refresh/close
    window.addEventListener("beforeunload", handleBeforeUnload)

    // Add popstate listener for back button
    window.addEventListener("popstate", handlePopState)

    // Push initial state to handle back button
    window.history.pushState(null, "", window.location.href)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
      window.removeEventListener("popstate", handlePopState)
    }
  }, [])

  const handleNavigationConfirm = async () => {
    setShowNavigationAlert(false)
    try{
      const response = await axios.delete(`https://ai-interview-agent-backend-02vk.onrender.com/interview/deleteSessionById/${interviewDetails.current.sessionId}`,
        {withCredentials: true}
      )
      console.log("Interview ended successfully:", response.data)
      navigate("/")

    } 
    catch(err){
      throw new Error("Error while navigating back")
    }
    setPendingNavigation(null)
  }

  const handleNavigationCancel = () => {
    setShowNavigationAlert(false)
    setPendingNavigation(null)
  }

  useEffect(() => {
  if (typeof window !== "undefined") {
    synthRef.current = window.speechSynthesis;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSpeechSupported(false);
      setError("Speech recognition is not supported in this browser.");
      return;
    }

    recognitionRef.current = new SpeechRecognition();

    // ❌ Avoid `continuous: true` on mobile — leads to duplication
    recognitionRef.current.continuous = false;

    // ✅ Only final results to avoid noisy interim updates
    recognitionRef.current.interimResults = false;

    recognitionRef.current.lang = "en-IN";

    let lastFinalTranscript = "";

    recognitionRef.current.onresult = (event) => {
      const result = event.results[event.resultIndex];
      if (result.isFinal) {
        const transcript = result[0].transcript.trim();

        // ✅ Avoid duplicate transcripts (very common on mobile)
        if (transcript !== lastFinalTranscript) {
          setTranscription((prev) => prev + transcript + " ");
          lastFinalTranscript = transcript;
        }
      }
    };

    recognitionRef.current.onerror = (event) => {
      setError(`Speech recognition error: ${event.error}`);
      setIsListening(false);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
      if (shouldKeepListeningRef.current) {
    recognitionRef.current?.start();
    setIsListening(true);
  }
      // Optional: restart if still intended to listen
      // recognitionRef.current.start();
    };
  }

  return () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    if (synthRef.current) {
      synthRef.current.cancel();
    }
  };
}, []);


  // Auto-read question when it changes
  useEffect(() => {
    if (synthRef.current && currentQuestionIndex >= 0 && interviewQuestion && !isLoadingQuestion) {
      // Small delay to ensure the question is rendered and any previous speech is stopped
      const timer = setTimeout(() => {
        readQuestionAloud()
      }, 800)

      return () => clearTimeout(timer)
    }
  }, [currentQuestionIndex, interviewQuestion, isLoadingQuestion])

  const readQuestionAloud = () => {
    if (!synthRef.current || !interviewQuestion) return

    // Cancel any ongoing speech
    synthRef.current.cancel()
    setIsSpeaking(true)

    const utterance = new SpeechSynthesisUtterance(interviewQuestion)
    utterance.rate = 0.9
    utterance.pitch = 1
    utterance.volume = 0.8

    utterance.onend = () => {
      setIsSpeaking(false)
    }

    utterance.onerror = () => {
      setIsSpeaking(false)
      setError("Text-to-speech error occurred")
    }

    synthRef.current.speak(utterance)
  }

  useEffect(() => {
    const fetchIntroQuestion = async () => {
      if (hasStartedInterview.current) return
      hasStartedInterview.current = true

      if (currentQuestionIndex === 0) {
        setIsLoadingQuestion(true)

        const formData = new FormData()
        formData.append("domain", interview.domain)
        formData.append("experienceLevel", interview.experienceLevel)
        formData.append("questions", interview.numberOfQuestions)
        formData.append("resume", resume)
        
          setCurrentQuestionIndex(1)
        try {
          const response = await axios.post("https://ai-interview-agent-backend-02vk.onrender.com/interview/startInterview", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }) 
          console.log("Interview question response:", response.data)
          setInterviewQuestion(response.data.nextQuestion)
          interviewDetails.current = response.data
          console.log("Interview details:", interviewDetails.current);
          
        } catch (err) {
          console.error("Failed to fetch questions:", err)
          setError("Failed to load interview question. Please try again.")
        } finally {
          setIsLoadingQuestion(false)
        }
      }
    }

    fetchIntroQuestion()
  }, [])

  const startListening = () => {
    if (!recognitionRef.current || !speechSupported) return

    setError("")
    setIsListening(true)
    setTranscription("")

    try {
      shouldKeepListeningRef.current = true;
      recognitionRef.current.start()
    } catch (err) {
      setError("Could not start speech recognition")
      setIsListening(false)
    }
  }

  const stopListening = () => {
    if (recognitionRef.current) {
      shouldKeepListeningRef.current = false;
      recognitionRef.current.stop()
    }
    setIsListening(false)
  }

  const nextQuestion = async () => {
    if (currentQuestionIndex <= interview.numberOfQuestions+1) {
      setIsLoadingQuestion(true)
      setCurrentQuestionIndex((prev) => prev + 1)
      setTranscription("")
      setError("")

      // Simulate fetching next question - replace with actual API call
      try {
       const response = await axios.post(
          `https://ai-interview-agent-backend-02vk.onrender.com//interview/handleAnswer/${interviewDetails.current.sessionId}`,
          {
            answer: transcription,
          },
          { withCredentials: true }
        )
        const { nextQuestion, scoreFeedback } = response.data

      // 👇 Check if the interview was terminated for inappropriate response
      if (!nextQuestion && scoreFeedback?.includes("flagged as inappropriate")) {
        alert(
          "❌ Your response was flagged as inappropriate. The interview has been terminated.\n\nPlease maintain professional communication in future sessions."
        )
        navigate("/") // Redirect to home
        return
      }
        
        setTimeout(() => {
          setInterviewQuestion(response.data.nextQuestion)
          setIsLoadingQuestion(false)
        }, 2000)
      } catch (err) {
        setError("Failed to load next question. Please try again.")
        setIsLoadingQuestion(false)
      }
    }
  }

  const resetInterview = () => {
    setCurrentQuestionIndex(0)
    setTranscription("")
    setError("")
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
    if (synthRef.current) {
      synthRef.current.cancel()
    }
    setIsListening(false)
    setIsSpeaking(false)
  }

  const clearCurrentAnswer = () => {
    setTranscription("")
    setError("")
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
    setIsListening(false)
  }

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel()
      setIsSpeaking(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full p-4 flex justify-between items-center border-b border-slate-700 bg-slate-800/50">
          <h1 className="text-2xl font-bold text-white">AI Interview Assistant</h1>
          <div className="text-xs text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">🎤 Auto-Read Enabled</div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex justify-center items-center p-4">
          <div className="w-full max-w-4xl space-y-6">
            {/* Progress Indicator */}
            <div className="text-center">
              <p className="text-sm text-slate-400 mb-2">
                Question {currentQuestionIndex} of {interview.numberOfQuestions+1}
              </p>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex - 1) / interview.numberOfQuestions) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <Card className="rounded-2xl shadow-lg bg-slate-800 border-slate-700 hover:shadow-xl hover:shadow-purple-500/10 hover:border-slate-600 transition-all duration-300 hover:scale-[1.02]">
              <CardHeader className="text-center">
                <CardTitle className="text-xl md:text-2xl text-white">Current Question</CardTitle>
                <CardDescription className="text-slate-400">
                  {isLoadingQuestion
                    ? "Loading your question..."
                    : isSpeaking
                      ? "🔊 Reading question aloud..."
                      : "Listen carefully and provide your best answer"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50">
                  {isLoadingQuestion ? (
                    <div className="flex items-center justify-center py-8">
                      <div className="text-center space-y-4">
                        <Loader2 className="w-8 h-8 animate-spin mx-auto text-purple-500" />
                        <p className="text-lg text-slate-300">Preparing your interview question...</p>
                        <p className="text-sm text-slate-400">This may take a few moments</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-lg leading-relaxed text-center text-slate-100">{interviewQuestion}</p>
                  )}
                </div>

                {/* Audio Controls */}
                {!isLoadingQuestion && (
                  <div className="flex justify-center gap-2">
                    <Button
                      onClick={readQuestionAloud}
                      disabled={isSpeaking}
                      variant="outline"
                      size="sm"
                      className="border-slate-600 bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white transition-all duration-200"
                    >
                      {isSpeaking ? (
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      ) : (
                        <Volume2 className="w-4 h-4 mr-2" />
                      )}
                      {isSpeaking ? "Speaking..." : "Repeat Question"}
                    </Button>

                    {isSpeaking && (
                      <Button
                        onClick={stopSpeaking}
                        variant="outline"
                        size="sm"
                        className="border-slate-600 bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white transition-all duration-200"
                      >
                        <VolumeX className="w-4 h-4 mr-2" />
                        Stop Reading
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Answer Section */}
            <Card className="rounded-2xl shadow-lg bg-slate-800 border-slate-700 hover:shadow-xl hover:shadow-purple-500/10 hover:border-slate-600 transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Mic className="w-5 h-5" />
                  Your Answer
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Click "Start Answering" to begin voice recording
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Voice Control Button */}
                <div className="flex justify-center">
                  {!isListening ? (
                    <Button
                      onClick={startListening}
                      disabled={!speechSupported || isSpeaking || isLoadingQuestion}
                      size="lg"
                      className="rounded-full px-8 bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <Mic className="w-5 h-5 mr-2" />
                      Start Answering
                    </Button>
                  ) : (
                    <Button
                      onClick={stopListening}
                      variant="destructive"
                      size="lg"
                      className="rounded-full px-8 shadow-lg hover:shadow-red-500/25 transition-all duration-200 hover:scale-105"
                    >
                      <MicOff className="w-5 h-5 mr-2" />
                      Stop Recording
                    </Button>
                  )}
                </div>

                {/* Listening Indicator */}
                {isListening && (
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    Listening... Speak clearly into your microphone
                  </div>
                )}

                {/* Transcription Display */}
                <Textarea
                  value={transcription}
                  onChange={(e) => setTranscription(e.target.value)}
                  placeholder="Your answer will appear here as you speak..."
                  className="min-h-[200px] resize-none bg-slate-700 border-slate-600 text-slate-100 placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500/20"
                  disabled={isListening}
                />

                {/* Error Display */}
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation Controls */}
            <div className="flex justify-center gap-4">
              <Button
                onClick={clearCurrentAnswer}
                variant="outline"
                className="rounded-full border-slate-600 bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white transition-all duration-200 hover:scale-105"
                disabled={isLoadingQuestion}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Answer
              </Button>

              
              <Button
                onClick={nextQuestion}
                disabled={currentQuestionIndex >= interview.numberOfQuestions+2 || isLoadingQuestion}
                className="rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoadingQuestion ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    Next Question
                    <SkipForward className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>

            {/* Completion Message */}
            {currentQuestionIndex >= interview.numberOfQuestions+1 && !isLoadingQuestion && (
              <Card className="rounded-2xl border-green-500/50 bg-green-500/10 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <p className="text-green-400 font-medium">
                    🎉 Congratulations! You've completed all interview questions.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </main>

        {/* Instructions Footer */}
        <footer className="w-full p-6 border-t border-slate-700 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-white">
                  <Info className="w-5 h-5 text-blue-400" />
                  Quick Instructions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-300">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white flex items-center gap-2">🎤 Voice Features</h4>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Questions are automatically read aloud when you move to the next question</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Click "Repeat Question" to hear the current question again</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Ensure your microphone is enabled and working properly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Speak clearly and at a moderate pace for best transcription</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white flex items-center gap-2">📝 Interview Tips</h4>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Take your time to think before answering each question</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Use specific examples from your experience when possible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>You can edit your transcribed answer manually if needed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Use "Clear Answer" to re-record without losing progress</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-600">
                  <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Auto-read enabled</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Voice recognition active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Progress auto-saved</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </footer>

        {/* Navigation Alert Dialog */}
        <AlertDialog open={showNavigationAlert} onOpenChange={setShowNavigationAlert}>
          <AlertDialogContent className="bg-slate-800 border-slate-700">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white">End Interview Session?</AlertDialogTitle>
              <AlertDialogDescription className="text-slate-300">
                You are about to leave the interview. Your current progress will be lost. Do you want to end the
                interview and return to the home page?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                onClick={handleNavigationCancel}
                className="border-slate-600 bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white"
              >
                Continue Interview
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleNavigationConfirm} className="bg-red-600 hover:bg-red-700 text-white">
                End Interview
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}
