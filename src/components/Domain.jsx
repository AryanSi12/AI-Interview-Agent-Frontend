
import {
  Code,
  Server,
  Brain,
  Database,
  Layers,
  BarChart3,
  Smartphone,
  Shield,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button"; 
import { Card , CardContent } from "@/components/ui/card"; 
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const domains = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "React, Vue, Angular, HTML/CSS, JavaScript",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    interviews: "2.5k+",
    difficulty: "Beginner to Expert",
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Node.js, Python, Java, API design, Microservices",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    interviews: "3.2k+",
    difficulty: "Intermediate to Expert",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "ML algorithms, data science, Python, TensorFlow",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    interviews: "1.8k+",
    difficulty: "Advanced",
  },
  {
    id: "data-structures",
    title: "Data Structures & Algorithms",
    description: "Arrays, trees, graphs, sorting, dynamic programming",
    icon: Database,
    color: "from-orange-500 to-red-500",
    interviews: "4.1k+",
    difficulty: "All Levels",
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Scalability, architecture, distributed systems",
    icon: Layers,
    color: "from-indigo-500 to-purple-500",
    interviews: "1.5k+",
    difficulty: "Senior Level",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "SQL, data visualization, business intelligence",
    icon: BarChart3,
    color: "from-teal-500 to-blue-500",
    interviews: "2.1k+",
    difficulty: "Beginner to Advanced",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "React Native, Flutter, iOS, Android",
    icon: Smartphone,
    color: "from-pink-500 to-rose-500",
    interviews: "1.3k+",
    difficulty: "Intermediate",
  },
  {
    id: "security",
    title: "Cybersecurity",
    description: "Security protocols, penetration testing, encryption",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    interviews: "900+",
    difficulty: "Advanced",
  },
];

const DomainSelection = () => {
  return (
    <section id="domains" className="px-6 py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border-purple-500/30 mb-4">
            Choose Your Path
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Practice by{" "}
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Domain
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Select your area of expertise and start practicing with AI-powered
            interviews tailored to your domain.
          </p>
        </div>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <Card
                key={domain.id}
                className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <Link to = {`/takeInterview/${domain.id}`}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs">
                        {domain.interviews}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors text-lg">
                        {domain.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {domain.description}
                      </p>
                      <div className="text-xs text-slate-500">
                        {domain.difficulty}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full bg-slate-700 hover:bg-slate-600 text-white border-slate-600 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-600 transition-all duration-300 text-sm"
                    >
                      Start Practice
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainSelection;
