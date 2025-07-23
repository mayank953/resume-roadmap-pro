import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
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
  MessageCircle
} from "lucide-react";

// Mock project data - in real app this would come from API
const projectDetail = {
  id: 1,
  title: "E-Commerce Platform",
  description: "Build a complete full-stack e-commerce platform with modern technologies including React, Node.js, and MongoDB. Learn industry best practices while creating a production-ready application.",
  duration: "8 weeks",
  level: "Intermediate",
  technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Tailwind CSS", "Socket.IO"],
  prerequisites: ["JavaScript ES6+", "React Basics", "API Knowledge", "Git/GitHub"],
  students: 1247,
  rating: 4.8,
  totalRatings: 324,
  instructor: "Sarah Johnson",
  progress: 25,
  category: "Full Stack",
  estimatedHours: 60,
  
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
  const [activeTab, setActiveTab] = useState("overview");
  const [project] = useState(projectDetail);

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
        <Link to="/projects">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>
      </div>

      {/* Project Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                      {project.level}
                    </Badge>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-3xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-600 mt-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {project.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {project.students.toLocaleString()} students
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {project.rating} ({project.totalRatings} reviews)
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {project.estimatedHours} hours
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Tabs Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="assignments">Assignments</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    What You'll Build
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technologies You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {project.prerequisites.map((prereq, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">{prereq}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-4">
              {project.curriculum.map((week, index) => (
                <Card key={index} className={`${getStatusColor(week.status)} border`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">
                        Week {week.week}: {week.title}
                      </CardTitle>
                      <Badge 
                        variant={week.status === "completed" ? "default" : "outline"}
                        className={week.status === "completed" ? "bg-green-600" : ""}
                      >
                        {week.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {week.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                        <div className="flex items-center gap-3">
                          {getLessonIcon(lesson.type)}
                          <div>
                            <p className="font-medium text-sm">{lesson.title}</p>
                            <p className="text-xs text-gray-600">{lesson.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {lesson.completed && <CheckCircle className="w-4 h-4 text-green-600" />}
                          <Button 
                            size="sm" 
                            variant={lesson.completed ? "outline" : "default"}
                            disabled={week.status === "locked"}
                          >
                            {lesson.type === "assignment" ? (
                              lesson.completed ? "View Submission" : "Start Assignment"
                            ) : (
                              lesson.completed ? "Review" : "Watch"
                            )}
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    <Separator />
                    
                    {/* Interview Section */}
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-3">
                        <MessageCircle className="w-4 h-4 text-primary" />
                        <div>
                          <p className="font-medium text-sm">{week.interview.title}</p>
                          <p className="text-xs text-gray-600">{week.interview.duration}</p>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant={week.interview.completed ? "outline" : "default"}
                        disabled={week.status === "locked"}
                      >
                        {week.interview.completed ? "Review Interview" : "Start Interview"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="architecture" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="w-5 h-5" />
                    System Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="border-2 border-blue-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base text-blue-700">Frontend</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {project.architecture.frontend.map((tech) => (
                            <Badge key={tech} variant="outline" className="mr-1 mb-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-green-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base text-green-700">Backend</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {project.architecture.backend.map((tech) => (
                            <Badge key={tech} variant="outline" className="mr-1 mb-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-purple-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base text-purple-700">Database</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {project.architecture.database.map((tech) => (
                            <Badge key={tech} variant="outline" className="mr-1 mb-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <CardHeader>
                      <CardTitle className="text-base">External Services & Deployment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2">External APIs</h4>
                          <div className="space-y-1">
                            {project.architecture.external.map((service) => (
                              <Badge key={service} variant="outline" className="mr-1">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Deployment</h4>
                          <div className="space-y-1">
                            {project.architecture.deployment.map((platform) => (
                              <Badge key={platform} variant="outline" className="mr-1">
                                {platform}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assignments" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Code Submissions & Reviews</CardTitle>
                  <CardDescription>
                    Submit your code and get AI-powered feedback along with peer reviews
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border border-dashed border-gray-300 rounded-lg text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Upload your project files or connect your GitHub repository</p>
                    <Button className="mt-2" size="sm">
                      Upload Files
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Recent Submissions</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">Environment Setup</p>
                          <p className="text-xs text-gray-600">Submitted 3 days ago</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Approved</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-3" />
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Completed Lessons</span>
                  <span className="font-medium">6/24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Assignments Submitted</span>
                  <span className="font-medium">1/8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interviews Completed</span>
                  <span className="font-medium">1/8</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Assistant */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-600">
                Get instant help with your code, explanations, and personalized guidance throughout the project.
              </p>
              <Button className="w-full">
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat with AI
              </Button>
            </CardContent>
          </Card>

          {/* Continue Learning */}
          <Card>
            <CardContent className="p-4">
              <Button className="w-full" size="lg">
                <PlayCircle className="w-5 h-5 mr-2" />
                Continue Learning
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}