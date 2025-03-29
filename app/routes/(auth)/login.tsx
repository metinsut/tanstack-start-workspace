import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const Route = createFileRoute("/(auth)/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 justify-start">
      <p>Login</p>
      <Input name="email" placeholder="Enter your email" />
      <Button>Login</Button>
    </div>
  );
}
