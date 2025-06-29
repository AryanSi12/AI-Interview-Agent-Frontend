"use client"

import { useState } from "react"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mic, AlertTriangle, Clock, FileText, Volume2, RotateCcw } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { useNavigate } from "react-router-dom"

export default function InterviewGuidelinesPage() {
  const [isOpen, setIsOpen] = useState(true)
  const [showFinalConfirmation, setShowFinalConfirmation] = useState(false)
  const [hasReadGuidelines, setHasReadGuidelines] = useState(false)

  const navigate = useNavigate()

  const handleCancel = () => {
    setIsOpen(false)
    console.log("Interview cancelled")
  }

  const handleStartInterview = () => {
    setIsOpen(false)
    setShowFinalConfirmation(true)
  }

  const handleFinalConfirmation = () => {
    setShowFinalConfirmation(false)
    navigate("/ai-interview")
  }

  const handleFinalCancel = () => {
    setShowFinalConfirmation(false)
    setIsOpen(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Guidelines Dialog */}
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-2 sm:mx-4">
          <AlertDialogHeader className="space-y-3">
            <AlertDialogTitle className="flex items-center gap-2 text-xl font-bold">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              Interview Guidelines
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p className="text-foreground font-medium">
                  Please read and acknowledge the following guidelines before starting your interview:
                </p>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">
                      After each question, you'll have{" "}
                      <Badge variant="secondary" className="mx-1">
                        10 seconds
                      </Badge>{" "}
                      to think
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">
                      If any{" "}
                      <span className="font-semibold text-red-600 dark:text-red-400">
                        rude or inappropriate answer
                      </span>{" "}
                      is given, the interview ends and your rating drops by{" "}
                      <Badge variant="destructive" className="mx-1">
                        100 points
                      </Badge>
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">
                      Performance is judged on{" "}
                      <span className="font-semibold">depth, clarity, communication, and confidence</span>
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Volume2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">
                      Make sure you're in a <span className="font-semibold">quiet environment</span>
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mic className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">
                      Have your <span className="font-semibold">resume and microphone ready</span>
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <RotateCcw className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">
                      <span className="font-semibold text-amber-600 dark:text-amber-400">Do not reload or exit</span>{" "}
                      the tab during the session
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-xs text-center text-muted-foreground">
                    By clicking "Start Interview", you acknowledge that you have read and understood these guidelines.
                  </p>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="flex-col gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="guidelines-checkbox" checked={hasReadGuidelines} onCheckedChange={setHasReadGuidelines} />
              <label
                htmlFor="guidelines-checkbox"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                I have read and understood all the interview guidelines
              </label>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={handleCancel} className="w-full sm:w-auto">
                Cancel
              </Button>
              <Button
                onClick={handleStartInterview}
                disabled={!hasReadGuidelines}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Start Interview
              </Button>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Final Confirmation Dialog */}
      <AlertDialog open={showFinalConfirmation} onOpenChange={setShowFinalConfirmation}>
        <AlertDialogContent className="w-full max-w-sm sm:max-w-md mx-2 sm:mx-4">
          <AlertDialogHeader className="space-y-3 text-center">
            <AlertDialogTitle className="flex items-center justify-center gap-2 text-xl font-bold text-amber-600 dark:text-amber-400">
              <AlertTriangle className="h-6 w-6" />
              Final Confirmation
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="text-center space-y-3">
                <p className="text-lg font-medium text-foreground">
                  Are you absolutely sure you want to start the interview?
                </p>
                <p className="text-sm text-muted-foreground">
                  Once started, you cannot go back or restart the session.
                </p>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    Remember: You'll have 10 seconds to think after each question before responding.
                  </p>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={handleFinalCancel} className="w-full sm:w-auto">
              Go Back
            </Button>
            <Button
              onClick={handleFinalConfirmation}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white"
            >
              Yes, Start Interview
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
