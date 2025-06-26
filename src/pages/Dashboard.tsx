
import { Brain, FileText, Map, Calendar, Trophy, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Interviews",
      value: "23",
      icon: Brain,
      trend: { value: "+12%", isPositive: true },
      color: "blue"
    },
    {
      title: "Resumes Created",
      value: "5",
      icon: FileText,
      trend: { value: "+25%", isPositive: true },
      color: "blue"
    },
    {
      title: "Roadmap Progress",
      value: "67%",
      icon: Map,
      trend: { value: "+8%", isPositive: true },
      color: "blue"
    },
    {
      title: "Credits Remaining",
      value: "499",
      icon: Trophy,
      color: "blue"
    }
  ];

  const checklistItems = [
    { task: "Download Chrome Extension", completed: false, description: "Optimize your LinkedIn profile, save jobs, and more" },
    { task: "Optimize your LinkedIn profile", completed: true, description: "Better chances of getting contacted by recruiters" },
    { task: "Add your first job", completed: false, description: "Track your job search journey and find insights" },
    { task: "Complete Profile", completed: false, description: "Complete your profile for personalized experience" },
    { task: "Add your first contact", completed: false, description: "Add contacts to follow up with for later" },
    { task: "Join Community", completed: true, description: "Connect with others in your job search journey" },
  ];

  const completedCount = checklistItems.filter(item => item.completed).length;
  const progressPercentage = (completedCount / checklistItems.length) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Welcome back, Mayank!</h1>
          <p className="text-gray-600 mt-1">Ready to advance your career today?</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>{new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
      </div>

      {/* Optimization Banner */}
      <Card className="border-blue-200 bg-blue-50/30">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Optimize your Resume 🚀</p>
                <p className="text-sm text-gray-600">Increase your chances of getting selected</p>
              </div>
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Optimize Now
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Welcome Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="professional-card">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Welcome</h2>
              <p className="text-gray-600 mb-6">To your hub for career insights, activities, and more.</p>
              <Button variant="outline" className="border-gray-300">
                View All Features
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Main Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="feature-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-medium text-gray-900">AI Interviews</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Practice with AI interviewer and get instant feedback</p>
              <Button 
                size="sm" 
                variant="outline"
                className="w-full"
                onClick={() => navigate('/interviews')}
              >
                Start Interview
              </Button>
            </div>

            <div className="feature-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-medium text-gray-900">Resume Builder</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Create ATS-optimized resumes with professional templates</p>
              <Button 
                size="sm" 
                variant="outline"
                className="w-full"
                onClick={() => navigate('/resume')}
              >
                Build Resume
              </Button>
            </div>

            <div className="feature-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Map className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-medium text-gray-900">Career Roadmap</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Follow personalized learning paths for your career goals</p>
              <Button 
                size="sm" 
                variant="outline"
                className="w-full"
                onClick={() => navigate('/roadmap')}
              >
                View Roadmap
              </Button>
            </div>

            <div className="feature-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-medium text-gray-900">Job Analytics</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Track your applications and get insights</p>
              <Button size="sm" variant="outline" className="w-full">
                Add A New Job
              </Button>
            </div>
          </div>
        </div>

        {/* Checklist */}
        <Card className="professional-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-medium">Complete your checklist</CardTitle>
            <CardDescription className="text-sm">Complete a few steps to land your next job</CardDescription>
            <div className="mt-3">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">{Math.round(progressPercentage)}%</span>
                <span className="text-gray-500">{completedCount}/{checklistItems.length} completed</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                  item.completed 
                    ? 'bg-green-100 border-green-500' 
                    : 'border-gray-300'
                }`}>
                  {item.completed && <CheckCircle2 className="w-3 h-3 text-green-600" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${item.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                    {item.task}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                  {!item.completed && (
                    <Button 
                      size="sm" 
                      variant="link" 
                      className="h-auto p-0 text-primary text-xs mt-1"
                    >
                      {item.task === "Add your first job" ? "Add Now" : 
                       item.task === "Download Chrome Extension" ? "Download Now" :
                       item.task === "Optimize your LinkedIn profile" ? "Optimize Now" :
                       item.task === "Complete Profile" ? "Complete Now" :
                       item.task === "Add your first contact" ? "Add Now" :
                       "Join Now"}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
