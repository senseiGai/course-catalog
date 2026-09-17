import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({ id, title, description, credits, likes }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-white rounded-xl group">
      <Card className="h-full flex flex-col hover:shadow-lg dark:hover:shadow-zinc-800/50 transition-all cursor-pointer overflow-hidden border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        
        {/* Monochrome Thumbnail */}
        <div className="h-36 w-full bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
           {/* Abstract geometric monochrome pattern */}
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] dark:bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:16px_16px]"></div>
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-16 h-16 border-2 border-zinc-950 dark:border-white rounded-full opacity-10 group-hover:scale-110 transition-transform duration-500"></div>
           </div>
        </div>

        <CardHeader className="p-5 pb-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-zinc-950 dark:text-white uppercase tracking-wider">IITU University</span>
          </div>
          <CardTitle className="text-lg font-bold leading-tight group-hover:underline decoration-2 underline-offset-2">{title}</CardTitle>
          <CardDescription className="line-clamp-2 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow p-5 pt-2 pb-0">
          <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-4">
            Skills: Frontend, React, System Design
          </div>
        </CardContent>

        <CardFooter className="p-5 pt-4 border-t border-zinc-100 dark:border-zinc-900 flex flex-col gap-3">
          <div className="flex items-center gap-1.5 self-start">
             <span className="text-sm font-bold text-zinc-950 dark:text-white">{(4.5 + (likes % 5) * 0.1).toFixed(1)}</span>
             <Star className="w-4 h-4 fill-zinc-950 text-zinc-950 dark:fill-white dark:text-white" />
             <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-1">({likes * 120} reviews)</span>
          </div>
          
          <div className="flex justify-between items-center w-full">
            <Badge variant="outline" className="text-xs font-medium border-zinc-950 text-zinc-950 dark:border-white dark:text-white rounded-md">
              {credits} {credits === 1 ? 'credit' : 'credits'}
            </Badge>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{likes * 450} students</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
