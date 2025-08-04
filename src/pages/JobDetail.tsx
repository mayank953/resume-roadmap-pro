import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  MapPin, 
  Clock, 
  DollarSign, 
  Star, 
  Users,
  Building,
  Calendar,
  CheckCircle2,
  Target,
  BookOpen,
  TrendingUp,
  MessageCircle,
  ExternalLink,
  Bookmark,
  Share2
} from "lucide-react";
import { BrandBuilder } from "@/components/BrandBuilder";

const JobDetail = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Mock job data - in real app, this would be fetched based on ID
  const job = {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    matchScore: 92,
    logo: "TC",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "Jest"],
    posted: "2 days ago",
    applicants: 45,
    description: `We're looking for a passionate Frontend Developer to join our growing engineering team. You'll be working on cutting-edge web applications that serve millions of users worldwide. 

This role offers an excellent opportunity to work with modern technologies, collaborate with talented engineers, and make a significant impact on our product development.`,
    
    responsibilities: [
      "Develop and maintain responsive web applications using React and TypeScript",
      "Collaborate with UX/UI designers to implement pixel-perfect designs",
      "Write clean, maintainable, and well-tested code",
      "Optimize applications for maximum speed and scalability",
      "Participate in code reviews and technical discussions",
      "Mentor junior developers and share knowledge across the team"
    ],
    
    requirements: [
      "3+ years of professional experience with React and modern JavaScript",
      "Strong proficiency in TypeScript and modern CSS",
      "Experience with state management libraries (Redux, Zustand, etc.)",
      "Familiarity with testing frameworks (Jest, React Testing Library)",
      "Knowledge of modern build tools and CI/CD processes",
      "Excellent problem-solving and communication skills"
    ],
    
    niceToHave: [
      "Experience with Next.js or other React frameworks",
      "Knowledge of GraphQL and Apollo Client",
      "Familiarity with cloud platforms (AWS, GCP, Azure)",
      "Understanding of accessibility best practices",
      "Open source contributions"
    ],
    
    rounds: [
      {
        name: "Technical Assessment",
        description: "Online coding challenge (2 hours)",
        status: "upcoming"
      },
      {
        name: "Technical Interview",
        description: "Live coding session with senior engineer (45 mins)",
        status: "upcoming"
      },
      {
        name: "System Design",
        description: "Design a frontend system (30 mins)",
        status: "upcoming"
      },
      {
        name: "Cultural Fit",
        description: "Meet with team members (30 mins)",
        status: "upcoming"
      },
      {
        name: "Final Round",
        description: "Interview with engineering manager (45 mins)",
        status: "upcoming"
      }
    ],
    
    companyInfo: {
      size: "500-1000 employees",
      industry: "Technology",
      founded: "2015",
      funding: "Series C",
      website: "https://techcorp.com"
    },
    
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company matching",
      "Unlimited PTO policy",
      "Remote work flexibility",
      "Learning and development budget ($2,000/year)",
      "Top-tier equipment and home office setup",
      "Team events and company retreats"
    ]
  };

  const skillGaps = [
    { skill: "GraphQL", currentLevel: 2, requiredLevel: 4, priority: "High" },
    { skill: "System Design", currentLevel: 3, requiredLevel: 4, priority: "Medium" },
    { skill: "Testing", currentLevel: 3, requiredLevel: 5, priority: "High" }
  ];

  const recommendedActions = [
    {
      type: "course",
      title: "Master GraphQL with React",
      provider: "Evolvue Learning",
      duration: "3 weeks",
      relevance: "High"
    },
    {
      type: "project",
      title: "Build a Full-Stack E-commerce App",
      provider: "Evolvue Projects",
      duration: "4 weeks",
      relevance: "High"
    },
    {
      type: "roadmap",
      title: "Frontend Developer Career Path",
      provider: "Evolvue Roadmap",
      duration: "6 months",
      relevance: "Medium"
    }
  ];

  const TechIcon = ({ tech }: { tech: string }) => (
    <Badge variant="outline" className="text-sm px-3 py-1">
      {tech}
    </Badge>
  );

  const SkillGapCard = ({ gap }: { gap: typeof skillGaps[0] }) => (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-gray-900">{gap.skill}</h4>
        <Badge variant={gap.priority === "High" ? "destructive" : "secondary"} className="text-xs">
          {gap.priority} Priority
        </Badge>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Your Level: {gap.currentLevel}/5</span>
          <span>Required: {gap.requiredLevel}/5</span>
        </div>
        <Progress value={(gap.currentLevel / 5) * 100} className="h-2" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/jobs" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Jobs
              </Link>
            </Button>
            <div className="flex items-center gap-4 ml-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={isBookmarked ? "bg-blue-50 border-blue-200" : ""}
              >
                <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? "fill-current text-blue-600" : ""}`} />
                {isBookmarked ? "Saved" : "Save Job"}
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header */}
            <Card className="professional-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {job.logo}
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                    <h2 className="text-xl text-gray-700 font-medium mb-4">{job.company}</h2>
                    
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="w-5 h-5" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5" />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Posted {job.posted}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
                        <Star className="w-5 h-5 text-green-600 fill-current" />
                        <span className="font-semibold text-green-700">{job.matchScore}% Match</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-5 h-5" />
                        {job.applicants} applicants
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <TechIcon key={tech} tech={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card className="professional-card">
              <CardHeader>
                <CardTitle>About the Role</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{job.description}</p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Key Responsibilities</h3>
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Requirements</h3>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Nice to Have</h3>
                  <ul className="space-y-2">
                    {job.niceToHave.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Interview Process */}
            <Card className="professional-card">
              <CardHeader>
                <CardTitle>Interview Process</CardTitle>
                <p className="text-gray-600">Here's what to expect during the hiring process</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {job.rounds.map((round, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{round.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{round.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="professional-card">
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {job.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card className="professional-card border-blue-200 bg-blue-50/50">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-green-600 mb-1">{job.matchScore}%</div>
                  <p className="text-sm text-gray-600">Profile Match</p>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-3">
                  Apply Now
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href={job.companyInfo.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Company Website
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Skill Gaps */}
            <Card className="professional-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Skill Gaps Analysis
                </CardTitle>
                <p className="text-sm text-gray-600">Areas to improve for this role</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillGaps.map((gap, index) => (
                  <SkillGapCard key={index} gap={gap} />
                ))}
              </CardContent>
            </Card>

            {/* Recommended Actions */}
            <Card className="professional-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Recommended Preparation
                </CardTitle>
                <p className="text-sm text-gray-600">Boost your chances with these resources</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendedActions.map((action, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm text-gray-900">{action.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {action.relevance}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{action.provider} • {action.duration}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Start Learning
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card className="professional-card">
              <CardHeader>
                <CardTitle>About {job.company}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Size:</span>
                    <p className="font-medium">{job.companyInfo.size}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Industry:</span>
                    <p className="font-medium">{job.companyInfo.industry}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Founded:</span>
                    <p className="font-medium">{job.companyInfo.founded}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Funding:</span>
                    <p className="font-medium">{job.companyInfo.funding}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Brand Building */}
            <BrandBuilder 
              context="dashboard"
              achievement={{
                type: "interview_complete",
                title: "Exploring new opportunities",
                description: "Found an amazing Frontend Developer role at TechCorp!",
                project: job.title
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;