import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  ArrowLeft,
  PlayCircle, 
  BookOpen, 
  Users, 
  Clock, 
  Star,
  CheckCircle,
  Code2,
  FileText,
  MessageSquare,
  Brain,
  GitBranch,
  Database,
  Globe,
  Zap,
  Award,
  Video,
  Upload,
  MessageCircle,
  Quote,
  Calendar,
  BarChart3,
  Trophy,
  Layers,
  Shield,
  Smartphone,
  Monitor,
  Palette,
  CloudLightning
} from "lucide-react";

// Technology icons mapping
const techIcons = {
  "React": <Monitor className="w-6 h-6 text-blue-500" />,
  "Node.js": <Database className="w-6 h-6 text-green-600" />,
  "MongoDB": <Database className="w-6 h-6 text-green-500" />,
  "Express": <Globe className="w-6 h-6 text-gray-600" />,
  "Stripe": <Shield className="w-6 h-6 text-purple-600" />,
  "JWT": <Shield className="w-6 h-6 text-orange-600" />,
  "Tailwind CSS": <Palette className="w-6 h-6 text-cyan-500" />,
  "Socket.IO": <CloudLightning className="w-6 h-6 text-black" />,
  "TypeScript": <Code2 className="w-6 h-6 text-blue-600" />,
  "Docker": <Layers className="w-6 h-6 text-blue-400" />
};

