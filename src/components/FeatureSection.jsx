import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
} from "@/components/ui/card"
import { Mic, FileText, Star, Brain } from "lucide-react"
import { Link } from "react-router-dom"

const features = [
    {
        icon: Mic,
        title: "AI-Based Interview",
        description:
            "Voice-enabled, domain-specific mock interviews that adapt to your experience level and target role.",
        benefit: "Practice realistic conversations with intelligent AI feedback",
        gradient: "from-blue-500 to-cyan-500",
        path: "/How-to-Interview",
    },
    {
        icon: FileText,
        title: "Resume Analysis",
        description:
            "Comprehensive resume review with personalized feedback and optimization suggestions for your target role.",
        benefit: "Get actionable insights to improve your resume",
        gradient: "from-green-500 to-emerald-500",
        path: "/resume-analysis",
    },
    {
        icon: Star,
        title: "Performance Ratings",
        description:
            "Detailed scoring system that tracks your interview performance across technical and behavioral dimensions.",
        benefit: "Monitor your progress and identify improvement areas",
        gradient: "from-purple-500 to-pink-500",
        path: "/performance-ratings",
    },
    {
        icon: Brain,
        title: "Detailed Feedback",
        description:
            "Question-level analysis with specific suggestions, best practices, and improvement strategies.",
        benefit: "Learn from every practice session with expert guidance",
        gradient: "from-orange-500 to-red-500",
        path: "/feedback-explanation",
    },
]

function FeaturesSection() {
    return (
        <section
            id="features"
            className="container py-24 bg-slate-50/50 dark:bg-slate-900/50 transition-colors"
        >
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                    Everything You Need to
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {" "}
                        Succeed
                    </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    Our comprehensive AI-powered platform provides all the tools you need
                    to excel in technical interviews
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                        <Link to={feature.path} key={index} className="block">
                            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                <CardHeader className="pb-4">
                                    <div
                                        className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg text-slate-900 dark:text-slate-100">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <CardDescription className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                        {feature.description}
                                    </CardDescription>
                                    <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                        {feature.benefit}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>

                    )
                })}
            </div>
        </section>
    )
}
export default FeaturesSection