import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/user/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello user!</div>;
}
