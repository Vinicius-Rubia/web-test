import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import { Breadcrumb } from "./breadcrumb";
import { NavUser } from "./nav-user";
import { Notifications } from "./notifications";

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center justify-between gap-2 px-4 w-full">
        <div className="flex items-center w-full">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb />
        </div>
        <div className="flex items-center gap-4">
          <Notifications />
          <NavUser />
        </div>
      </div>
    </header>
  );
}
