import { FileText, History, Music, Video } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const menuItems = [
  {
    label: "Script",
    items: [
      { title: "Generate Script", url: "/dashboard/script/generate", icon: FileText },
      { title: "Script History", url: "/dashboard/script/history", icon: History },
    ],
  },
  {
    label: "Audio",
    items: [
      { title: "Generate Audio", url: "/dashboard/audio/generate", icon: Music },
      { title: "Audio History", url: "/dashboard/audio/history", icon: History },
    ],
  },
  {
    label: "Video",
    items: [
      { title: "Generate Video", url: "/dashboard/video/generate", icon: Video },
      { title: "Video History", url: "/dashboard/video/history", icon: History },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        {menuItems.map((section) => (
          <SidebarGroup key={section.label}>
            <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <Link to={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}