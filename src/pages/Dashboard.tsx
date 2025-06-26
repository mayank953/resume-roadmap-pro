
import { Brain, FileText, Map, BarChart3, Calendar, Trophy, Users, Clock } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Interviews",
      value: "23",
      icon: Brain,
      trend: { value: "+12%", isPositive: true },
      color: "purple"
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
      color: "green"
    },
    {
      title: "Credits Remaining",
      value: "499",
      icon: Trophy,
      color: "orange"
    }
  ];

  const recentActivity = [
    { action: "Completed Frontend Developer Interview", time: "2 hours ago", icon: Brain },
    { action: "Updated Software Engineer Resume", time: "1 day ago", icon: FileText },
    { action: "Progressed React Roadmap", time: "3 days ago", icon: Map },
    { action: "Earned Certificate", time: "1 week ago", icon: Trophy },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Mayank!</h1>
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Ready for Your Next Interview?"
          description="Practice with our AI interviewer and get instant feedback on your responses to ace your next interview."
          buttonText="Start New Interview"
          icon={Brain}
          gradient="from-purple-500 to-blue-600"
          onButtonClick={() => navigate('/interviews')}
        />
        
        <DashboardCard
          title="Create a Professional Resume"
          description="Our AI-powered tools help you build an ATS-optimized resume in minutes with professional templates."
          buttonText="Build New Resume"
          icon={FileText}
          gradient="from-blue-500 to-cyan-600"
          onButtonClick={() => navigate('/resume')}
        />
        
        <DashboardCard
          title="Follow Your Career Roadmap"
          description="Get personalized learning paths and track your progress towards your dream career goals."
          buttonText="View Roadmap"
          icon={Map}
          gradient="from-green-500 to-emerald-600"
          onButtonClick={() => navigate('/roadmap')}
        />
      </div>

      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Your latest achievements and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <activity.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Performance Overview
            </CardTitle>
            <CardDescription>Your progress this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Interview Performance</span>
                  <span className="text-sm text-gray-500">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Resume Optimization</span>
                  <span className="text-sm text-gray-500">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Roadmap Completion</span>
                  <span className="text-sm text-gray-500">67%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
