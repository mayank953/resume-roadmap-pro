
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Dashboard from "./pages/Dashboard";
import Interviews from "./pages/Interviews";
import Resume from "./pages/Resume";
import Roadmap from "./pages/Roadmap";
import ProjectsLanding from "./pages/ProjectsLanding";
import ProjectsBrowse from "./pages/ProjectsBrowse";
import ProjectDetail from "./pages/ProjectDetail";
import LMS from "./pages/LMS";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-gray-50/30">
            <AppSidebar />
            <main className="flex-1 flex flex-col">
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 p-4">
                <SidebarTrigger />
              </div>
              <div className="flex-1 p-6 overflow-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/interviews" element={<Interviews />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/projects" element={<ProjectsLanding />} />
            <Route path="/projects/browse" element={<ProjectsBrowse />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/projects/:id/learn" element={<LMS />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
