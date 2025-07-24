import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
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
  Volume2,
  VolumeX,
  Settings,
  Maximize,
  Minimize,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Upload,
  Send,
  ChevronDown,
  ChevronRight,
  Award,
  MessageCircle
} from "lucide-react";

// Mock LMS data
const lmsData = {
  course: {
    title: "E-Commerce Platform",
    currentLesson: {
      id: 1,
      title: "Setting up Development Environment",
      duration: "30:00",
      videoUrl: "/placeholder-video.mp4",
      transcript: "Welcome to the E-Commerce Platform project. In this lesson, we'll set up our development environment...",
      notes: "Key points from this lesson:\n- Install Node.js and npm\n- Set up React development environment\n- Configure VS Code extensions"
    },
    sections: [
      {
        id: 1,
        title: "Project Setup & Architecture",
        duration: "2h 30m",
        completed: true,
        lessons: [
          { id: 1, title: "Project Overview & Requirements", duration: "15:00", completed: true, type: "video" },
          { id: 2, title: "Setting up Development Environment", duration: "30:00", completed: true, type: "video", current: true },
          { id: 3, title: "Project Architecture Design", duration: "45:00", completed: false, type: "video" },
          { id: 4, title: "Assignment: Environment Setup", duration: "60:00", completed: false, type: "assignment" }
        ]
      },
      {
        id: 2,
        title: "Frontend Development - UI Components",
        duration: "3h 15m",
        completed: false,
        lessons: [
          { id: 5, title: "React Component Structure", duration: "25:00", completed: false, type: "video" },
          { id: 6, title: "Styling with Tailwind CSS", duration: "35:00", completed: false, type: "video" },
          { id: 7, title: "State Management Setup", duration: "40:00", completed: false, type: "video" },
          { id: 8, title: "Quiz: React Components", duration: "15:00", completed: false, type: "quiz" },
          { id: 9, title: "Assignment: Product Catalog UI", duration: "180:00", completed: false, type: "assignment" }
        ]
      },
      {
        id: 3,
        title: "Backend API Development",
        duration: "4h 0m",
        completed: false,
        lessons: [
          { id: 10, title: "Express.js Server Setup", duration: "30:00", completed: false, type: "video" },
          { id: 11, title: "RESTful API Design", duration: "45:00", completed: false, type: "video" },
          { id: 12, title: "Authentication System", duration: "50:00", completed: false, type: "video" },
          { id: 13, title: "Assignment: User Authentication API", duration: "240:00", completed: false, type: "assignment" }
        ]
      }
    ]
  },
  userProgress: {
    overallProgress: 25,
    currentSection: 1,
    currentLesson: 2,
    completedLessons: 2,
    totalLessons: 13,
    timeSpent: "8h 45m",
    streak: 5
  }
};

