import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center p-8">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Course Catalog</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-[600px]">
        Welcome to the advanced web technologies course catalog. Browse our collection of modern web development courses.
      </p>
      <Button size="lg">
        <Link href="/courses">View Courses</Link>
      </Button>
    </div>
  );
}
