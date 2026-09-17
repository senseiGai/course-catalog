import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
      <h2 className="text-3xl font-bold mb-4">Course not found</h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        We couldn't find the course you were looking for.
      </p>
      <Link 
        href="/courses"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Back to all courses
      </Link>
    </div>
  );
}
