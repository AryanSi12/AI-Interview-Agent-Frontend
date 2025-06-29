"use client"

import { useState } from "react"
import { get, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { Eye, EyeOff, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import axios from "axios"
import useUserStore from "@/store/useUserStore"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const jsonForLogin = {
        username: data.username,
        password: data.password,
      }

      const loginResponse = await axios.post("http://localhost:8097/Public/LoginUser", jsonForLogin, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })

      const getCurrUser = await axios.get("http://localhost:8097/User/getCurrUser", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })

      useUserStore.getState().setUser({
        userId: getCurrUser.data.userId,
        image: getCurrUser.data.userImage || null,
        email: getCurrUser.data.email,
        ratingHistory: getCurrUser.data.ratingHistory,
        currentRating: getCurrUser.data.currentRating,
        createdAt: getCurrUser.data.createdAt,
        updatedAt: getCurrUser.data.updatedAt,
        username: getCurrUser.data.username,
        expiresAt: Date.now() + 60 * 50 * 1000,
      })

      toast.success("Logged in successfully!", { duration: 3000 })
      navigate("/")
    } catch (error) {
      console.error("Login failed:", error)
      toast.error("Incorrect username or password")
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-10 py-10 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
              <Mic className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI Interviewer
            </span>
          </div>
        </div>

        <Card className="shadow-2xl border border-white/10 dark:border-slate-700/50 bg-white/60 dark:bg-slate-800/90 backdrop-blur-md">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-bold text-center text-slate-900 dark:text-slate-100">
              Welcome back
            </CardTitle>
            <CardDescription className="text-center text-slate-600 dark:text-slate-400">
              Log in to continue your AI-powered interview journey
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Username Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="username"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  className="h-11 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400 transition-colors"
                  {...register("username", { required: "Username is required" })}
                />
                {errors.username && (
                  <p className="text-sm text-red-500 dark:text-red-400">{errors.username.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="h-11 pr-10 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400 transition-colors"
                    {...register("password", { required: "Password is required" })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500 dark:text-red-400">{errors.password.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Logging In...
                  </div>
                ) : (
                  "Log In"
                )}
              </Button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
