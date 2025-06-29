"use client"

import {
  Monitor,
  Server,
  Binary,
  Network,
  GitBranch,
  Database,
  Brain,
  Cloud,
  Shield,
  Smartphone,
  TestTube,
  Coffee,
  Code2,
  Layers,
  Hash,
  Apple,
  Search,
  Filter,
  Clock,
  Users,
  TrendingUp,
  ChevronRight,
  Target,
  HelpCircle,
  ChevronDown,
  Lightbulb,
  CheckCircle2,
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function DomainSelectionPage() {
    const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [openFaq, setOpenFaq] = useState(null)

  const domains = [
    {
      icon: Monitor,
      title: "Frontend Development",
      description: "Test your skills in React, Vue, Angular, HTML, CSS, and modern frontend frameworks.",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
      badge: "Popular",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      category: "development",
      difficulty: "Intermediate",
      questions: 25,
      avgTime: "45 min",
      participants: "12.5k",
      successRate: "87%",
      technologies: ["React", "Vue", "Angular", "HTML", "CSS", "JavaScript"],
      path: "/takeInterview/frontend",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Evaluate your knowledge of APIs, databases, server architecture, and backend technologies.",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      hoverColor: "hover:bg-green-100 dark:hover:bg-green-900/30",
      badge: "Popular",
      badgeColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      category: "development",
      difficulty: "Intermediate",
      questions: 30,
      avgTime: "50 min",
      participants: "10.8k",
      successRate: "82%",
      technologies: ["Node.js", "Express", "APIs", "Databases", "Microservices"],
    path: "/takeInterview/backend",
    },
    {
      icon: Binary,
      title: "Data Structures & Algorithms",
      description: "Challenge yourself with coding problems, algorithmic thinking, and optimization techniques.",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      hoverColor: "hover:bg-purple-100 dark:hover:bg-purple-900/30",
      badge: "Core",
      badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
      category: "algorithms",
      difficulty: "Advanced",
      questions: 35,
      avgTime: "60 min",
      participants: "15.2k",
      successRate: "74%",
      technologies: ["Arrays", "Trees", "Graphs", "Dynamic Programming", "Sorting"],
      path: "/takeInterview/dataStructuresAlgorithms",
        
    },
    {
      icon: Network,
      title: "System Design",
      description: "Design scalable systems, discuss architecture patterns, and solve complex design problems.",
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      hoverColor: "hover:bg-orange-100 dark:hover:bg-orange-900/30",
      badge: "Advanced",
      badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
      category: "architecture",
      difficulty: "Expert",
      questions: 20,
      avgTime: "75 min",
      participants: "8.3k",
      successRate: "68%",
      technologies: ["Scalability", "Load Balancing", "Caching", "Databases", "Microservices"],
      path: "/takeInterview/systemDesign",
    },
    {
      icon: GitBranch,
      title: "DevOps",
      description: "Demonstrate expertise in CI/CD, containerization, infrastructure, and deployment strategies.",
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      hoverColor: "hover:bg-indigo-100 dark:hover:bg-indigo-900/30",
      category: "operations",
      difficulty: "Intermediate",
      questions: 28,
      avgTime: "55 min",
      participants: "7.1k",
      successRate: "79%",
      technologies: ["Docker", "Kubernetes", "CI/CD", "AWS", "Jenkins"],
      path: "/takeInterview/devops",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Test your SQL skills, database design, optimization, and data modeling knowledge.",
      color: "text-cyan-600 dark:text-cyan-400",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      hoverColor: "hover:bg-cyan-100 dark:hover:bg-cyan-900/30",
      category: "data",
      difficulty: "Intermediate",
      questions: 32,
      avgTime: "48 min",
      participants: "9.4k",
      successRate: "85%",
      technologies: ["SQL", "NoSQL", "PostgreSQL", "MongoDB", "Redis"],
      path: "/takeInterview/databaseManagement",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Explore ML algorithms, data science concepts, and AI implementation strategies.",
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      hoverColor: "hover:bg-pink-100 dark:hover:bg-pink-900/30",
      badge: "Trending",
      badgeColor: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
      category: "ai",
      difficulty: "Advanced",
      questions: 26,
      avgTime: "65 min",
      participants: "6.8k",
      successRate: "71%",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas"],
      path: "/takeInterview/machineLearning",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Assess your knowledge of AWS, Azure, GCP, and cloud architecture principles.",
      color: "text-sky-600 dark:text-sky-400",
      bgColor: "bg-sky-50 dark:bg-sky-900/20",
      hoverColor: "hover:bg-sky-100 dark:hover:bg-sky-900/30",
      badge: "In-Demand",
      badgeColor: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
      category: "cloud",
      difficulty: "Intermediate",
      questions: 24,
      avgTime: "52 min",
      participants: "11.2k",
      successRate: "80%",
      technologies: ["AWS", "Azure", "GCP", "Serverless", "Containers"],
      path: "/takeInterview/cloudComputing",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Test your understanding of security protocols, threat analysis, and protection strategies.",
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      hoverColor: "hover:bg-red-100 dark:hover:bg-red-900/30",
      category: "security",
      difficulty: "Advanced",
      questions: 22,
      avgTime: "58 min",
      participants: "5.9k",
      successRate: "76%",
      technologies: ["Encryption", "Network Security", "Penetration Testing", "OWASP", "Compliance"],
      path: "/takeInterview/cybersecurity",
    },
    {
      icon: Smartphone,
      title: "Android Development",
      description: "Evaluate your Android app development skills using Kotlin, Java, and Android SDK.",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      hoverColor: "hover:bg-emerald-100 dark:hover:bg-emerald-900/30",
      category: "mobile",
      difficulty: "Intermediate",
      questions: 27,
      avgTime: "46 min",
      participants: "8.7k",
      successRate: "83%",
      technologies: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "Room"],
      path: "/takeInterview/androidDevelopment",
    },
    {
      icon: Apple,
      title: "iOS Development",
      description: "Test your iOS development expertise with Swift, Objective-C, and Apple frameworks.",
      color: "text-slate-600 dark:text-slate-400",
      bgColor: "bg-slate-50 dark:bg-slate-900/20",
      hoverColor: "hover:bg-slate-100 dark:hover:bg-slate-900/30",
      category: "mobile",
      difficulty: "Intermediate",
      questions: 25,
      avgTime: "44 min",
      participants: "7.3k",
      successRate: "81%",
      technologies: ["Swift", "Objective-C", "UIKit", "SwiftUI", "Core Data"],
      path: "/takeInterview/iosDevelopment",
    },
    {
      icon: TestTube,
      title: "Software Testing & QA",
      description: "Demonstrate your testing methodologies, automation skills, and quality assurance practices.",
      color: "text-teal-600 dark:text-teal-400",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      hoverColor: "hover:bg-teal-100 dark:hover:bg-teal-900/30",
      category: "testing",
      difficulty: "Beginner",
      questions: 29,
      avgTime: "42 min",
      participants: "6.5k",
      successRate: "88%",
      technologies: ["Selenium", "Jest", "Cypress", "JUnit", "TestNG"],
      path: "/takeInterview/softwareTestingQA",
    },
    {
      icon: Coffee,
      title: "Java Development",
      description: "Showcase your Java programming skills, Spring framework, and enterprise development knowledge.",
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      hoverColor: "hover:bg-amber-100 dark:hover:bg-amber-900/30",
      badge: "Popular",
      badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
      category: "development",
      difficulty: "Intermediate",
      questions: 31,
      avgTime: "53 min",
      participants: "13.1k",
      successRate: "84%",
      technologies: ["Java", "Spring", "Hibernate", "Maven", "JPA"],
      path: "/takeInterview/javaDevelopment",
    },
    {
      icon: Code2,
      title: "Python Development",
      description: "Test your Python expertise, Django/Flask frameworks, and data processing capabilities.",
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      hoverColor: "hover:bg-yellow-100 dark:hover:bg-yellow-900/30",
      badge: "Popular",
      badgeColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
      category: "development",
      difficulty: "Beginner",
      questions: 28,
      avgTime: "47 min",
      participants: "14.6k",
      successRate: "89%",
      technologies: ["Python", "Django", "Flask", "FastAPI", "Pandas"],
      path: "/takeInterview/pythonDevelopment",
    },
    {
      icon: Layers,
      title: "MERN Stack Development",
      description: "Evaluate your full-stack skills with MongoDB, Express.js, React, and Node.js technologies.",
      color: "text-violet-600 dark:text-violet-400",
      bgColor: "bg-violet-50 dark:bg-violet-900/20",
      hoverColor: "hover:bg-violet-100 dark:hover:bg-violet-900/30",
      badge: "Full-Stack",
      badgeColor: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
      category: "development",
      difficulty: "Advanced",
      questions: 33,
      avgTime: "62 min",
      participants: "9.8k",
      successRate: "78%",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "GraphQL"],
      path: "/takeInterview/mernStackDevelopment",
    },
    {
      icon: Hash,
      title: "C# (.NET) Development",
      description: "Test your C# programming skills, .NET framework knowledge, and Microsoft technologies.",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-100 dark:bg-blue-800/20",
      hoverColor: "hover:bg-blue-200 dark:hover:bg-blue-800/30",
      category: "development",
      difficulty: "Intermediate",
      questions: 26,
      avgTime: "49 min",
      participants: "8.9k",
      successRate: "86%",
      technologies: ["C#", ".NET", "ASP.NET", "Entity Framework", "Azure"],
      path: "/takeInterview/cSharpDevelopment",
    },
  ]

  const categories = [
    { id: "all", name: "All Domains", count: domains.length },
    { id: "development", name: "Development", count: domains.filter((d) => d.category === "development").length },
    { id: "algorithms", name: "Algorithms", count: domains.filter((d) => d.category === "algorithms").length },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      count: domains.filter((d) => d.category === "cloud" || d.category === "operations").length,
    },
    { id: "mobile", name: "Mobile", count: domains.filter((d) => d.category === "mobile").length },
    {
      id: "data",
      name: "Data & AI",
      count: domains.filter((d) => d.category === "data" || d.category === "ai").length,
    },
  ]

  const faqs = [
    {
      question: "How do I choose the right domain for my interview?",
      answer:
        "Consider your target role and the job description. If you're applying for a frontend position, choose Frontend Development. For general software engineering roles, Data Structures & Algorithms is recommended. Check the difficulty level and technologies listed for each domain.",
    },
    {
      question: "What happens after I select a domain?",
      answer:
        "After selecting a domain, you'll choose your experience level (Beginner, Intermediate, Advanced), upload your resume for personalized questions, set the number of questions (10-50), and begin your audio-based AI interview session.",
    },
    {
      question: "Can I practice multiple domains?",
      answer:
        "You can practice as many domains as you want. We recommend starting with your strongest area to build confidence, then exploring other domains to broaden your skills.",
    },
    {
      question: "How accurate are the success rates shown?",
      answer:
        "Success rates are calculated based on users who scored 70% or higher in their interview sessions. These rates are updated weekly and reflect the performance of thousands of users across different experience levels.",
    },
  ]

  const filteredDomains = domains.filter((domain) => {
    const matchesSearch =
      domain.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      domain.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      domain.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory =
      selectedCategory === "all" ||
      domain.category === selectedCategory ||
      (selectedCategory === "cloud" && (domain.category === "cloud" || domain.category === "operations")) ||
      (selectedCategory === "data" && (domain.category === "data" || domain.category === "ai"))

    return matchesSearch && matchesCategory
  })

  const recommendedDomains = domains.filter((d) => d.badge === "Popular").slice(0, 3)

  const handleDomainSelect = (domainTitle) => {
    console.log(`Selected domain: ${domainTitle}`)
    navigate(`/takeInterview/${domainTitle.toLowerCase()}`)
    // Here you would typically navigate to the next step or handle the selection
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
      case "Intermediate":
        return "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
      case "Advanced":
        return "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20"
      case "Expert":
        return "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20"
      default:
        return "text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20"
    }
  }

  return (
    <div className="min-h-screen mt-8 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight transition-colors duration-300">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Interview Domain
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            Select one of the domains below to begin your personalized AI interview. You'll choose your experience
            level, upload your resume, and set how many questions to answer. The session is audio-based and tailored to
            your inputs.
          </p>

          {/* Process Steps */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                1
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Choose Domain</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 mt-2" />
            <div className="flex items-center gap-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <div className="w-6 h-6 bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-400 rounded-full flex items-center justify-center text-xs font-bold">
                2
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">Set Experience</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 mt-2" />
            <div className="flex items-center gap-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <div className="w-6 h-6 bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-400 rounded-full flex items-center justify-center text-xs font-bold">
                3
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">Upload Resume</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 mt-2" />
            <div className="flex items-center gap-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <div className="w-6 h-6 bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-400 rounded-full flex items-center justify-center text-xs font-bold">
                4
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">Start Interview</span>
            </div>
          </div>
        </div>

        {/* Recommended Domains */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Recommended for You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedDomains.map((domain, index) => {
              const IconComponent = domain.icon
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg ${domain.bgColor} flex items-center justify-center`}>
                        <IconComponent className={`w-5 h-5 ${domain.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">{domain.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{domain.participants} participants</p>
                      </div>
                    </div>
                    <Button size="sm" className="w-full" onClick={() => handleDomainSelect(domain.title)}>
                      Quick Start
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search domains, technologies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700"
              />
            </div>
            <div className="flex gap-2">
              <Filter className="w-4 h-4 text-slate-400 mt-3" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="text-xs"
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Domain Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {filteredDomains.map((domain, index) => {
            const IconComponent = domain.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm ${domain.hoverColor} cursor-pointer`}
                onClick={() => handleDomainSelect(domain.title)}
              >
                <CardHeader className="pb-4">
                  {/* Badge */}
                  {domain.badge && (
                    <div className="absolute top-4 right-4">
                      <Badge className={`text-xs font-medium ${domain.badgeColor} border-0`}>{domain.badge}</Badge>
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${domain.bgColor} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <IconComponent className={`w-7 h-7 ${domain.color} transition-colors duration-300`} />
                  </div>

                  {/* Title */}
                  <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors mb-2 leading-tight">
                    {domain.title}
                  </CardTitle>

                  {/* Difficulty Badge */}
                  <Badge className={`text-xs font-medium ${getDifficultyColor(domain.difficulty)} border-0 w-fit`}>
                    {domain.difficulty}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Description */}
                  <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm transition-colors duration-300">
                    {domain.description}
                  </CardDescription>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <HelpCircle className="w-3 h-3" />
                      <span>{domain.questions} questions</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{domain.avgTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{domain.participants}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>{domain.successRate} success</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {domain.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                    {domain.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs px-2 py-0.5">
                        +{domain.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Select Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-200 hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-600 dark:hover:to-slate-500 border-0 font-medium transition-all duration-300 group-hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDomainSelect(domain.title)
                    }}
                  >
                    Select Domain
                  </Button>
                </CardContent>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-100/30 dark:to-slate-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 dark:text-slate-300">Get answers to common questions about domain selection</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-md">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-3xl p-12 backdrop-blur-sm">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Still not sure which domain to choose?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Take our quick assessment to get personalized domain recommendations based on your skills and career
              goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl">
              <Target className="w-4 h-4 mr-2" />
              Take Skills Assessment
            </Button>
            <Button
              variant="outline"
              className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 rounded-xl font-semibold bg-white dark:bg-slate-800"
            >
              Request New Domain
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400 pt-6 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Free domain switching</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Unlimited practice sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Detailed performance analytics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
