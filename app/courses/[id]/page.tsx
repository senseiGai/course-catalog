import { getCourse, getCourses } from "@/lib/courses";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-8 mt-8">
      <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 bg-white dark:bg-zinc-950">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{course.title}</h1>
        <div className="mb-6 flex gap-3">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            {course.credits} {course.credits === 1 ? 'credit' : 'credits'}
          </Badge>
          {course.isElective && (
            <Badge variant="outline" className="text-sm px-3 py-1">
              Elective
            </Badge>
          )}
        </div>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          {course.description}
        </p>
        <div className="flex justify-between items-center border-t border-zinc-100 dark:border-zinc-900 pt-6 mt-6">
          <span className="text-sm font-medium text-zinc-500">Do you like this course?</span>
          <LikeButton initialLikes={course.likes} />
        </div>
      </div>
    </div>
  );
}
