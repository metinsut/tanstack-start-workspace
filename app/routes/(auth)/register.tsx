import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const Route = createFileRoute("/(auth)/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 justify-start">
      <p>Register</p>
      <Input name="email" placeholder="Enter your email" />
      <Button>Register</Button>
    </div>
  );
}
