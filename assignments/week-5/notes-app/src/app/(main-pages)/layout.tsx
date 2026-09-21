import { redirect } from "next/navigation";
import { User } from "@/types/types";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let user: User | null = null;
  try {
    user = await getCurrentUser();

    if (user) {
      console.log("In main layout, loaded current user:", user);
    } else {
      console.log("In main layout, unable to load current user.");
      redirect("/login");
    }
  } catch (error) {
    console.error(error);
  }
  
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
      {user && <p className="p-2">Logged in: {user.email}</p>}
      <main className="flex flex-col flex-1">{children}</main>
      <footer className="border-2 border-solid border-white flex flex-row justify-center items-center p-1">
        Created by Caleb Smith (2026)
      </footer>
    </>
  );
}
