import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
      <h2 className="text-3xl font-bold mb-4 text-zinc-950 dark:text-white">Course not found</h2>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
        We couldn't find the course you were looking for.
      </p>
      <Link 
        href="/courses"
        className="px-6 py-3 bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 text-white rounded-lg transition-colors font-medium"
      >
        Back to all courses
      </Link>
    </div>
  );
}
