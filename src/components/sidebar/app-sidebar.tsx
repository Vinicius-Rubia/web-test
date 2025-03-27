import { SIDEBAR_DATA } from "@/constants/sidebar-data";
import { LockKeyholeIcon, Settings } from "lucide-react";
import { ComponentProps } from "react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "../ui/sidebar";
import { NavMain } from "./nav-main";
import { TeamSwitcher } from "./team-switcher";

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="bg-background">
        <TeamSwitcher teams={SIDEBAR_DATA.teams} />
      </SidebarHeader>
      <SidebarContent className="bg-background">
        <NavMain items={SIDEBAR_DATA.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-background">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink
                to="/settings"
                className={"pointer-events-none opacity-50"}
              >
                <Settings />
                Configurações
                <LockKeyholeIcon className="stroke-emerald-500 absolute right-5" />
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
