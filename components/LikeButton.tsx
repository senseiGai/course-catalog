"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors font-medium border border-red-200 dark:border-red-900/50"
    >
      <span>❤</span>
      <span>{likes}</span>
    </button>
  );
}