// Mock project data - in real app this would come from API
const projectDetail = {
  id: 1,
  title: "E-Commerce Platform",
  shortDescription: "Build a production-ready e-commerce platform with modern technologies",
  description: "Master full-stack development by building a complete e-commerce platform from scratch. This comprehensive project covers everything from frontend React components to backend APIs, database design, payment integration, and deployment. You'll learn industry best practices, clean code principles, and modern development workflows while creating a real-world application that you can showcase in your portfolio.",
  duration: "8 weeks",
  level: "Intermediate",
  technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Tailwind CSS", "Socket.IO"],
  prerequisites: ["JavaScript ES6+", "React Basics", "API Knowledge", "Git/GitHub"],
  students: 1247,
  rating: 4.8,
  totalRatings: 324,
  instructor: {
    name: "Sarah Johnson",
    title: "Senior Full-Stack Developer",
    company: "Google",
    avatar: "/placeholder.svg",
    bio: "10+ years of experience building scalable web applications"
  },
  progress: 25,
  category: "Full Stack",
  estimatedHours: 60,
  price: "$99",
  certificateIncluded: true,
  lifetimeAccess: true,
  
  // Key learning outcomes
  learningOutcomes: [
    "Build a complete full-stack e-commerce application",
    "Master React.js with hooks and modern patterns",
    "Develop RESTful APIs with Node.js and Express",
    "Implement secure authentication and authorization",
    "Integrate payment processing with Stripe",
    "Design and optimize MongoDB databases",
    "Deploy applications to production",
    "Write clean, maintainable, and testable code"
  ],
  
  // Student reviews
  reviews: [
    {
      id: 1,
      name: "Alex Rodriguez",
      rating: 5,
      avatar: "/placeholder.svg",
      date: "2 weeks ago",
      comment: "This project completely transformed my understanding of full-stack development. The step-by-step approach and real-world examples made complex concepts easy to grasp. Highly recommend!"
    },
    {
      id: 2,
      name: "Emily Chen",
      rating: 5,
      avatar: "/placeholder.svg",
      date: "1 month ago",
      comment: "The AI assistant feature is incredible! It helped me debug issues and understand concepts better. The interview practice sessions were super valuable for my job preparation."
    },
    {
      id: 3,
      name: "Michael Thompson",
      rating: 4,
      avatar: "/placeholder.svg",
      date: "3 weeks ago",
      comment: "Great project structure and comprehensive curriculum. The hands-on approach really helps solidify the concepts. Would love to see more advanced deployment topics."
    }
  ],
  
  // Project highlights
  highlights: [
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: "Industry-Standard Code",
      description: "Write clean, scalable code following best practices"
    },
    {
      icon: <Trophy className="w-6 h-6 text-purple-500" />,
      title: "Portfolio Ready",
      description: "Build a project you can showcase to employers"
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: "AI-Powered Learning",
      description: "Get personalized guidance and instant feedback"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-green-500" />,
      title: "Mock Interviews",
      description: "Practice technical interviews with AI feedback"
    }
  ],
  
  // Detailed curriculum
  curriculum: [
    {
      week: 1,
      title: "Project Setup & Architecture",
      status: "completed",
      lessons: [
        { title: "Project Overview & Requirements", duration: "15 min", type: "video", completed: true },
        { title: "Setting up Development Environment", duration: "30 min", type: "video", completed: true },
        { title: "Project Architecture Design", duration: "45 min", type: "video", completed: true },
        { title: "Assignment: Environment Setup", duration: "2 hours", type: "assignment", completed: true }
      ],
      interview: { title: "Architecture & Planning Interview", duration: "30 min", completed: true }
    },
    {
      week: 2,
      title: "Frontend Development - UI Components",
      status: "current",
      lessons: [
        { title: "React Component Structure", duration: "25 min", type: "video", completed: true },
        { title: "Styling with Tailwind CSS", duration: "35 min", type: "video", completed: true },
        { title: "State Management Setup", duration: "40 min", type: "video", completed: false },
        { title: "Assignment: Product Catalog UI", duration: "3 hours", type: "assignment", completed: false }
      ],
      interview: { title: "Frontend Development Interview", duration: "25 min", completed: false }
    },
    {
      week: 3,
      title: "Backend API Development",
      status: "locked",
      lessons: [
        { title: "Express.js Server Setup", duration: "30 min", type: "video", completed: false },
        { title: "RESTful API Design", duration: "45 min", type: "video", completed: false },
        { title: "Authentication System", duration: "50 min", type: "video", completed: false },
        { title: "Assignment: User Authentication API", duration: "4 hours", type: "assignment", completed: false }
      ],
      interview: { title: "Backend Development Interview", duration: "35 min", completed: false }
    }
  ],

  // Features overview
  features: [
    "User Authentication & Authorization",
    "Product Catalog Management", 
    "Shopping Cart & Checkout",
    "Payment Integration (Stripe)",
    "Admin Dashboard",
    "Order Management System",
    "Real-time Notifications",
    "Responsive Design"
  ],

  // Architecture diagram data
  architecture: {
    frontend: ["React", "Tailwind CSS", "Redux Toolkit", "React Router"],
    backend: ["Node.js", "Express.js", "JWT", "Bcrypt"],
    database: ["MongoDB", "Mongoose"],
    external: ["Stripe API", "SendGrid", "Cloudinary"],
    deployment: ["Vercel", "MongoDB Atlas", "GitHub Actions"]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [project] = useState(projectDetail);
  
  const handleStartLearning = () => {
    navigate(`/projects/${id}/learn`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-600 bg-green-50 border-green-200";
      case "current": return "text-blue-600 bg-blue-50 border-blue-200";
      case "locked": return "text-gray-400 bg-gray-50 border-gray-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video": return <Video className="w-4 h-4" />;
      case "assignment": return <FileText className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/projects/browse">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Main Project Info */}
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 border-b">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary text-primary-foreground px-3 py-1">
                  {project.level}
                </Badge>
                <Badge variant="outline" className="border-primary/20">
                  {project.category}
                </Badge>
                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                  Certificate Included
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                {project.title}
              </h1>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">{project.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">{project.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(project.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{project.rating}</span>
                  <span>({project.totalRatings} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-medium">{project.estimatedHours} hours</span>
                </div>
              </div>
            </div>
            
            {/* Instructor Info */}
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={project.instructor.avatar} />
                  <AvatarFallback>{project.instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">{project.instructor.name}</p>
                  <p className="text-sm text-gray-600">{project.instructor.title} at {project.instructor.company}</p>
                  <p className="text-xs text-gray-500">{project.instructor.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Project Highlights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Why Choose This Project?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-gray-50/50">
                    {highlight.icon}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{highlight.title}</h4>
                      <p className="text-sm text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card></div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="sticky top-6">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">{project.price}</div>
                <p className="text-sm text-gray-600">One-time payment • Lifetime access</p>
              </div>
              
              <Button 
                onClick={handleStartLearning}
                className="w-full mb-4 text-lg py-6"
                size="lg"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Start Learning Now
              </Button>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total duration</span>
                  <span className="font-medium">{project.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Estimated hours</span>
                  <span className="font-medium">{project.estimatedHours} hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Students enrolled</span>
                  <span className="font-medium">{project.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Certificate</span>
                  <span className="font-medium text-green-600">✓ Included</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Access</span>
                  <span className="font-medium">Lifetime</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">This project includes:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Interactive video lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Hands-on assignments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>AI-powered assistance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Mock interview practice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Source code access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Community support</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="lg:col-span-2">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="technologies">Technologies</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Learning Outcomes
                </CardTitle>
                <CardDescription>
                  What you'll achieve by completing this project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg border bg-gray-50/50">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  What You'll Build
                </CardTitle>
                <CardDescription>
                  Key features and functionality of your e-commerce platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Prerequisites
                </CardTitle>
                <CardDescription>
                  What you should know before starting this project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {project.prerequisites.map((prereq, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg border bg-blue-50/50">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">{prereq}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="curriculum" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Project Timeline
                </CardTitle>
                <CardDescription>
                  Complete curriculum breakdown with weekly milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.curriculum.map((week, index) => (
                    <div key={index} className="relative">
                      {index !== project.curriculum.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
                      )}
                      <div className="flex gap-4">
                        <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                          week.status === "completed" 
                            ? "bg-green-100 border-green-500 text-green-700"
                            : week.status === "current"
                            ? "bg-blue-100 border-blue-500 text-blue-700"
                            : "bg-gray-100 border-gray-300 text-gray-500"
                        }`}>
                          {week.week}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{week.title}</h4>
                            <Badge 
                              variant={week.status === "completed" ? "default" : "outline"}
                              className={week.status === "completed" ? "bg-green-600" : ""}
                            >
                              {week.status}
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-600">
                              {week.lessons.length} lessons • {week.lessons.reduce((acc, lesson) => acc + parseInt(lesson.duration), 0)} minutes
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {week.lessons.slice(0, 2).map((lesson, lessonIndex) => (
                                <div key={lessonIndex} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                  {lesson.title}
                                </div>
                              ))}
                              {week.lessons.length > 2 && (
                                <div className="text-xs bg-gray-100 px-2 py-1 rounded">
                                  +{week.lessons.length - 2} more
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-primary">AI Learning Assistant</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Get personalized guidance, instant code reviews, and 24/7 support from our AI assistant throughout your learning journey.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technologies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  Technologies & Tools
                </CardTitle>
                <CardDescription>
                  Master these modern technologies and frameworks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.technologies.map((tech) => (
                    <div key={tech} className="flex items-center gap-4 p-4 rounded-lg border bg-white hover:shadow-md transition-shadow">
                      <div className="flex-shrink-0">
                        {techIcons[tech] || <Code2 className="w-6 h-6 text-gray-500" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{tech}</h4>
                        <p className="text-xs text-gray-600">
                          {tech === "React" && "Frontend framework"}
                          {tech === "Node.js" && "Backend runtime"}
                          {tech === "MongoDB" && "NoSQL database"}
                          {tech === "Express" && "Web framework"}
                          {tech === "Stripe" && "Payment processing"}
                          {tech === "JWT" && "Authentication"}
                          {tech === "Tailwind CSS" && "CSS framework"}
                          {tech === "Socket.IO" && "Real-time communication"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  Architecture Overview
                </CardTitle>
                <CardDescription>
                  How all the pieces fit together
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="border-2 border-blue-200 bg-blue-50/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base text-blue-700 flex items-center gap-2">
                        <Monitor className="w-4 h-4" />
                        Frontend Layer
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {project.architecture.frontend.map((tech) => (
                          <div key={tech} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-200 bg-green-50/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base text-green-700 flex items-center gap-2">
                        <Database className="w-4 h-4" />
                        Backend Layer
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {project.architecture.backend.map((tech) => (
                          <div key={tech} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-purple-200 bg-purple-50/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base text-purple-700 flex items-center gap-2">
                        <Database className="w-4 h-4" />
                        Data Layer
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {project.architecture.database.map((tech) => (
                          <div key={tech} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Student Reviews
                </CardTitle>
                <CardDescription>
                  See what other students are saying about this project
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Rating Summary */}
                <div className="flex items-center gap-6 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">{project.rating}</div>
                    <div className="flex items-center justify-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(project.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">{project.totalRatings} reviews</div>
                  </div>
                  <div className="flex-1">
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-2">
                          <span className="text-sm w-8">{stars}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-yellow-400 h-2 rounded-full" 
                              style={{ 
                                width: `${stars === 5 ? 75 : stars === 4 ? 20 : stars === 3 ? 3 : stars === 2 ? 1 : 1}%` 
                              }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 w-8">
                            {stars === 5 ? '75%' : stars === 4 ? '20%' : stars === 3 ? '3%' : stars === 2 ? '1%' : '1%'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {project.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={review.avatar} />
                          <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-900">{review.name}</h4>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < review.rating
                                          ? "fill-yellow-400 text-yellow-400"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Quote className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                            <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <Button variant="outline">
                    View All Reviews
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}