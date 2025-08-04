import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Trophy, Users, Zap, CheckCircle2, Circle, Calendar as CalendarIcon } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { BrandBuilder } from "@/components/BrandBuilder";

const Index = () => {
  const [checkedItems, setCheckedItems] = useState({
    resume: true,
    interview: true,
    linkedin: false,
    education: false,
    roadmap: true,
    github: false,
  });

  const totalItems = Object.keys(checkedItems).length;
  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const progressPercentage = Math.round((completedItems / totalItems) * 100);

  const toggleItem = (key: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const ChecklistItem = ({ 
    id, 
    title, 
    description, 
    action, 
    checked 
  }: { 
    id: string; 
    title: string; 
    description: string; 
    action: string; 
    checked: boolean; 
  }) => (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
      <button
        onClick={() => toggleItem(id)}
        className="mt-0.5 transition-colors"
      >
        {checked ? (
          <CheckCircle2 className="w-5 h-5 text-green-500" />
        ) : (
          <Circle className="w-5 h-5 text-gray-300 hover:text-gray-400" />
        )}
      </button>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium ${checked ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
          {title}
        </p>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
        <button className="text-xs text-blue-600 hover:text-blue-700 mt-1">
          {action}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200/60 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Welcome back, Mayank!</h1>
            <p className="text-gray-600 mt-1">Ready to advance your career today?</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CalendarIcon className="w-4 h-4" />
            <span>Monday, August 4, 2025</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Resume Optimization Banner */}
        <Card className="mb-6 border-orange-200 bg-orange-50/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Optimize your Resume ✨</h3>
                  <p className="text-sm text-gray-600">Increase your chances of getting selected</p>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Optimize Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats and Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard
                title="Total Interviews"
                value="5"
                icon={Users}
                color="blue"
              />
              <StatCard
                title="Resumes Created"
                value="9"
                icon={FileText}
                color="blue"
              />
              <StatCard
                title="Roadmap Progress"
                value="0%"
                icon={Trophy}
                color="blue"
              />
              <StatCard
                title="Credits Remaining"
                value="2913"
                icon={Zap}
                color="blue"
              />
            </div>

            {/* AI Interview Hero Card */}
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">15-Minute AI Interview</h2>
                    <p className="text-blue-100 mb-6">Quick interview based on your resume and job description.</p>
                    <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                      Try Now
                    </Button>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-32 h-32 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="professional-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Resume Builder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Create ATS-optimized resumes with professional templates</p>
                  <Button variant="outline" className="w-full">
                    Build Resume
                  </Button>
                </CardContent>
              </Card>

              <Card className="professional-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Career Roadmap</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Follow personalized learning paths for your career goals</p>
                  <Button variant="outline" className="w-full">
                    View Roadmap
                  </Button>
                </CardContent>
              </Card>

              <Card className="professional-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Interview Topics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Explore interview questions by topic</p>
                  <Button variant="outline" className="w-full">
                    Explore Topics
                  </Button>
                </CardContent>
              </Card>

              <Card className="professional-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Complete your checklist</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Complete a few steps to land your next job</p>
                  <Button variant="outline" className="w-full">
                    Update Interests
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Checklist */}
          <div className="space-y-6">
            <Card className="professional-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Complete your checklist</CardTitle>
                <p className="text-sm text-gray-600">Complete a few steps to land your next job</p>
                <div className="mt-3">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">{progressPercentage}%</span>
                    <span className="text-gray-500">{completedItems}/{totalItems} completed</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <ChecklistItem
                  id="resume"
                  title="Create your first resume"
                  description="Create an ATS-optimized resume"
                  action="Add Profile"
                  checked={checkedItems.resume}
                />
                <ChecklistItem
                  id="interview"
                  title="Complete your first interview"
                  description="Practice with our AI interviewer"
                  action="Add Profile"
                  checked={checkedItems.interview}
                />
                <ChecklistItem
                  id="linkedin"
                  title="Add your LinkedIn profile"
                  description="Connect your professional network"
                  action="Add Profile"
                  checked={checkedItems.linkedin}
                />
                <ChecklistItem
                  id="education"
                  title="Add your education details"
                  description="Complete your profile for better recommendations"
                  action="Add Education"
                  checked={checkedItems.education}
                />
                <ChecklistItem
                  id="roadmap"
                  title="Create your career roadmap"
                  description="Plan your career development path"
                  action="Add Profile"
                  checked={checkedItems.roadmap}
                />
                <ChecklistItem
                  id="github"
                  title="Add your GitHub profile"
                  description="Showcase your technical projects"
                  action="Add GitHub"
                  checked={checkedItems.github}
                />
              </CardContent>
            </Card>

            {/* Brand Building Card */}
            <BrandBuilder 
              context="dashboard"
              achievement={{
                type: "roadmap_progress",
                title: "Started their career journey",
                description: "Welcome to Evolvue! Ready to build your professional brand?",
                progress: progressPercentage
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
