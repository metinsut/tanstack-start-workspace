import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/(my-task)/my-test")({
  component: MyInterview,
});

function MyInterview() {
  return <div>Hello "/_my-task/my-interview"!</div>;
}
