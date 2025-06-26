
import { Brain, Play, Clock, Award, Filter, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Interviews() {
  const interviewTypes = [
    {
      title: "Software Engineering",
      description: "Technical coding interviews with algorithm and data structure questions",
      duration: "45-60 min",
      difficulty: "Medium",
      color: "blue"
    },
    {
      title: "Frontend Development",
      description: "React, JavaScript, CSS, and modern frontend framework questions",
      duration: "30-45 min",
      difficulty: "Medium",
      color: "green"
    },
    {
      title: "Backend Development",
      description: "System design, databases, APIs, and server-side technologies",
      duration: "45-60 min",
      difficulty: "Hard",
      color: "purple"
    },
    {
      title: "Data Science",
      description: "Machine learning, statistics, Python, and data analysis questions",
      duration: "60 min",
      difficulty: "Hard",
      color: "orange"
    },
    {
      title: "Product Management",
      description: "Strategy, metrics, user experience, and product lifecycle questions",
      duration: "30-45 min",
      difficulty: "Medium",
      color: "pink"
    },
    {
      title: "Behavioral Interview",
      description: "Leadership, teamwork, problem-solving, and communication skills",
      duration: "30 min",
      difficulty: "Easy",
      color: "cyan"
    }
  ];

  const recentInterviews = [
    {
      type: "Frontend Development",
      score: 85,
      date: "2 days ago",
      status: "Completed"
    },
    {
      type: "Software Engineering",
      score: 78,
      date: "1 week ago",
      status: "Completed"
    },
    {
      type: "Behavioral Interview",
      score: 92,
      date: "2 weeks ago",
      status: "Completed"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
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
          Quick Start Interview
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search interview types..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </Button>
      </div>

      {/* Interview Types Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Choose Interview Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interviewTypes.map((interview, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{interview.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className={getDifficultyColor(interview.difficulty)}>
                          {interview.difficulty}
                        </Badge>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {interview.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-sm text-gray-600 leading-relaxed">
                  {interview.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Start Interview
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Interviews */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Interviews</h2>
          <Button variant="outline" size="sm">View All</Button>
        </div>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {recentInterviews.map((interview, index) => (
                <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Brain className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{interview.type}</h3>
                      <p className="text-sm text-gray-500">{interview.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="font-medium">{interview.score}%</span>
                      </div>
                      <p className="text-sm text-gray-500">{interview.status}</p>
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
      </div>
    </div>
  );
}