export default function LMS() {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("05:23");
  const [totalTime] = useState("30:00");
  const [progress, setProgress] = useState(18);
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSections, setExpandedSections] = useState([1]);
  const [userNotes, setUserNotes] = useState("");
  const [assignment, setAssignment] = useState("");

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video": return <PlayCircle className="w-4 h-4" />;
      case "assignment": return <FileText className="w-4 h-4" />;
      case "quiz": return <Brain className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-black">
      {/* Header */}
      <div className="bg-white border-b px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to={`/projects/${id}`}>
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Project
            </Button>
          </Link>
          <div>
            <h1 className="font-semibold text-gray-900">{lmsData.course.title}</h1>
            <p className="text-sm text-gray-600">{lmsData.course.currentLesson.title}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            Progress: {lmsData.userProgress.overallProgress}%
          </div>
          <Progress value={lmsData.userProgress.overallProgress} className="w-32" />
          <Button variant="outline" size="sm">
            <Brain className="w-4 h-4 mr-2" />
            AI Assistant
          </Button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Video Player */}
          <div className="relative bg-black flex-1">
            {/* Video Container */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <PlayCircle className="w-10 h-10" />
                </div>
                <p className="text-lg font-medium">Video Player</p>
                <p className="text-sm text-gray-300">Click to play lesson video</p>
              </div>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="space-y-3">
                {/* Progress Bar */}
                <div className="flex items-center gap-2 text-white text-sm">
                  <span>{currentTime}</span>
                  <div className="flex-1 bg-white/30 rounded-full h-1">
                    <div 
                      className="bg-white rounded-full h-1 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <span>{totalTime}</span>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:bg-white/20"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <SkipBack className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <SkipForward className="w-4 h-4" />
                    </Button>
                    
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-white hover:bg-white/20"
                        onClick={() => setIsMuted(!isMuted)}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </Button>
                      <div className="w-20 bg-white/30 rounded-full h-1">
                        <div 
                          className="bg-white rounded-full h-1"
                          style={{ width: `${volume}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:bg-white/20"
                      onClick={() => setIsFullscreen(!isFullscreen)}
                    >
                      {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Content Tabs */}
          <div className="bg-white border-t">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full justify-start border-b bg-transparent rounded-none h-12">
                <TabsTrigger value="overview" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="transcript" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  Transcript
                </TabsTrigger>
                <TabsTrigger value="notes" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  Notes
                </TabsTrigger>
                <TabsTrigger value="assignments" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  Assignments
                </TabsTrigger>
                <TabsTrigger value="qa" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  Q&A
                </TabsTrigger>
              </TabsList>

              <div className="p-6 max-h-64 overflow-y-auto">
                <TabsContent value="overview">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">{lmsData.course.currentLesson.title}</h3>
                    <p className="text-gray-600">
                      In this lesson, you'll learn how to set up your development environment for building the e-commerce platform. 
                      We'll cover installing Node.js, setting up React, and configuring essential VS Code extensions.
                    </p>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>Duration: {lmsData.course.currentLesson.duration}</span>
                      <span>Difficulty: Beginner</span>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="transcript">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Video Transcript</h3>
                    <div className="text-sm text-gray-700 leading-relaxed">
                      <p className="mb-3">
                        [00:00] Welcome to the E-Commerce Platform project. In this lesson, we'll set up our development environment 
                        to ensure you have all the necessary tools and configurations for building our application.
                      </p>
                      <p className="mb-3">
                        [00:30] First, let's start by installing Node.js. Node.js is essential for running our backend server 
                        and managing our project dependencies through npm...
                      </p>
                      <p>
                        [01:00] Next, we'll set up our React development environment. React will be the foundation of our 
                        frontend application...
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="notes">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Your Notes</h3>
                    <Textarea
                      placeholder="Take notes about this lesson..."
                      value={userNotes}
                      onChange={(e) => setUserNotes(e.target.value)}
                      rows={6}
                    />
                    <Button>
                      <Send className="w-4 h-4 mr-2" />
                      Save Notes
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="assignments">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Code Assignment</h3>
                    <p className="text-gray-600">
                      Submit your development environment setup. Include screenshots of your VS Code setup and a simple "Hello World" React app.
                    </p>
                    <Textarea
                      placeholder="Paste your code or add submission notes here..."
                      value={assignment}
                      onChange={(e) => setAssignment(e.target.value)}
                      rows={8}
                    />
                    <div className="flex gap-2">
                      <Button>
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Files
                      </Button>
                      <Button variant="outline">Submit Assignment</Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="qa">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Questions & Answers</h3>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <p className="font-medium text-sm">Q: What if I already have Node.js installed?</p>
                        <p className="text-sm text-gray-600 mt-1">A: Check your version with `node --version`. Make sure you have version 16 or higher.</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-medium text-sm">Q: Can I use a different code editor instead of VS Code?</p>
                        <p className="text-sm text-gray-600 mt-1">A: Yes, but we recommend VS Code for the best experience with our suggested extensions.</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Ask a Question
                    </Button>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>

        {/* Sidebar - Course Content */}
        <div className="w-80 bg-white border-l overflow-y-auto">
          <div className="p-4 border-b">
            <h2 className="font-semibold text-gray-900">Course Content</h2>
            <p className="text-sm text-gray-600 mt-1">
              {lmsData.userProgress.completedLessons} of {lmsData.userProgress.totalLessons} lessons completed
            </p>
          </div>

          <div className="space-y-1">
            {lmsData.course.sections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-4 text-left hover:bg-gray-50 border-b"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {expandedSections.includes(section.id) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                      <div>
                        <p className="font-medium text-sm">{section.title}</p>
                        <p className="text-xs text-gray-500">{section.duration}</p>
                      </div>
                    </div>
                    {section.completed && (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    )}
                  </div>
                </button>

                {expandedSections.includes(section.id) && (
                  <div className="bg-gray-50">
                    {section.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className={`p-3 pl-8 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
                          lesson.current ? 'bg-primary/10 border-l-4 border-l-primary' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {getLessonIcon(lesson.type)}
                            <div>
                              <p className={`text-sm ${lesson.current ? 'font-medium text-primary' : 'text-gray-700'}`}>
                                {lesson.title}
                              </p>
                              <p className="text-xs text-gray-500">{lesson.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {lesson.completed && (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            )}
                            {lesson.current && (
                              <Badge variant="secondary" className="text-xs">
                                Current
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress Summary */}
          <div className="p-4 border-t mt-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span className="font-medium">{lmsData.userProgress.overallProgress}%</span>
              </div>
              <Progress value={lmsData.userProgress.overallProgress} />
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Time Spent</p>
                  <p className="font-medium">{lmsData.userProgress.timeSpent}</p>
                </div>
                <div>
                  <p className="text-gray-600">Streak</p>
                  <p className="font-medium flex items-center gap-1">
                    <Award className="w-4 h-4 text-yellow-500" />
                    {lmsData.userProgress.streak} days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}