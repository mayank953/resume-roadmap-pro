import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code2, 
  PlayCircle, 
  BookOpen, 
  Users, 
  Clock, 
  Star,
  Zap,
  Database,
  Globe,
  Smartphone,
  Brain,
  GitBranch,
  Award,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Build a full-stack e-commerce platform with React, Node.js, and MongoDB",
    image: "/api/placeholder/400/250",
    duration: "8 weeks",
    level: "Intermediate",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    prerequisites: ["JavaScript", "React Basics", "API Knowledge"],
    students: 1247,
    rating: 4.8,
    progress: 0,
    category: "Full Stack",
    features: ["Payment Integration", "Admin Dashboard", "Real-time Chat", "Inventory Management"],
    learningPath: [
      "Project Setup & Architecture",
      "Frontend Development",
      "Backend API Development", 
      "Database Design",
      "Payment Integration",
      "Testing & Deployment"
    ]
  },
  {
    id: 2,
    title: "AI-Powered Chat Application",
    description: "Create an intelligent chat app with AI integration and real-time messaging",
    image: "/api/placeholder/400/250",
    duration: "6 weeks",
    level: "Advanced",
    technologies: ["React", "Python", "OpenAI", "WebSocket", "Redis"],
    prerequisites: ["Python", "React", "API Integration", "AI Basics"],
    students: 892,
    rating: 4.9,
    progress: 0,
    category: "AI/ML",
    features: ["AI Responses", "Real-time Messaging", "Voice Chat", "Smart Suggestions"],
    learningPath: [
      "AI Integration Setup",
      "Chat Interface Design",
      "Real-time Communication",
      "AI Model Training",
      "Performance Optimization",
      "Security Implementation"
    ]
  },
  {
    id: 3,
    title: "Mobile Task Manager",
    description: "Develop a cross-platform mobile app for task management with offline support",
    image: "/api/placeholder/400/250",
    duration: "5 weeks", 
    level: "Beginner",
    technologies: ["React Native", "Firebase", "AsyncStorage", "Redux"],
    prerequisites: ["JavaScript", "Mobile Development Basics"],
    students: 2103,
    rating: 4.7,
    progress: 0,
    category: "Mobile",
    features: ["Offline Support", "Push Notifications", "Task Analytics", "Team Collaboration"],
    learningPath: [
      "Mobile App Fundamentals",
      "UI/UX Design",
      "State Management",
      "Offline Data Sync",
      "Push Notifications",
      "App Store Deployment"
    ]
  }
];

const categories = ["All", "Full Stack", "AI/ML", "Mobile", "DevOps", "Blockchain"];

export default function ProjectsBrowse() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projects] = useState(projectsData);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full Stack": return <Globe className="w-4 h-4" />;
      case "AI/ML": return <Brain className="w-4 h-4" />;
      case "Mobile": return <Smartphone className="w-4 h-4" />;
      case "DevOps": return <GitBranch className="w-4 h-4" />;
      case "Blockchain": return <Database className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600 mt-2">Master real-world projects with AI-powered guidance and comprehensive learning paths</p>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-sm text-gray-600">AI Assistant Available</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Projects</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
                <Code2 className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <Award className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">In Progress</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
                <PlayCircle className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Hours</p>
                  <p className="text-2xl font-bold text-gray-900">145</p>
                </div>
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="flex items-center gap-2"
          >
            {getCategoryIcon(category)}
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute top-4 right-4">
                <Badge className={getLevelColor(project.level)}>
                  {project.level}
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4" />
                  {project.duration}
                </div>
              </div>
            </div>
            
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mt-1 text-sm">
                    {project.description}
                  </CardDescription>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {project.students.toLocaleString()}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {project.rating}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Technologies */}
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Technologies</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Progress */}
              {project.progress > 0 && (
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
              )}

              {/* Action Button */}
              <Link to={`/projects/${project.id}`}>
                <Button className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                  {project.progress > 0 ? "Continue Learning" : "Start Project"}
                  <Zap className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Assistant CTA */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">AI-Powered Learning Experience</h3>
                <p className="text-gray-600 text-sm">Get personalized guidance, code reviews, and instant help throughout your project journey</p>
              </div>
            </div>
            <Button>
              Try AI Assistant
              <MessageSquare className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}