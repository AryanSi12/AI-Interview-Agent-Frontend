import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button"; 
import { Card } from "@/components/ui/card"; 

const CTABanner = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 border-purple-500/30 backdrop-blur-sm relative overflow-hidden">
          {/* Soft background gradients & glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
          </div>

          {/* Content */}
          <div className="relative p-12 text-center space-y-8">
            <div className="space-y-4">
              {/* Sparkle banner */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-purple-400" />
                <span className="text-purple-300 font-semibold">
                  Ready to Ace Your Next Interview?
                </span>
                <Sparkles className="h-6 w-6 text-cyan-400" />
              </div>

              {/* Title */}
              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Start Your AI Interview
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Prep Journey Now!
                </span>
              </h2>

              {/* Description */}
              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Join thousands of developers who have successfully landed their dream jobs with our AI-powered
                interview preparation platform.
              </p>
            </div>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
              >
                Start Free Trial Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-6 text-lg font-semibold rounded-xl"
              >
                View Pricing Plans
              </Button>
            </div>

            {/* Small feature highlights */}
            <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span>7-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTABanner;
