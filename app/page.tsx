import Link from "next/dist/client/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-s text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              advanced web technologies
            </code>{" "}
            course catalog!
          </h1>
        </div>
        <Link
          className="flex h-12 w-full items-center justify-center gap-4 rounded-full bg-foreground px-4 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[200px]"
          href="/courses"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Courses
          <Image
            className="dark:invert h-[14px] w-4"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={16}
            height={14}
          />
        </Link>
      </main>
    </div>
  );
}
