import { redirect } from "next/navigation";
import { User } from "@/types/types";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user: User | null = await getCurrentUser();

  // if (!user) {
  //   redirect("/login");
  // }
  
  // Header
  // -navbar
  // Main
  // - children
  // Footer

  return (
    <>
      <header className="border-2 border-solid border-white">
        <nav>
          <ul className="list-none flex flex-row justify-start items-center gap-10 pl-10 p-2">
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/create-note">Create Note</Link></li>
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/">Log Out</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col flex-1">{children}</main>
      <footer className="border-2 border-solid border-white flex flex-row justify-center items-center p-1">
        Created by Caleb Smith (2026)
      </footer>
    </>
  );
}
