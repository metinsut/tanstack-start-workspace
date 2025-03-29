import { createFileRoute } from "@tanstack/react-router";
import { NoneRouteFile } from "./-none-route-file";

export const Route = createFileRoute("/(dashboard)/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Home Page
      <NoneRouteFile />
    </div>
  );
}
