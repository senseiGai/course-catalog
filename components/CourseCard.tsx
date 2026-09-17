import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({ id, title, description, credits, likes }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300 rounded-xl">
      <Card className="h-full flex flex-col hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors cursor-pointer">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="line-clamp-2 mt-2 text-zinc-600 dark:text-zinc-400">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Badge variant="secondary">
            {credits} {credits === 1 ? 'credit' : 'credits'}
          </Badge>
          <span className="flex items-center gap-1.5 text-sm font-medium text-zinc-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            {likes}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
