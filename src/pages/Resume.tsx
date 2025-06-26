
import { FileText, Download, Eye, Plus, Edit, Copy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Resume() {
  const templates = [
    {
      id: 1,
      name: "Professional",
      description: "Clean and modern design perfect for corporate roles",
      preview: "/api/placeholder/300/400",
      isPremium: false
    },
    {
      id: 2,
      name: "Creative",
      description: "Eye-catching design for creative and design roles",
      preview: "/api/placeholder/300/400",
      isPremium: true
    },
    {
      id: 3,
      name: "Technical",
      description: "Optimized for engineering and technical positions",
      preview: "/api/placeholder/300/400",
      isPremium: false
    },
    {
      id: 4,
      name: "Executive",
      description: "Sophisticated layout for senior-level positions",
      preview: "/api/placeholder/300/400",
      isPremium: true
    }
  ];

  const savedResumes = [
    {
      title: "Software Engineer Resume",
      template: "Technical",
      lastModified: "2 days ago",
      status: "Complete"
    },
    {
      title: "Frontend Developer Resume",
      template: "Professional",
      lastModified: "1 week ago",
      status: "Draft"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
          <p className="text-gray-600 mt-1">Create ATS-optimized resumes with our AI-powered tools</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          Create New Resume
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Plus className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">Start from Scratch</CardTitle>
            </div>
            <CardDescription>
              Build your resume step by step with our guided process
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">Import Existing</CardTitle>
            </div>
            <CardDescription>
              Upload your current resume and we'll optimize it for you
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                <Copy className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">Use Template</CardTitle>
            </div>
            <CardDescription>
              Choose from our professionally designed templates
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Templates */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Choose a Template</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="absolute top-2 right-2">
                    {template.isPremium && (
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        Premium
                      </Badge>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-2">
                      <Button size="sm" variant="secondary">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm">
                        Use Template
                      </Button>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg">{template.name}</CardTitle>
                <CardDescription className="text-sm">
                  {template.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Saved Resumes */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Your Resumes</h2>
          <Button variant="outline" size="sm">Manage All</Button>
        </div>
        
        {savedResumes.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No resumes created yet</h3>
              <p className="text-gray-500 mb-4">Create your first resume to get started</p>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create New Resume
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {savedResumes.map((resume, index) => (
                  <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{resume.title}</h3>
                        <p className="text-sm text-gray-500">
                          {resume.template} • Modified {resume.lastModified}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={resume.status === 'Complete' ? 'default' : 'secondary'}>
                        {resume.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
