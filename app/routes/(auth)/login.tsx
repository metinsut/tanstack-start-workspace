import { createFileRoute } from "@tanstack/react-router";
import { Input, Button } from "~/components/ui";

export const Route = createFileRoute("/(auth)/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 justify-start">
      <p>Hello "/(auth)/login"!</p>
      <Input name="email" placeholder="Enter your email" />
      <Button>Login</Button>
    </div>
  );
}
