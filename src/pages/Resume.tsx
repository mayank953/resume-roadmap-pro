
import { useState } from "react";
import { FileText, Download, Eye, Edit, Plus, Trash2, Crown, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Resume() {
  const templates = [
    {
      id: 1,
      name: "Professional",
      description: "Clean and modern design perfect for corporate roles",
      preview: "/placeholder.svg",
      isPremium: false,
      category: "corporate"
    },
    {
      id: 2,
      name: "Creative",
      description: "Eye-catching design for creative professionals",
      preview: "/placeholder.svg", 
      isPremium: true,
      category: "creative"
    },
    {
      id: 3,
      name: "Technical",
      description: "Optimized for software engineers and developers",
      preview: "/placeholder.svg",
      isPremium: false,
      category: "tech"
    },
    {
      id: 4,
      name: "Executive",
      description: "Premium template for senior-level positions",
      preview: "/placeholder.svg",
      isPremium: true,
      category: "executive"
    }
  ];

  const myResumes = [
    {
      id: 1,
      title: "Software Engineer Resume",
      template: "Technical",
      lastModified: "2 hours ago",
      status: "completed"
    },
    {
      id: 2,
      title: "Frontend Developer CV",
      template: "Professional", 
      lastModified: "1 day ago",
      status: "draft"
    },
    {
      id: 3,
      title: "Full Stack Resume",
      template: "Creative",
      lastModified: "3 days ago", 
      status: "completed"
    }
  ];

  const aiSuggestions = [
    {
      section: "Skills",
      suggestion: "Add 'TypeScript' and 'GraphQL' to match job requirements",
      impact: "high"
    },
    {
      section: "Experience",
      suggestion: "Quantify your achievements with specific metrics",
      impact: "medium"
    },
    {
      section: "Summary",
      suggestion: "Include keywords like 'agile' and 'microservices'",
      impact: "high"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
          <p className="text-gray-600 mt-1">Create ATS-optimized resumes with AI assistance</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
          <Plus className="w-4 h-4 mr-2" />
          Create New Resume
        </Button>
      </div>

      <Tabs defaultValue="builder" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="builder">Builder</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="my-resumes">My Resumes</TabsTrigger>
          <TabsTrigger value="ai-optimizer">AI Optimizer</TabsTrigger>
        </TabsList>

        <TabsContent value="builder" className="space-y-6">
          {/* Resume Builder Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Edit className="w-5 h-5" />
                    Resume Builder
                  </CardTitle>
                  <CardDescription>Build your professional resume step by step</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Builder Steps */}
                  <div className="space-y-3">
                    {[
                      { step: 1, title: "Personal Information", completed: true },
                      { step: 2, title: "Professional Summary", completed: true },
                      { step: 3, title: "Work Experience", completed: false, current: true },
                      { step: 4, title: "Education", completed: false },
                      { step: 5, title: "Skills & Certifications", completed: false }
                    ].map((item) => (
                      <div key={item.step} className={`flex items-center gap-3 p-3 rounded-lg border ${
                        item.current ? 'border-blue-200 bg-blue-50' : 'border-gray-200'
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          item.completed ? 'bg-green-500 text-white' : 
                          item.current ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {item.completed ? '✓' : item.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                        </div>
                        {item.current && (
                          <Button size="sm">Continue</Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Live Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <FileText className="w-12 h-12 mx-auto mb-2" />
                      <p>Resume preview will appear here</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          {/* Template Gallery */}
          <Card>
            <CardHeader>
              <CardTitle>Professional Templates</CardTitle>
              <CardDescription>Choose from our collection of ATS-optimized resume templates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <Card key={template.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                        <FileText className="w-12 h-12 text-gray-400" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900">{template.name}</h4>
                          {template.isPremium && (
                            <Badge className="bg-yellow-100 text-yellow-700">
                              <Crown className="w-3 h-3 mr-1" />
                              Premium
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{template.description}</p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            Preview
                          </Button>
                          <Button size="sm" className="flex-1">
                            Use Template
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="my-resumes" className="space-y-6">
          {/* My Resumes */}
          <Card>
            <CardHeader>
              <CardTitle>My Resumes</CardTitle>
              <CardDescription>Manage and organize your created resumes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myResumes.map((resume) => (
                  <div key={resume.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{resume.title}</h4>
                        <p className="text-sm text-gray-600">
                          {resume.template} • Last modified {resume.lastModified}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={resume.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}>
                        {resume.status}
                      </Badge>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-optimizer" className="space-y-6">
          {/* AI Optimizer */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-blue-600" />
                AI Resume Optimizer
              </CardTitle>
              <CardDescription>
                Get AI-powered suggestions to improve your resume's effectiveness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">92%</div>
                    <div className="text-sm text-gray-600">ATS Compatibility</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-sm text-gray-600">Keyword Match</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">A+</div>
                    <div className="text-sm text-gray-600">Overall Score</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">AI Suggestions</h4>
                  {aiSuggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        suggestion.impact === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                      }`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900">{suggestion.section}</span>
                          <Badge className={suggestion.impact === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}>
                            {suggestion.impact} impact
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{suggestion.suggestion}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Apply
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
