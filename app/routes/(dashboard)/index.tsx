import { createFileRoute } from "@tanstack/react-router";
import { DenemePage } from "./-deneme";

export const Route = createFileRoute("/(dashboard)/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Home Page
      <DenemePage />
    </div>
  );
}
