
import { useState } from "react";
import { Map, Target, CheckCircle, Circle, Star, BookOpen, Video, Award, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Roadmap() {
  const [selectedRoadmap, setSelectedRoadmap] = useState("frontend");

  const roadmaps = [
    {
      id: "frontend",
      title: "Frontend Developer",
      description: "Master React, TypeScript, and modern frontend technologies",
      progress: 67,
      totalSteps: 12,
      completedSteps: 8,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "backend", 
      title: "Backend Developer",
      description: "Learn Node.js, databases, and API development",
      progress: 34,
      totalSteps: 15,
      completedSteps: 5,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "fullstack",
      title: "Full Stack Developer", 
      description: "Complete frontend and backend development skills",
      progress: 23,
      totalSteps: 20,
      completedSteps: 4,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "devops",
      title: "DevOps Engineer",
      description: "Master deployment, CI/CD, and infrastructure",
      progress: 12,
      totalSteps: 10,
      completedSteps: 1,
      color: "from-orange-500 to-red-500"
    }
  ];

  const currentRoadmap = roadmaps.find(r => r.id === selectedRoadmap);

  const roadmapSteps = {
    frontend: [
      {
        id: 1,
        title: "HTML & CSS Fundamentals",
        description: "Learn the building blocks of web development",
        status: "completed",
        type: "course",
        duration: "2 weeks",
        resources: ["HTML Basics Course", "CSS Flexbox Guide", "Practice Projects"]
      },
      {
        id: 2, 
        title: "JavaScript Essentials",
        description: "Master JavaScript programming concepts",
        status: "completed",
        type: "course",
        duration: "3 weeks", 
        resources: ["JS Fundamentals", "DOM Manipulation", "ES6+ Features"]
      },
      {
        id: 3,
        title: "React Fundamentals",
        description: "Learn React components, state, and props",
        status: "in-progress",
        type: "course",
        duration: "4 weeks",
        resources: ["React Official Tutorial", "Component Patterns", "State Management"]
      },
      {
        id: 4,
        title: "TypeScript Integration",
        description: "Add type safety to your React applications",
        status: "locked",
        type: "course", 
        duration: "2 weeks",
        resources: ["TypeScript Basics", "React + TypeScript", "Type Definitions"]
      },
      {
        id: 5,
        title: "Advanced React Patterns",
        description: "Learn hooks, context, and performance optimization",
        status: "locked",
        type: "course",
        duration: "3 weeks", 
        resources: ["Custom Hooks", "React Context", "Performance Tips"]
      }
    ]
  };

  const recommendedCourses = [
    {
      title: "Complete React Developer Course",
      provider: "Udemy",
      rating: 4.7,
      students: "12,000+",
      duration: "40 hours",
      price: "$79.99",
      match: "95%"
    },
    {
      title: "Modern JavaScript Bootcamp", 
      provider: "Udemy",
      rating: 4.6,
      students: "8,500+",
      duration: "30 hours",
      price: "$64.99", 
      match: "87%"
    },
    {
      title: "Advanced CSS and Sass",
      provider: "Udemy", 
      rating: 4.8,
      students: "15,200+",
      duration: "28 hours",
      price: "$59.99",
      match: "78%"
    }
  ];

  const achievements = [
    { title: "First Steps", description: "Completed your first roadmap step", earned: true },
    { title: "Consistent Learner", description: "Studied for 7 days in a row", earned: true },
    { title: "Quick Learner", description: "Completed a course in under a week", earned: false },
    { title: "Knowledge Seeker", description: "Completed 5 courses", earned: false }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Career Roadmaps</h1>
          <p className="text-gray-600 mt-1">Follow personalized learning paths to achieve your career goals</p>
        </div>
        <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
          <Target className="w-4 h-4 mr-2" />
          Set New Goal
        </Button>
      </div>

      <Tabs defaultValue="my-roadmaps" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="my-roadmaps">My Roadmaps</TabsTrigger>
          <TabsTrigger value="explore">Explore</TabsTrigger>
          <TabsTrigger value="courses">Recommended Courses</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="my-roadmaps" className="space-y-6">
          {/* Roadmap Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {roadmaps.map((roadmap) => (
              <Card 
                key={roadmap.id} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedRoadmap === roadmap.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedRoadmap(roadmap.id)}
              >
                <CardContent className="p-4">
                  <div className={`w-full h-2 bg-gradient-to-r ${roadmap.color} rounded-full mb-3`}>
                    <div 
                      className="h-full bg-white rounded-full transition-all"
                      style={{ width: `${100 - roadmap.progress}%`, marginLeft: `${roadmap.progress}%` }}
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{roadmap.title}</h4>
                  <p className="text-xs text-gray-600 mb-3">{roadmap.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{roadmap.completedSteps}/{roadmap.totalSteps} steps</span>
                    <span className="font-medium text-green-600">{roadmap.progress}%</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Current Roadmap Details */}
          {currentRoadmap && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Map className="w-5 h-5" />
                      {currentRoadmap.title} Roadmap
                    </CardTitle>
                    <CardDescription>{currentRoadmap.description}</CardDescription>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex-1">
                        <Progress value={currentRoadmap.progress} className="h-2" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{currentRoadmap.progress}%</span>
                    </div>
                  </CardHeader>
                </Card>

                {/* Roadmap Steps */}
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Path</CardTitle>
                    <CardDescription>Follow these steps to master {currentRoadmap.title.toLowerCase()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {roadmapSteps.frontend?.map((step, index) => (
                        <div key={step.id} className="flex items-start gap-4 p-4 rounded-lg border">
                          <div className="flex-shrink-0 mt-1">
                            {step.status === 'completed' ? (
                              <CheckCircle className="w-6 h-6 text-green-500" />
                            ) : step.status === 'in-progress' ? (
                              <div className="w-6 h-6 border-2 border-blue-500 rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                              </div>
                            ) : (
                              <Circle className="w-6 h-6 text-gray-300" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className={`font-medium ${
                                step.status === 'locked' ? 'text-gray-400' : 'text-gray-900'
                              }`}>
                                {step.title}
                              </h4>
                              <Badge variant="outline" className="text-xs">
                                {step.type}
                              </Badge>
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {step.duration}
                              </span>
                            </div>
                            <p className={`text-sm mb-3 ${
                              step.status === 'locked' ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {step.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {step.resources.map((resource, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {resource}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex gap-2">
                              {step.status === 'completed' ? (
                                <Button size="sm" variant="outline">Review</Button>
                              ) : step.status === 'in-progress' ? (
                                <Button size="sm">Continue</Button>
                              ) : (
                                <Button size="sm" variant="outline" disabled>
                                  Locked
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Progress Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Progress Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">{currentRoadmap.progress}%</div>
                      <div className="text-sm text-gray-600">Complete</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Completed Steps</span>
                        <span className="font-medium">{currentRoadmap.completedSteps}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Remaining Steps</span>
                        <span className="font-medium">{currentRoadmap.totalSteps - currentRoadmap.completedSteps}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Estimated Time</span>
                        <span className="font-medium">6 weeks</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Next Steps */}
                <Card>
                  <CardHeader>
                    <CardTitle>Next Steps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-1">Continue Learning</h4>
                        <p className="text-sm text-blue-700">Complete React Fundamentals course</p>
                        <Button size="sm" className="mt-2 w-full">
                          Continue
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="explore" className="space-y-6">
          {/* Browse All Roadmaps */}
          <Card>
            <CardHeader>
              <CardTitle>Explore Career Paths</CardTitle>
              <CardDescription>Discover new career opportunities and learning paths</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Data Scientist", steps: 14, duration: "6 months", difficulty: "Advanced" },
                  { title: "UI/UX Designer", steps: 10, duration: "4 months", difficulty: "Intermediate" },
                  { title: "Mobile Developer", steps: 12, duration: "5 months", difficulty: "Intermediate" },
                  { title: "Machine Learning Engineer", steps: 16, duration: "8 months", difficulty: "Advanced" },
                  { title: "Cybersecurity Specialist", steps: 13, duration: "6 months", difficulty: "Advanced" },
                  { title: "Product Manager", steps: 8, duration: "3 months", difficulty: "Beginner" }
                ].map((path, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{path.title}</h4>
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex justify-between">
                          <span>Steps:</span>
                          <span>{path.steps}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span>{path.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Difficulty:</span>
                          <Badge variant="outline" className={`text-xs ${
                            path.difficulty === 'Beginner' ? 'text-green-600' :
                            path.difficulty === 'Intermediate' ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {path.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <Button className="w-full" variant="outline">
                        Start Roadmap
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          {/* Recommended Courses */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📚 Recommended Udemy Courses
              </CardTitle>
              <CardDescription>Curated courses based on your learning path and goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendedCourses.map((course, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">{course.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span>{course.rating}</span>
                            </div>
                            <span>{course.students} students</span>
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-100 text-green-700">
                              {course.match} match
                            </Badge>
                            <span className="text-sm text-gray-600">for your roadmap</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900 mb-2">{course.price}</div>
                          <Button size="sm">Enroll Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Your Achievements
              </CardTitle>
              <CardDescription>Celebrate your learning milestones and progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    achievement.earned ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        achievement.earned ? 'bg-yellow-200' : 'bg-gray-200'
                      }`}>
                        <Award className={`w-6 h-6 ${
                          achievement.earned ? 'text-yellow-600' : 'text-gray-400'
                        }`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${
                          achievement.earned ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-sm ${
                          achievement.earned ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {achievement.description}
                        </p>
                        {achievement.earned && (
                          <Badge className="mt-2 bg-yellow-100 text-yellow-700">
                            Earned
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
