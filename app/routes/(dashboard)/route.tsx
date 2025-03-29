import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SidebarProvider } from "~/components/ui/sidebar";
import { AppSidebar } from "~/dashboard/app-sidebar";
import { Header } from "~/dashboard/header";

export const Route = createFileRoute("/(dashboard)")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <Header />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
