
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: "default" | "outline" | "secondary";
  onButtonClick: () => void;
  icon?: LucideIcon;
  gradient?: string;
}

export function DashboardCard({
  title,
  description,
  buttonText,
  buttonVariant = "default",
  onButtonClick,
  icon: Icon,
  gradient = "from-blue-500 to-purple-600"
}: DashboardCardProps) {
  return (
    <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className={`p-2 rounded-lg bg-gradient-to-r ${gradient}`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
          )}
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={onButtonClick}
          variant={buttonVariant}
          className="w-full md:w-auto"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
