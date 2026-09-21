import StandardLink from "@/components/StandardLink";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 flex-col justify-center items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col justify-center items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-5xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Notes App
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A simple notes application.
          </p>
          <nav className="self-center">
            <ul className="list-none flex flex-col justify-center items-center gap-5">
              <li>
                <StandardLink href="/login" text="Log In" />
              </li>
              <li>
                <StandardLink href="/signup" text="Sign Up" />
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
}
