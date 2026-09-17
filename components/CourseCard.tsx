import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({ id, title, description, credits, likes }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="block h-full">
      <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{description}</p>
        <div className="flex justify-between items-center text-sm font-medium">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">
            {credits} {credits === 1 ? 'credit' : 'credits'}
          </span>
          <span className="flex items-center gap-1 text-red-500">
            ❤ {likes}
          </span>
        </div>
      </div>
    </Link>
  );
}
