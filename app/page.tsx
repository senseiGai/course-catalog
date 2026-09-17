import Link from "next/link";
import { getCourses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

export default async function Home() {
  const allCourses = await getCourses();
  const featuredCourses = [...allCourses]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 flex flex-col items-center text-center justify-center pt-32 pb-24 px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-950 dark:text-white mb-6">
            Learn without limits.
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            Start, switch, or advance your career with more than 5,000 courses and degrees from world-class universities.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/courses" className="bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-colors">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white mb-4">
              Featured Courses
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Discover the most popular courses from our catalog.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                credits={course.credits}
                likes={course.likes}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
