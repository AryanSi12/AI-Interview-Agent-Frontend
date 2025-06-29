import { ArrowRight, Upload, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button"; 
import { Card } from "@/components/ui/card"; 
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  return (

    <section className="container py-24">
      <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border-indigo-200 dark:border-indigo-800 shadow-2xl transition-colors">
        <div className="p-12 text-center space-y-8">
          {/* Sparkle Title */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                Ready to Ace Your Next Interview?
              </span>
              <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100">
              Start Your Interview Practice
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Now!
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers who have successfully landed their dream jobs with our AI-powered interview
              preparation platform.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate('/domains')}
              className="text-lg px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 group transition-all text-white"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/upload')}
              className="text-lg px-8 py-6 border-slate-300 dark:border-slate-600 group transition-all"
            >
              <Upload className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Upload Resume
            </Button>
          </div>

          {/* Feature Badges */}
          <div className="flex items-center justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Start in 30 seconds</span>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default CTASection;
