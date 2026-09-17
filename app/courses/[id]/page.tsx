import { getCourse, getCourses } from "@/lib/courses";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";

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
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
        <div className="mb-6 flex gap-3">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
            {course.credits} {course.credits === 1 ? 'credit' : 'credits'}
          </span>
          {course.isElective && (
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
              Elective
            </span>
          )}
        </div>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          {course.description}
        </p>
        <div className="flex justify-between items-center border-t border-gray-100 dark:border-gray-800 pt-6">
          <span className="text-gray-500 font-medium">Do you like this course?</span>
          <LikeButton initialLikes={course.likes} />
        </div>
      </div>
    </div>
  );
}
