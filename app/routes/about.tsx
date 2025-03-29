import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            About TanStack Start
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A modern, full-stack starter template for building web applications with TanStack Router
            and React.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Built with Modern Tools</h2>
              <p className="text-gray-600">
                TanStack Start combines the power of TanStack Router with modern React practices,
                providing a solid foundation for building scalable web applications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Developer Experience</h2>
              <p className="text-gray-600">
                Enjoy a great developer experience with TypeScript, modern tooling, and a
                well-structured project layout that follows best practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Performance First</h2>
              <p className="text-gray-600">
                Optimized for performance with code splitting, lazy loading, and efficient routing
                strategies built-in.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Easy to Customize</h2>
              <p className="text-gray-600">
                Start with a clean slate and customize every aspect of your application to match
                your specific needs and requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://tanstack.com/start/latest/docs/framework/react/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
