import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/(my-task)/my-interview")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_my-task/b-route"!</div>;
}
