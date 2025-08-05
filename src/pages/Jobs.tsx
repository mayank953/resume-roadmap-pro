import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Star,
  BookOpen,
  MessageCircle,
  Bookmark,
  Share2,
  ExternalLink,
  ChevronRight,
  Building,
  Users,
  TrendingUp,
  Briefcase,
  CheckCircle,
  MoreHorizontal,
  FileText,
  Target,
  Award,
  Code,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResume, setSelectedResume] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  // Mock data for user resumes from Evolvue platform
  const userResumes = [
    { id: 1, name: "AI Engineer Resume", skills: ["Python", "TensorFlow", "PyTorch", "AWS"], created: "2024-01-15" },
    { id: 2, name: "Full Stack Developer Resume", skills: ["React", "Node.js", "MongoDB", "TypeScript"], created: "2024-01-10" },
    { id: 3, name: "Data Scientist Resume", skills: ["Python", "R", "SQL", "Machine Learning"], created: "2024-01-05" }
  ];

  // Mock data for jobs
  const jobs = [
    {
      id: 1,
      title: "Founding AI Engineer",
      company: "Recro",
      location: "India (Remote)",
      type: "Full-time",
      salary: "₹15L - ₹25L",
      matchScore: 92,
      logo: "R",
      technologies: ["Python", "TensorFlow", "PyTorch", "AWS"],
      posted: "3 weeks ago",
      applicants: "Over 100",
      description: "We are hiring a founding AI engineer. Key Responsibilities: Architect and build agentic AI systems for audit automation, Process and structure massive PDFs and Excel datasets, Run real-time experiments to optimize reliability, Build scalable, error-resistant infrastructure, Collaborate cross-functionally to align technical design with product goals.",
      requirements: ["5+ years AI/ML experience", "Python expertise", "Deep learning frameworks"],
      responsibilities: [
        "Architect and build agentic AI systems for audit automation",
        "Process and structure massive PDFs and Excel datasets", 
        "Run real-time experiments to optimize reliability",
        "Build scalable, error-resistant infrastructure",
        "Collaborate cross-functionally to align technical design with product goals"
      ],
      rounds: ["Technical Assessment", "Technical Interview", "Cultural Fit", "Final Round"],
      skillGaps: ["MLOps", "Kubernetes"],
      recommendedCourses: ["Advanced MLOps", "Kubernetes for ML"],
      recommendedProjects: ["AI Audit System", "PDF Processing Pipeline"]
    },
    {
      id: 2,
      title: "Lead/Principal AI Engineer",
      company: "Uplers",
      location: "Ranchi, Jharkhand, India (Remote)",
      type: "Full-time",
      salary: "₹90L/yr - ₹10L/yr",
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
      rounds: ["Code Challenge", "Technical Interview", "Team Interview", "Leadership Round"],
      skillGaps: ["Team Leadership", "System Design"],
      recommendedCourses: ["Engineering Leadership", "System Design for ML"],
      recommendedProjects: ["Team Management Dashboard", "ML Architecture Design"]
    },
    {
      id: 3,
      title: "Remote Senior Software Engineer (LLM)",
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
      rounds: ["Technical Screen", "Coding Interview", "System Design", "Final Interview"],
      skillGaps: ["Transformer Architecture", "Model Optimization"],
      recommendedCourses: ["Advanced NLP", "Transformer Models"],
      recommendedProjects: ["LLM Chatbot", "Text Generation System"]
    }
  ];

  React.useEffect(() => {
    if (jobs.length > 0 && !selectedJob) {
      setSelectedJob(jobs[0]);
    }
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const getMatchScore = (job) => {
    if (!selectedResume) return 0;
    const resume = userResumes.find(r => r.id.toString() === selectedResume);
    if (!resume) return 0;
    
    const matchingSkills = job.technologies.filter(tech => 
      resume.skills.some(skill => skill.toLowerCase().includes(tech.toLowerCase()))
    );
    return Math.round((matchingSkills.length / job.technologies.length) * 100);
  };

  const TechIcon = ({ tech }) => (
    <Badge variant="secondary" className="text-xs px-2 py-1">
      {tech}
    </Badge>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Resume Selection and Search */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-4">
            {/* Resume Selection */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Select Resume:</span>
              </div>
              <Select value={selectedResume} onValueChange={setSelectedResume}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Choose your resume from Evolvue" />
                </SelectTrigger>
                <SelectContent>
                  {userResumes.map((resume) => (
                    <SelectItem key={resume.id} value={resume.id.toString()}>
                      <div className="flex flex-col">
                        <span>{resume.name}</span>
                        <span className="text-xs text-gray-500">Created: {resume.created}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedResume && (
                <Link to="/resume" className="text-blue-600 hover:underline text-sm">
                  View/Edit Resume on Evolvue
                </Link>
              )}
            </div>
            
            {/* Search */}
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search jobs by role, skills, or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-10"
                />
              </div>
              <Button className="h-10 px-6">
                <Search className="mr-2 h-4 w-4" />
                Search Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-220px)]">
          {/* Left Panel - Job List */}
          <div className="lg:col-span-1 bg-white rounded-lg border h-full overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold">Jobs for You</h2>
                <Badge variant="secondary">{filteredJobs.length} found</Badge>
              </div>
              <p className="text-sm text-gray-600">
                {selectedResume ? "Based on your selected resume" : "Select a resume to see match scores"}
              </p>
            </div>
            
            <div className="overflow-y-auto h-full pb-20">
              {filteredJobs.map((job) => {
                const matchScore = selectedResume ? getMatchScore(job) : 0;
                return (
                  <div
                    key={job.id}
                    className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedJob?.id === job.id ? 'bg-blue-50 border-r-2 border-r-blue-600' : ''
                    }`}
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">
                          {job.logo}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                            {job.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-1">{job.company}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <MapPin className="h-3 w-3" />
                            <span>{job.location}</span>
                            <span>•</span>
                            <Clock className="h-3 w-3" />
                            <span>{job.posted}</span>
                          </div>
                        </div>
                      </div>
                      {selectedResume && (
                        <div className="flex items-center gap-1">
                          <Target className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-semibold text-green-600">{matchScore}%</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-xs text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{job.applicants} applicants</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-2">
                      {job.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                      {job.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs px-2 py-0.5">
                          +{job.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-green-600">
                        <CheckCircle className="h-3 w-3" />
                        <span>Actively hiring</span>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs h-6">
                        View Details
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel - Job Details */}
          <div className="lg:col-span-2 bg-white rounded-lg border h-full overflow-hidden">
            {selectedJob ? (
              <>
                <div className="p-6 border-b">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                        {selectedJob.logo}
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-1">
                          {selectedJob.title}
                        </h1>
                        <p className="text-lg text-gray-600 mb-2">{selectedJob.company}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{selectedJob.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{selectedJob.posted}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{selectedJob.applicants} applicants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {selectedResume && (
                        <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                          <Target className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-semibold text-green-600">
                            {getMatchScore(selectedJob)}% Match
                          </span>
                        </div>
                      )}
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Remote
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Briefcase className="h-3 w-3" />
                      {selectedJob.type}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      {selectedJob.salary}
                    </Badge>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link to={`/jobs/${selectedJob.id}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Apply on Company Site
                      </Button>
                    </Link>
                    <Button variant="outline">
                      <Bookmark className="h-4 w-4 mr-2" />
                      Save Job
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 overflow-y-auto h-full pb-20">
                  <div className="space-y-6">
                    {/* Resume Match Analysis */}
                    {selectedResume && (
                      <>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <Target className="h-5 w-5 text-blue-600" />
                            Resume Analysis
                          </h3>
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-green-600 mb-1">
                                {getMatchScore(selectedJob)}%
                              </div>
                              <div className="text-sm text-gray-600">Skills Match</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-orange-600 mb-1">
                                {selectedJob.skillGaps?.length || 0}
                              </div>
                              <div className="text-sm text-gray-600">Skills to Learn</div>
                            </div>
                          </div>
                          
                          {selectedJob.skillGaps && selectedJob.skillGaps.length > 0 && (
                            <div className="mt-4">
                              <h4 className="font-medium mb-2 flex items-center gap-1">
                                <Award className="h-4 w-4 text-orange-600" />
                                Skills to Improve
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {selectedJob.skillGaps.map((skill) => (
                                  <Badge key={skill} variant="outline" className="text-orange-600 border-orange-200">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <Separator />
                      </>
                    )}
                    
                    {/* Recommendations from Evolvue */}
                    {selectedJob.recommendedCourses && (
                      <>
                        <div className="bg-purple-50 rounded-lg p-4">
                          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <GraduationCap className="h-5 w-5 text-purple-600" />
                            Recommended Learning from Evolvue
                          </h3>
                          
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-medium mb-2 flex items-center gap-1">
                                <BookOpen className="h-4 w-4" />
                                Courses
                              </h4>
                              <div className="grid grid-cols-1 gap-2">
                                {selectedJob.recommendedCourses.map((course) => (
                                  <Link
                                    key={course}
                                    to="/lms"
                                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-white transition-colors"
                                  >
                                    <span className="text-sm">{course}</span>
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-medium mb-2 flex items-center gap-1">
                                <Code className="h-4 w-4" />
                                Recommended Projects
                              </h4>
                              <div className="grid grid-cols-1 gap-2">
                                {selectedJob.recommendedProjects?.map((project) => (
                                  <Link
                                    key={project}
                                    to="/projects"
                                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-white transition-colors"
                                  >
                                    <span className="text-sm">{project}</span>
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                            
                            <Link to="/roadmap" className="block">
                              <Button variant="outline" className="w-full justify-center">
                                <Lightbulb className="h-4 w-4 mr-2" />
                                View Complete Learning Roadmap
                              </Button>
                            </Link>
                          </div>
                        </div>
                        
                        <Separator />
                      </>
                    )}
                    
                    {/* Job Description */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">About the Job</h3>
                      <div className="prose max-w-none">
                        <p className="text-gray-700 mb-4">
                          {selectedJob.description}
                        </p>
                        
                        <h4 className="font-semibold mb-2 flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" />
                          Key Responsibilities
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          {selectedJob.responsibilities?.map((resp, index) => (
                            <li key={index} className="text-gray-700">{resp}</li>
                          ))}
                        </ul>
                        
                        <h4 className="font-semibold mb-2 flex items-center gap-1">
                          <Code className="h-4 w-4" />
                          Required Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {selectedJob.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        {selectedJob.rounds && (
                          <>
                            <h4 className="font-semibold mb-2 flex items-center gap-1">
                              <Target className="h-4 w-4" />
                              Interview Process
                            </h4>
                            <div className="grid grid-cols-2 gap-2 mb-4">
                              {selectedJob.rounds.map((round, index) => (
                                <div key={round} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                                  <Badge variant="outline" className="text-xs">
                                    {index + 1}
                                  </Badge>
                                  <span className="text-sm">{round}</span>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Job</h3>
                  <p className="text-gray-600">Choose a job from the list to view details and recommendations</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;