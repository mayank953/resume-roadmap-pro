import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MapPin,
  Clock,
  Users,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Brain,
  CheckCircle,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Trophy,
} from "lucide-react";

const JobsLanding = () => {
  const features = [
    {
      icon: Target,
      title: "AI-Powered Job Matching",
      description: "Get personalized job recommendations based on your skills, experience, and career goals",
    },
    {
      icon: Brain,
      title: "Smart Skill Gap Analysis",
      description: "Identify missing skills and get tailored learning paths to bridge the gap",
    },
    {
      icon: TrendingUp,
      title: "Career Growth Tracking",
      description: "Track your progress and build your professional brand with every application",
    },
    {
      icon: Shield,
      title: "Interview Preparation",
      description: "Get company-specific interview prep and round-by-round guidance",
    },
  ];

  const jobCategories = [
    { name: "Software Engineering", count: "2,847", icon: "💻" },
    { name: "Data Science", count: "1,234", icon: "📊" },
    { name: "Product Management", count: "856", icon: "🚀" },
    { name: "Design", count: "643", icon: "🎨" },
    { name: "Marketing", count: "521", icon: "📈" },
    { name: "Sales", count: "412", icon: "💼" },
  ];

  const topCompanies = [
    { name: "Google", logo: "🔍", openings: 45 },
    { name: "Microsoft", logo: "🪟", openings: 38 },
    { name: "Amazon", logo: "📦", openings: 52 },
    { name: "Meta", logo: "🌐", openings: 29 },
    { name: "Netflix", logo: "🎬", openings: 18 },
    { name: "Uber", logo: "🚗", openings: 34 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Find Your Dream Job
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              AI-powered job matching with personalized learning paths. Build your brand while you grow your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/jobs/browse">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                  <Search className="mr-2 h-5 w-5" />
                  Start Job Search
                </Button>
              </Link>
              <Link to="/resume">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Upload Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-gray-600">Active Jobs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">95%</div>
              <div className="text-gray-600">Match Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-600">Successful Placements</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Evolvue Jobs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just a job board - we're your career growth partner
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Job Categories */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find opportunities in your field of expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((category, index) => (
              <Link key={index} to="/jobs/browse" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{category.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{category.name}</h3>
                        <p className="text-gray-600">{category.count} jobs</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Top Companies */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top Companies Hiring
            </h2>
            <p className="text-xl text-gray-600">
              Join world-class companies and accelerate your career
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCompanies.map((company, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{company.logo}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{company.name}</h3>
                      <p className="text-gray-600">{company.openings} open positions</p>
                    </div>
                  </div>
                  <Badge variant="secondary">{company.openings}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-4xl font-bold mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of professionals who've found their perfect match with Evolvue Jobs
          </p>
          <Link to="/jobs/browse">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              <Briefcase className="mr-2 h-5 w-5" />
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsLanding;