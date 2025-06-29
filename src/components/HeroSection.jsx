import { Play, ArrowRight, Sparkles, Mic, Upload } from "lucide-react";
import { Button } from "@/components/ui/button"; 
import { Card } from "@/components/ui/card"; 
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="container sm:px-12 py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="w-fit bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered Interview Preparation
          </Badge>

          {/* Heading + Description */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Crack Every Interview with
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI-Powered Preparation
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Realistic mock interviews, intelligent resume review, and comprehensive performance feedback. Master your
              interview skills with personalized AI coaching.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => {navigate('/domains')} }
              className="text-lg px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 group transition-all text-white"
            >
              Start Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
          </div>

          {/* Feature Points */}
          <div className="flex items-center gap-8 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>50,000+ interviews completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <span>98% success rate</span>
            </div>
          </div>

          {/* Upload Resume */}
          <div className="pt-4">
            <Button
              variant="outline"
              onClick={() => {navigate('/upload')}}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-dashed border-2 border-indigo-300 dark:border-indigo-600 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all group"
            >
              <Upload className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Upload Resume to Get Started
            </Button>
          </div>
        </div>

        {/* Right: AI Interview Mockup */}
        <div className="hidden lg:block">
          <Card className="p-8 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950 border-slate-200 dark:border-slate-700 shadow-2xl transition-colors">
            <div className="space-y-6">
              {/* Interviewer Header */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100">AI Interviewer</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Ready to start your interview</div>
                </div>
              </div>

              {/* AI Question */}
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-700 transition-colors">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">AI Question:</div>
                  <div className="text-sm text-slate-700 dark:text-slate-300">
                    "Can you walk me through your experience with React and explain how you've implemented state
                    management in your recent projects?"
                  </div>
                </div>

                {/* Your Response */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800 transition-colors">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">Your Response:</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Listening...</div>
                  </div>
                </div>

                {/* Analyzing Animation */}
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-1 h-4 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      ></div>
                    ))}
                  </div>
                  <span>AI analyzing your response...</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
