import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <div className="flex gap-4">
        <Link
          to="/about"
          activeProps={{
            className: "font-bold",
          }}
        >
          About
        </Link>
        <Link to="/user" activeProps={{ className: "font-bold" }}>
          User
        </Link>
        <Link
          to="/comment"
          activeProps={{
            className: "font-bold",
          }}
        >
          Comment
        </Link>
        <Link
          to="/my-test"
          activeProps={{
            className: "font-bold",
          }}
        >
          Go to route A
        </Link>
        <Link
          to="/my-interview"
          activeProps={{
            className: "font-bold",
          }}
        >
          Go to route B
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
