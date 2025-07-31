import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, Linkedin, Twitter, Copy, Trophy, Star, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface BrandBuilderProps {
  achievement: {
    type: 'project_complete' | 'interview_complete' | 'skill_learned' | 'roadmap_progress' | 'course_complete';
    title: string;
    description: string;
    progress?: number;
    skill?: string;
    project?: string;
  };
  context?: 'dashboard' | 'project' | 'interview' | 'roadmap' | 'lms';
}

export function BrandBuilder({ achievement, context = 'dashboard' }: BrandBuilderProps) {
  const [isSharing, setIsSharing] = useState(false);
  const { toast } = useToast();

  const generatePost = (platform: 'linkedin' | 'twitter') => {
    const hashtags = platform === 'twitter' ? '#Evolvue #TechSkills #CareerGrowth' : '#Evolvue #TechSkills #CareerGrowth #BuildInPublic';
    
    const templates = {
      project_complete: {
        linkedin: `🚀 Just completed "${achievement.title}" project! Building practical skills and showcasing real-world applications. Every project is a step forward in my tech journey.\n\n${hashtags}`,
        twitter: `🚀 Just shipped "${achievement.title}"! Another project in the books 💪\n\n${hashtags}`
      },
      interview_complete: {
        linkedin: `💼 Successfully completed a technical interview session! Continuous practice and preparation are key to landing that dream role.\n\n${hashtags}`,
        twitter: `💼 Aced another interview prep session! Practice makes perfect 🎯\n\n${hashtags}`
      },
      skill_learned: {
        linkedin: `📚 Mastered ${achievement.skill}! Expanding my technical toolkit one skill at a time. The learning journey never stops.\n\n${hashtags}`,
        twitter: `📚 Just learned ${achievement.skill}! Growing my tech stack 🔥\n\n${hashtags}`
      },
      roadmap_progress: {
        linkedin: `🎯 ${achievement.progress}% progress on my career roadmap! Structured learning and clear goals are making all the difference.\n\n${hashtags}`,
        twitter: `🎯 ${achievement.progress}% on my roadmap! Making steady progress 📈\n\n${hashtags}`
      },
      course_complete: {
        linkedin: `🎓 Completed "${achievement.title}" course! Investing in continuous learning to stay ahead in tech.\n\n${hashtags}`,
        twitter: `🎓 Course complete: "${achievement.title}" ✅\n\n${hashtags}`
      }
    };

    return templates[achievement.type][platform];
  };

  const shareToLinkedIn = () => {
    const text = generatePost('linkedin');
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://evolvue.dev')}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const shareToTwitter = () => {
    const text = generatePost('twitter');
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent('https://evolvue.dev')}`;
    window.open(url, '_blank');
  };

  const copyToClipboard = async () => {
    const text = generatePost('linkedin');
    await navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Post content copied to clipboard",
    });
  };

  const getAchievementIcon = () => {
    switch (achievement.type) {
      case 'project_complete': return Trophy;
      case 'interview_complete': return Star;
      case 'skill_learned': return TrendingUp;
      case 'roadmap_progress': return TrendingUp;
      case 'course_complete': return Trophy;
      default: return Trophy;
    }
  };

  const Icon = getAchievementIcon();

  return (
    <Card className="border-2 border-dashed border-primary/30 bg-gradient-to-r from-primary/5 to-purple-500/5">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg flex items-center gap-2">
              🎉 Build Your Brand
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Share Achievement
              </Badge>
            </CardTitle>
            <CardDescription>
              Share your progress and build your professional brand. Let the world see your growth!
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-3 bg-muted/50 rounded-lg border">
          <p className="text-sm font-medium text-muted-foreground mb-1">Your Achievement:</p>
          <p className="font-semibold">{achievement.title}</p>
          <p className="text-sm text-muted-foreground">{achievement.description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={shareToLinkedIn}
            size="sm"
            variant="outline"
            className="flex-1 min-w-[120px]"
          >
            <Linkedin className="w-4 h-4 mr-2 text-blue-600" />
            LinkedIn
          </Button>
          <Button
            onClick={shareToTwitter}
            size="sm"
            variant="outline"
            className="flex-1 min-w-[120px]"
          >
            <Twitter className="w-4 h-4 mr-2 text-blue-400" />
            Twitter
          </Button>
          <Button
            onClick={copyToClipboard}
            size="sm"
            variant="outline"
            className="min-w-[100px]"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy
          </Button>
        </div>

        <div className="text-xs text-muted-foreground bg-muted/30 p-2 rounded">
          💡 <strong>Brand Building Tip:</strong> Regular sharing helps establish your expertise and attracts opportunities. Your journey inspires others!
        </div>
      </CardContent>
    </Card>
  );
}