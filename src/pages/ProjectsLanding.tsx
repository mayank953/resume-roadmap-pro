import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code2, 
  PlayCircle, 
  BookOpen, 
  Users, 
  Clock, 
  Star,
  Zap,
  Database,
  Globe,
  Smartphone,
  Brain,
  GitBranch,
  Award,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Target,
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Active Learners", value: "25K+", icon: Users },
  { label: "Projects Completed", value: "15K+", icon: Award },
  { label: "Success Rate", value: "94%", icon: TrendingUp },
  { label: "AI Mentoring Hours", value: "100K+", icon: Brain }
];

const features = [
  {
    icon: Brain,
    title: "AI-Powered Mentor",
    description: "Get personalized guidance and instant feedback throughout your learning journey"
  },
  {
    icon: Code2,
    title: "Real-World Projects",
    description: "Build production-ready applications with industry best practices"
  },
  {
    icon: MessageSquare,
    title: "Mock Interviews",
    description: "Practice technical interviews with AI-powered scenarios tailored to your skill level"
  },
  {
    icon: Target,
    title: "Skill Assessment",
    description: "Track your progress with comprehensive skill evaluations and personalized recommendations"
  },
  {
    icon: BookOpen,
    title: "Interactive Learning",
    description: "Engage with video lessons, quizzes, and hands-on coding challenges"
  },
  {
    icon: Lightbulb,
    title: "Project-Based Learning",
    description: "Learn by building real applications that you can showcase in your portfolio"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Full Stack Developer at Meta",
    content: "The AI mentor helped me understand complex concepts and land my dream job. The mock interviews were incredibly realistic!",
    avatar: "SC"
  },
  {
    name: "David Rodriguez",
    role: "Software Engineer at Google",
    content: "Going from beginner to landing a FAANG job in 6 months seemed impossible, but the structured learning path made it achievable.",
    avatar: "DR"
  },
  {
    name: "Emily Zhang",
    role: "Backend Engineer at Stripe",
    content: "The project-based approach helped me build a strong portfolio. I learned more in 3 months than I did in a year of tutorials.",
    avatar: "EZ"
  }
];

export default function ProjectsLanding() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="px-4 py-2 text-sm">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Learning Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Your AI mentor for
                <span className="block text-primary">project mastery</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Master real-world development skills through AI-guided projects, personalized mentoring, and interview preparation
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects/browse">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Learning Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Can You Do with <span className="text-primary">ProjectMaster</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to master development skills and land your dream job
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Mock Interviews Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">AI-Powered Mock Interviews</span> - Tailored to Your Profile
            </h2>
            <p className="text-xl text-muted-foreground">
              Practice with realistic scenarios and get instant feedback to improve your interview skills
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Personalized Questions</h3>
                    <p className="text-muted-foreground">
                      AI generates questions based on your skill level, target role, and learning progress
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Real-time Feedback</h3>
                    <p className="text-muted-foreground">
                      Get instant analysis of your answers with improvement suggestions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Company-Specific Prep</h3>
                    <p className="text-muted-foreground">
                      Practice with questions tailored to your target companies and roles
                    </p>
                  </div>
                </div>
              </div>
              <Button className="w-full sm:w-auto">
                Start Mock Interview
                <MessageSquare className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-primary" />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="font-semibold">Mock Interview in Progress</h3>
                <p className="text-sm text-muted-foreground">
                  AI analyzes your responses and provides personalized feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories from Our <span className="text-primary">Community</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See how ProjectMaster has transformed careers and helped developers land their dream jobs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers who have transformed their careers with AI-powered learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects/browse">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Explore Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Brain className="mr-2 w-5 h-5" />
              Try AI Mentor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}