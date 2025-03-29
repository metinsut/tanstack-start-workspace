import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
} from "~/components/ui/sidebar";
import { Link } from "@tanstack/react-router";

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="flex flex-col gap-4">
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent className="flex flex-col gap-4">
            <Link to="/" activeProps={{ className: "font-bold" }}>
              Home
            </Link>
            <Link to="/user" activeProps={{ className: "font-bold" }}>
              User
            </Link>
            <Link
              to="/comment"
              activeProps={{
                className: "font-bold",
              }}
            >
              Comment
            </Link>
            <Link
              to="/my-test"
              activeProps={{
                className: "font-bold",
              }}
            >
              my-test
            </Link>
            <Link
              to="/my-interview"
              activeProps={{
                className: "font-bold",
              }}
            >
              my-interview
            </Link>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
