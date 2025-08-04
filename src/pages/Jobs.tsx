import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  Star, 
  Filter,
  Briefcase,
  Users,
  TrendingUp,
  BookOpen,
  MessageCircle,
  ExternalLink,
  Target,
  Zap,
  CheckCircle2
} from "lucide-react";

const Jobs = () => {
  const [selectedResume, setSelectedResume] = useState("resume-1");
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");

  // Mock data for jobs
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      matchScore: 92,
      logo: "TC",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      posted: "2 days ago",
      applicants: 45,
      description: "We're looking for a passionate Frontend Developer to join our team...",
      requirements: ["3+ years React experience", "TypeScript proficiency", "Modern CSS skills"],
      rounds: ["Technical Assessment", "Technical Interview", "Cultural Fit", "Final Round"]
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "Remote",
      type: "Full-time",
      salary: "$90,000 - $140,000",
      matchScore: 87,
      logo: "SX",
      technologies: ["Python", "Django", "React", "PostgreSQL"],
      posted: "1 week ago",
      applicants: 32,
      description: "Join our fast-growing startup as a Full Stack Engineer...",
      requirements: ["5+ years full-stack experience", "Python/Django expertise", "Cloud experience"],
      rounds: ["Code Challenge", "Technical Interview", "Team Interview", "Founder Chat"]
    },
    {
      id: 3,
      title: "Software Developer Intern",
      company: "BigTech Inc",
      location: "New York, NY",
      type: "Internship",
      salary: "$25 - $35/hour",
      matchScore: 78,
      logo: "BT",
      technologies: ["Java", "Spring Boot", "MySQL", "AWS"],
      posted: "3 days ago",
      applicants: 156,
      description: "Summer internship opportunity for aspiring software developers...",
      requirements: ["Computer Science student", "Java knowledge", "Problem-solving skills"],
      rounds: ["Online Assessment", "Technical Interview", "HR Interview"]
    }
  ];

  const recommendedCourses = [
    { title: "Advanced React Patterns", duration: "4 weeks", relevance: "High" },
    { title: "System Design Fundamentals", duration: "6 weeks", relevance: "Medium" },
    { title: "Data Structures & Algorithms", duration: "8 weeks", relevance: "High" }
  ];

  const TechIcon = ({ tech }: { tech: string }) => (
    <Badge variant="secondary" className="text-xs px-2 py-1">
      {tech}
    </Badge>
  );

  const JobCard = ({ job }: { job: typeof jobs[0] }) => (
    <Card className="professional-card hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-blue-500">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              {job.logo}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900 mb-1">{job.title}</h3>
              <p className="text-gray-600 font-medium">{job.company}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  {job.type}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {job.posted}
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-semibold text-green-600">{job.matchScore}% Match</span>
            </div>
            <p className="text-sm text-gray-500">{job.applicants} applicants</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 text-sm mb-3">{job.description}</p>
          <div className="flex flex-wrap gap-2">
            {job.technologies.map((tech) => (
              <TechIcon key={tech} tech={tech} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-gray-900">{job.salary}</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to={`/jobs/${job.id}`}>
                View Details
              </Link>
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Apply Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover opportunities tailored to your skills and career goals
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-lg p-2 flex gap-2 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search jobs, companies, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-0 focus-visible:ring-0"
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Search Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters & Tools */}
          <div className="space-y-6">
            {/* Resume Selection */}
            <Card className="professional-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Select Resume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={selectedResume} onValueChange={setSelectedResume}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="resume-1">Frontend Developer Resume</SelectItem>
                    <SelectItem value="resume-2">Full Stack Developer Resume</SelectItem>
                    <SelectItem value="resume-3">Software Engineer Resume</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500 mt-2">
                  Jobs will be matched based on your selected resume
                </p>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card className="professional-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Filter className="w-5 h-5 text-blue-600" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Location</label>
                  <Input
                    placeholder="City, State, or Remote"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Experience Level</label>
                  <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                      <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                      <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                      <SelectItem value="intern">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* AI Assistant */}
            <Card className="professional-card bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  AI Job Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Get personalized job recommendations and career advice
                </p>
                <Button variant="outline" className="w-full">
                  Chat with AI
                </Button>
              </CardContent>
            </Card>

            {/* Recommended Learning */}
            <Card className="professional-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Recommended Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recommendedCourses.map((course, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-sm">{course.title}</h4>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-gray-500">{course.duration}</span>
                      <Badge 
                        variant={course.relevance === "High" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {course.relevance}
                      </Badge>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full mt-3" asChild>
                  <Link to="/roadmap">
                    View All Recommendations
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Jobs List */}
          <div className="lg:col-span-3">
            {/* Stats Bar */}
            <div className="bg-white rounded-lg border border-gray-200/60 p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Job Recommendations</h2>
                  <p className="text-sm text-gray-600">Based on your Frontend Developer Resume</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">{jobs.length}</div>
                    <div className="text-xs text-gray-500">Matches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">87%</div>
                    <div className="text-xs text-gray-500">Avg Match</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Jobs List */}
            <div className="space-y-6">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" className="px-8">
                Load More Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;