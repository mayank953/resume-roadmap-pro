
import { useState } from "react";
import { Brain, Play, Clock, Trophy, Star, ChevronRight, Mic, Video, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Interviews() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const interviewCategories = [
    { id: "nlp", name: "NLP", color: "bg-purple-100 text-purple-700" },
    { id: "qa", name: "Q&A", color: "bg-blue-100 text-blue-700" },
    { id: "backend", name: "Backend Development", color: "bg-green-100 text-green-700" },
    { id: "frontend", name: "Frontend Development", color: "bg-orange-100 text-orange-700" },
  ];

  const recommendedTopics = [
    {
      category: "nlp",
      title: "Text Preprocessing and Tokenization",
      description: "Master the fundamentals of text understanding and preprocessing techniques",
      difficulty: "medium",
      duration: "15 mins",
      completed: false
    },
    {
      category: "nlp", 
      title: "Word Embeddings and Language Models",
      description: "Learn about representing words and text as numbers",
      difficulty: "hard",
      duration: "20 mins",
      completed: false
    },
    {
      category: "qa",
      title: "Self-Introduction and Background",
      description: "Practice your ability to effectively introduce yourself and background",
      difficulty: "easy",
      duration: "10 mins",
      completed: true
    },
    {
      category: "qa",
      title: "Strengths and Weaknesses",
      description: "The ability to build trust and assess capabilities",
      difficulty: "easy",
      duration: "12 mins", 
      completed: false
    },
    {
      category: "backend",
      title: "Software Engineering Interview",
      description: "This Mock Software Engineer Mock Interview is ideal for new grads and entry-level",
      difficulty: "hard",
      duration: "25 mins",
      completed: false
    },
    {
      category: "backend",
      title: "REST APIs",
      description: "In this interview, you will explore the concept of RESTful API design",
      difficulty: "medium",
      duration: "18 mins",
      completed: false
    }
  ];

  const recentInterviews = [
    { title: "Frontend Developer Interview", score: 85, date: "2 hours ago", duration: "20 mins" },
    { title: "React Fundamentals", score: 92, date: "1 day ago", duration: "15 mins" },
    { title: "System Design Basics", score: 78, date: "3 days ago", duration: "25 mins" },
  ];

  const filteredTopics = selectedCategory === "all" 
    ? recommendedTopics 
    : recommendedTopics.filter(topic => topic.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "easy": return "bg-green-100 text-green-700";
      case "medium": return "bg-yellow-100 text-yellow-700"; 
      case "hard": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Interview Practice</h1>
          <p className="text-gray-600 mt-1">Practice with our AI interviewer and get instant feedback</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
          <Play className="w-4 h-4 mr-2" />
          Start New Interview
        </Button>
      </div>

      <Tabs defaultValue="practice" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="practice" className="space-y-6">
          {/* Quick Start Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-purple-500">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Mic className="w-5 h-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Voice Interview</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Practice speaking and communication skills with voice-based interviews
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Start Voice Practice
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-blue-500">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Video className="w-5 h-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Video Interview</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Full video interview simulation with body language feedback
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Start Video Practice
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-green-500">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Text Interview</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Written interview practice focusing on technical knowledge
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Start Text Practice
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Popular Topics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Popular Interview Topics
              </CardTitle>
              <CardDescription>Most practiced topics by our community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendedTopics.slice(0, 4).map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{topic.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{topic.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className={getDifficultyColor(topic.difficulty)}>
                          {topic.difficulty}
                        </Badge>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {topic.duration}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 ml-4" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          {/* Personalized Recommendations */}
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Brain className="w-6 h-6 text-purple-600" />
                Your Personalized Recommendations
              </CardTitle>
              <CardDescription>
                AI-curated courses, playlists, and interview topics based on your skills and interests.
              </CardDescription>
              <div className="flex gap-2 mt-3">
                <Badge className="bg-purple-100 text-purple-700">AI-Powered</Badge>
                <Badge className="bg-blue-100 text-blue-700">Topic-Focused</Badge>
                <Badge className="bg-green-100 text-green-700">Skill Enhancement</Badge>
              </div>
            </CardHeader>
          </Card>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("all")}
            >
              All Topics
            </Button>
            {interviewCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Recommended Interview Topics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎯 Recommended Interview Topics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTopics.map((topic, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <Badge className={interviewCategories.find(cat => cat.id === topic.category)?.color}>
                          {interviewCategories.find(cat => cat.id === topic.category)?.name}
                        </Badge>
                        {topic.completed && <Badge className="bg-green-100 text-green-700">✓ Completed</Badge>}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{topic.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{topic.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Badge className={getDifficultyColor(topic.difficulty)}>
                            {topic.difficulty}
                          </Badge>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {topic.duration}
                          </span>
                        </div>
                        <Button size="sm" variant="outline">
                          {topic.completed ? "Review" : "Start"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          {/* Recent Interviews */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Recent Interview Sessions
              </CardTitle>
              <CardDescription>Your latest interview practice sessions and scores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInterviews.map((interview, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Brain className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{interview.title}</h4>
                        <p className="text-sm text-gray-600">{interview.date} • {interview.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-semibold text-gray-900">{interview.score}%</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
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
