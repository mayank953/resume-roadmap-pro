
import { Map, CheckCircle, Circle, Clock, Star, ArrowRight, BookOpen, Code, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Roadmap() {
  const roadmaps = [
    {
      title: "Frontend Developer",
      description: "Master modern frontend technologies and frameworks",
      progress: 67,
      totalSteps: 12,
      completedSteps: 8,
      difficulty: "Intermediate",
      duration: "6-8 months",
      technologies: ["React", "JavaScript", "TypeScript", "CSS"],
      isActive: true
    },
    {
      title: "Full Stack Developer",
      description: "Learn both frontend and backend development",
      progress: 23,
      totalSteps: 18,
      completedSteps: 4,
      difficulty: "Advanced",
      duration: "8-12 months",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      isActive: false
    },
    {
      title: "Data Scientist",
      description: "Analyze data and build machine learning models",
      progress: 0,
      totalSteps: 15,
      completedSteps: 0,
      difficulty: "Advanced",
      duration: "10-14 months",
      technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow"],
      isActive: false
    }
  ];

  const currentRoadmapSteps = [
    {
      title: "HTML & CSS Fundamentals",
      description: "Learn the basics of web markup and styling",
      status: "completed",
      duration: "2 weeks",
      resources: 8
    },
    {
      title: "JavaScript Essentials",
      description: "Master JavaScript programming concepts",
      status: "completed",
      duration: "3 weeks",
      resources: 12
    },
    {
      title: "React Fundamentals",
      description: "Build interactive user interfaces with React",
      status: "completed",
      duration: "4 weeks",
      resources: 15
    },
    {
      title: "State Management",
      description: "Learn Redux and Context API for state management",
      status: "current",
      duration: "3 weeks",
      resources: 10
    },
    {
      title: "Advanced React Patterns",
      description: "Hooks, HOCs, and advanced React concepts",
      status: "upcoming",
      duration: "3 weeks",
      resources: 8
    },
    {
      title: "Testing & Deployment",
      description: "Test your applications and deploy to production",
      status: "upcoming",
      duration: "2 weeks",
      resources: 6
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "current":
        return <Circle className="w-5 h-5 text-blue-600 fill-current" />;
      default:
        return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-200 bg-green-50";
      case "current":
        return "border-blue-200 bg-blue-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Career Roadmap</h1>
          <p className="text-gray-600 mt-1">Follow personalized learning paths to achieve your career goals</p>
        </div>
        <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
          <Map className="w-4 h-4 mr-2" />
          Explore New Roadmaps
        </Button>
      </div>

      {/* Current Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Your Roadmaps</h2>
          <div className="space-y-4">
            {roadmaps.map((roadmap, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${roadmap.isActive ? 'ring-2 ring-blue-200' : ''}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-lg">{roadmap.title}</CardTitle>
                        {roadmap.isActive && (
                          <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                        )}
                      </div>
                      <CardDescription className="mb-3">{roadmap.description}</CardDescription>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {roadmap.duration}
                        </span>
                        <Badge className={getDifficultyColor(roadmap.difficulty)}>
                          {roadmap.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-gray-600">
                        {roadmap.completedSteps}/{roadmap.totalSteps} steps
                      </span>
                    </div>
                    <Progress value={roadmap.progress} className="h-2" />
                    
                    <div className="flex items-center gap-2">
                      {roadmap.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-2">
                    <Button variant={roadmap.isActive ? "default" : "outline"} size="sm">
                      {roadmap.isActive ? "Continue Learning" : "Start Roadmap"}
                    </Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Learning Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Progress</span>
                <span className="text-sm text-gray-600">67%</span>
              </div>
              <Progress value={67} className="h-2" />
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Completed Steps</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span>Current Streak</span>
                  <span className="font-medium">7 days</span>
                </div>
                <div className="flex justify-between">
                  <span>Certificates Earned</span>
                  <span className="font-medium">3</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 bg-yellow-50 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">First Project</p>
                    <p className="text-xs text-gray-600">Built your first React app</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Quick Learner</p>
                    <p className="text-xs text-gray-600">Completed 5 modules in a week</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Current Roadmap Steps */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Frontend Developer Roadmap</h2>
        <div className="space-y-4">
          {currentRoadmapSteps.map((step, index) => (
            <Card key={index} className={`transition-all duration-300 ${getStatusColor(step.status)}`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(step.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-lg mb-1">{step.title}</h3>
                        <p className="text-gray-600 mb-3">{step.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {step.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            {step.resources} resources
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {step.status === 'current' && (
                          <Button size="sm">
                            Continue
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        )}
                        {step.status === 'upcoming' && (
                          <Button variant="outline" size="sm" disabled>
                            Locked
                          </Button>
                        )}
                        {step.status === 'completed' && (
                          <Button variant="outline" size="sm">
                            Review
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
