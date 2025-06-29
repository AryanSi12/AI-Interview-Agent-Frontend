import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Brain, TrendingUp, Users, Lightbulb, Target } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resume Review Tool",
    description:
      "AI analyzes your resume to identify strengths and areas for improvement, creating personalized interview questions.",
    color: "from-blue-500 to-cyan-500",
    badge: "Smart Analysis",
  },
  {
    icon: Brain,
    title: "Domain-based AI Interview Simulation",
    description:
      "Practice with realistic interview scenarios tailored to your specific field - Frontend, Backend, ML, and more.",
    color: "from-purple-500 to-pink-500",
    badge: "Realistic Practice",
  },
  {
    icon: TrendingUp,
    title: "Personalized Feedback & Progress Tracking",
    description:
      "Get detailed feedback on your responses and track your improvement over time with comprehensive analytics.",
    color: "from-green-500 to-emerald-500",
    badge: "Track Growth",
  },
  {
    icon: Users,
    title: "Mock HR + Technical Interviews",
    description:
      "Experience both behavioral and technical interview formats to prepare for every aspect of the hiring process.",
    color: "from-orange-500 to-red-500",
    badge: "Complete Prep",
  },
  {
    icon: Lightbulb,
    title: "AI-generated Insights",
    description:
      "Receive actionable insights and recommendations based on your performance patterns and industry standards.",
    color: "from-teal-500 to-blue-500",
    badge: "Smart Insights",
  },
  {
    icon: Target,
    title: "Company-Specific Preparation",
    description:
      "Prepare for specific companies with tailored questions and insights based on their interview patterns.",
    color: "from-indigo-500 to-purple-500",
    badge: "Targeted Prep",
  },
];

const FeatureHighlights = () => {
  return (
    <section id="features" className="px-6 py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border-purple-500/30 mb-4">
            Powerful Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Succeed in Interviews
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our AI-powered platform provides comprehensive interview preparation tools designed to boost your confidence
            and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;