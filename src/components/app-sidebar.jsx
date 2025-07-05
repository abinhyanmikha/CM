import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { icons } from "lucide"; // or 'lucide-react' if that's what you're using
import { Home, Settings } from "lucide-react";
import Link from "next/link";

const basicMenu = [
  { title: "Home", icon: Home, url: "/Home" },
  { title: "Settings", icon: Settings, url: "/Settings" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          {basicMenu.map((each) => (
            <Link
              href={each.url}
              key={each.title}
              className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <each.icon className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {each.title}
              </span>
            </Link>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
