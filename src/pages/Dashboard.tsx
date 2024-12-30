import { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import GenerateScript from "./script/GenerateScript";
import ScriptHistory from "./script/ScriptHistory";
import GenerateAudio from "./audio/GenerateAudio";
import AudioHistory from "./audio/AudioHistory";
import GenerateVideo from "./video/GenerateVideo";
import VideoHistory from "./video/VideoHistory";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
      }
    };
    checkUser();
  }, [navigate]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: error.message,
      });
    } else {
      navigate("/auth");
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="border-b">
            <div className="flex justify-between items-center p-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h1 className="text-2xl font-bold">Dashboard</h1>
              </div>
              <Button variant="outline" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          </header>
          <main className="flex-1">
            <Routes>
              <Route path="script/generate" element={<GenerateScript />} />
              <Route path="script/history" element={<ScriptHistory />} />
              <Route path="audio/generate" element={<GenerateAudio />} />
              <Route path="audio/history" element={<AudioHistory />} />
              <Route path="video/generate" element={<GenerateVideo />} />
              <Route path="video/history" element={<VideoHistory />} />
              <Route
                path="/"
                element={
                  <div className="container mx-auto p-6">
                    <p className="text-muted-foreground">Select an option from the sidebar to get started!</p>
                  </div>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;