
import {
  Brain,
  FileText,
  Map,
  Home,
  User,
  Settings,
  BarChart3,
  HelpCircle,
  Code2,
  FolderOpen
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";

const mainItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "AI Interviews",
    url: "/interviews",
    icon: Brain,
  },
  {
    title: "Resume Builder",
    url: "/resume",
    icon: FileText,
  },
  {
    title: "Career Roadmap",
    url: "/roadmap",
    icon: Map,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderOpen,
  },
];

const accountItems = [
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Help",
    url: "/help",
    icon: HelpCircle,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const { state } = useSidebar();

  return (
    <Sidebar className="border-r border-gray-200/60" collapsible="icon">
      <SidebarHeader className="p-6 border-b border-gray-200/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg text-gray-900">CareerAI</span>
            <span className="text-xs text-gray-500">Professional Platform</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3 mb-2">
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.url} 
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                        location.pathname === item.url
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                     >
                      <item.icon className="w-4 h-4" />
                      {state !== "collapsed" && <span className="text-sm font-medium">{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3 mb-2">
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.url} 
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                        location.pathname === item.url
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                     >
                      <item.icon className="w-4 h-4" />
                      {state !== "collapsed" && <span className="text-sm font-medium">{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-200/50">
        <div className="flex items-center gap-3 p-3 bg-gray-50/80 rounded-lg">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">M</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Mayank Aggarwal</p>
            <p className="text-xs text-gray-500">Professional Plan</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
