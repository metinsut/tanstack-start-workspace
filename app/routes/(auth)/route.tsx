import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link
        to="/login"
        activeProps={{
          className: "font-bold",
        }}
      >
        Login
      </Link>
      <Link
        to="/register"
        activeProps={{
          className: "font-bold",
        }}
      >
        Register
      </Link>
      <Outlet />
    </div>
  );
}
