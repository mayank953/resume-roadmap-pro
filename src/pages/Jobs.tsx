import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Filter,
  BookOpen,
  MessageCircle,
  Bookmark,
  Share2,
  ExternalLink,
  ChevronRight,
  Building,
  Users,
  TrendingUp,
  Zap,
  Heart,
  Eye,
  Briefcase,
  X,
  CheckCircle,
  MoreHorizontal,
} from "lucide-react";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [selectedResume, setSelectedResume] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [activeTab, setActiveTab] = useState("for-you");

  // Mock data for jobs
  const jobs = [
    {
      id: 1,
      title: "Founding AI Engineer ( night shift",
      company: "Recro",
      location: "India (Remote)",
      type: "Full-time",
      salary: "₹15L - ₹25L",
      matchScore: 92,
      logo: "R",
      technologies: ["Python", "TensorFlow", "PyTorch", "AWS"],
      posted: "3 weeks ago",
      applicants: "Over 100",
      description: "We are hiring a founding AI engineer ( night shift). Key Responsibilities: Architect and build agentic AI systems for audit automation, Process and structure massive PDFs and Excel datasets, Run real-time experiments to optimize reliability, Build scalable, error-resistant infrastructure, Collaborate cross-functionally to align technical design with product goals.",
      requirements: ["5+ years AI/ML experience", "Python expertise", "Deep learning frameworks"],
      responsibilities: [
        "Architect and build agentic AI systems for audit automation",
        "Process and structure massive PDFs and Excel datasets", 
        "Run real-time experiments to optimize reliability",
        "Build scalable, error-resistant infrastructure",
        "Collaborate cross-functionally to align technical design with product goals"
      ],
      rounds: ["Technical Assessment", "Technical Interview", "Cultural Fit", "Final Round"]
    },
    {
      id: 2,
      title: "Lead/Principal AI Engineer",
      company: "Uplers",
      location: "Ranchi, Jharkhand, India (Remote)",
      type: "Full-time",
      salary: "₹90M/yr - ₹10M/yr",
      matchScore: 87,
      logo: "U",
      technologies: ["Python", "Machine Learning", "Deep Learning", "NLP"],
      posted: "1 week ago",
      applicants: 32,
      description: "Join our fast-growing startup as a Lead AI Engineer...",
      requirements: ["8+ years AI/ML experience", "Leadership experience", "Cloud platforms"],
      responsibilities: [
        "Lead AI engineering team",
        "Design ML architecture",
        "Mentor junior engineers"
      ],
      rounds: ["Code Challenge", "Technical Interview", "Team Interview", "Leadership Round"]
    },
    {
      id: 3,
      title: "Remote Senior Software Engineer (LLM) - 35501",
      company: "Turing",
      location: "India (Remote)",
      type: "Full-time",
      salary: "$80,000 - $150,000",
      matchScore: 85,
      logo: "T",
      technologies: ["Python", "LLM", "Transformers", "PyTorch"],
      posted: "2 days ago",
      applicants: 89,
      description: "Work on cutting-edge LLM applications...",
      requirements: ["LLM experience", "Python proficiency", "ML frameworks"],
      responsibilities: [
        "Develop LLM applications",
        "Optimize model performance",
        "Collaborate with research team"
      ],
      rounds: ["Technical Screen", "Coding Interview", "System Design", "Final Interview"]
    },
    {
      id: 4,
      title: "Computer Science Specialist – AI Trainer",
      company: "Invisible Expert Marketplace",
      location: "India (Remote)",
      type: "Contract",
      salary: "₹25 - ₹35/hour",
      matchScore: 78,
      logo: "I",
      technologies: ["AI/ML", "Python", "Training", "Education"],
      posted: "5 days ago",
      applicants: 45,
      description: "Train AI models and mentor upcoming engineers...",
      requirements: ["CS background", "AI training experience", "Communication skills"],
      responsibilities: [
        "Train AI models",
        "Create training materials",
        "Mentor students"
      ],
      rounds: ["Screening Call", "Technical Assessment", "Training Demo"]
    },
    {
      id: 5,
      title: "Staff ML Engineer",
      company: "Adalat AI",
      location: "India (Remote)",
      type: "Full-time",
      salary: "₹20L - ₹35L",
      matchScore: 82,
      logo: "A",
      technologies: ["Machine Learning", "Python", "TensorFlow", "Kubernetes"],
      posted: "1 week ago",
      applicants: 67,
      description: "Lead ML initiatives at a legal tech startup...",
      requirements: ["Senior ML experience", "Production ML systems", "Legal domain knowledge preferred"],
      responsibilities: [
        "Lead ML engineering",
        "Build production ML systems",
        "Mentor engineering team"
      ],
      rounds: ["Technical Screen", "System Design", "ML Case Study", "Final Round"]
    }
  ];

  const recommendedCourses = [
    { id: 1, title: "Advanced Machine Learning", duration: "6 weeks", level: "Advanced" },
    { id: 2, title: "Deep Learning Specialization", duration: "8 weeks", level: "Intermediate" },
    { id: 3, title: "MLOps Engineering", duration: "4 weeks", level: "Advanced" }
  ];

  React.useEffect(() => {
    if (jobs.length > 0 && !selectedJob) {
      setSelectedJob(jobs[0]);
    }
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesExperience = !experienceFilter || job.type.toLowerCase().includes(experienceFilter.toLowerCase());
    return matchesSearch && matchesLocation && matchesExperience;
  });

  const TechIcon = ({ tech }) => (
    <Badge variant="secondary" className="text-xs px-2 py-1">
      {tech}
    </Badge>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Search */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search jobs, companies, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-10"
              />
            </div>
            <div className="w-full md:w-64 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="pl-10 h-10"
              />
            </div>
            <Button className="h-10 px-6">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 h-12">
              <TabsTrigger value="for-you" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                For you
              </TabsTrigger>
              <TabsTrigger value="easy-apply" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Easy Apply
              </TabsTrigger>
              <TabsTrigger value="remote" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Remote
              </TabsTrigger>
              <TabsTrigger value="part-time" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Part-time
              </TabsTrigger>
              <TabsTrigger value="sustainability" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Sustainability
              </TabsTrigger>
              <TabsTrigger value="government" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                Government
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Left Panel - Job List */}
          <div className="lg:col-span-1 bg-white rounded-lg border h-full overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold">Top job picks for you</h2>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                Based on your profile, preferences, and activity like applies, searches, and saves
              </p>
              <p className="text-sm text-gray-500 mt-1">{filteredJobs.length} results</p>
            </div>
            
            <div className="overflow-y-auto h-full pb-20">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedJob?.id === job.id ? 'bg-blue-50 border-r-2 border-r-blue-600' : ''
                  }`}
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center text-white text-lg font-bold">
                        {job.logo}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 hover:text-blue-600 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-sm text-gray-600">{job.company}</p>
                        <p className="text-sm text-gray-500">{job.location}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                      Actively reviewing applications
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-2">
                    Viewed • Promoted • Easy Apply
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {job.technologies.slice(0, 3).map((tech) => (
                        <TechIcon key={tech} tech={tech} />
                      ))}
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {job.matchScore}% match
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Job Details */}
          <div className="lg:col-span-2 bg-white rounded-lg border h-full overflow-hidden">
            {selectedJob && (
              <>
                <div className="p-6 border-b">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-red-600 rounded flex items-center justify-center text-white text-2xl font-bold">
                        {selectedJob.logo}
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-1">
                          {selectedJob.title}
                        </h1>
                        <p className="text-lg text-gray-600">{selectedJob.company}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                          <span>{selectedJob.location}</span>
                          <span>•</span>
                          <span>{selectedJob.posted}</span>
                          <span>•</span>
                          <span>{selectedJob.applicants} applicants</span>
                        </div>
                        <p className="text-sm text-green-600 mt-1">
                          Promoted by hirer • Actively reviewing applications
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <Badge variant="outline">Remote</Badge>
                    <Badge variant="outline">Full-time</Badge>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Easy Apply
                    </Button>
                    <Button variant="outline">
                      Save
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 overflow-y-auto h-full pb-20">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">How your profile and resume fit this job</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Get AI-powered advice on this job and more exclusive features with Premium.{" "}
                        <Link to="#" className="text-blue-600 hover:underline">
                          Try Premium for ₹0
                        </Link>
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="justify-start">
                          <Star className="h-4 w-4 mr-2 text-yellow-500" />
                          Tailor my resume to this job
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <Star className="h-4 w-4 mr-2 text-yellow-500" />
                          Am I a good fit for this job?
                        </Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Meet the hiring team</h3>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src="/placeholder-avatar.jpg" />
                            <AvatarFallback>AS</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">Aayushi Saxena</h4>
                            <p className="text-sm text-gray-600">TA Consultant @ {selectedJob.company}</p>
                            <p className="text-sm text-gray-500">Job poster • 11 mutual connections</p>
                          </div>
                        </div>
                        <Button variant="outline">Message</Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">About the job</h3>
                      <div className="prose max-w-none">
                        <p className="text-gray-700 mb-4">
                          {selectedJob.description}
                        </p>
                        
                        <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          {selectedJob.responsibilities?.map((resp, index) => (
                            <li key={index} className="text-gray-700">{resp}</li>
                          ))}
                        </ul>
                        
                        <h4 className="font-semibold mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {selectedJob.technologies.map((tech) => (
                            <TechIcon key={tech} tech={tech} />
                          ))}
                        </div>
                        
                        <h4 className="font-semibold mb-2">Salary</h4>
                        <p className="text-gray-700 mb-4">{selectedJob.salary}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;