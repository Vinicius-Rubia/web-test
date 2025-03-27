import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { LockKeyholeIcon, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface NavMainProps {
  items: {
    title: string;
    url: string;
    items: {
      title: string;
      url: string;
      isActive?: boolean;
      icon?: LucideIcon;
      inSoon?: boolean;
    }[];
  }[];
}

export function NavMain({ items }: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton className="font-medium text-sidebar-foreground/70 text-xs uppercase !bg-transparent hover:text-sidebar-foreground/70">
              {item.title}
            </SidebarMenuButton>
            {item.items?.length ? (
              <SidebarMenuSub>
                {item.items.map((item) => (
                  <SidebarMenuSubItem key={item.title}>
                    <SidebarMenuSubButton asChild isActive={item.isActive}>
                      <Link to={item.url} className={`${item.inSoon && "pointer-events-none opacity-50"} relative`}>
                        {item.icon && (
                          <item.icon className="stroke-sidebar-foreground/70" />
                        )}
                        {item.title}
                        {item.inSoon && (
                          <LockKeyholeIcon className="stroke-emerald-500 absolute right-0" />
                        )}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            ) : null}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
