import { createFileRoute } from "@tanstack/react-router";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const Route = createFileRoute("/(dashboard)/comment/")({
  component: RouteComponent,
  loader: async (): Promise<Comment[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    return data;
  },
});

function RouteComponent() {
  const comments = Route.useLoaderData();
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}
