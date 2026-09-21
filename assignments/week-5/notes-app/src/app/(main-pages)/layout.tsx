import { redirect } from "next/navigation";
import { User } from "@/types/types";
import { getCurrentUser } from "@/lib/users";
import StandardLink from "@/components/StandardLink";
import Link from "next/link";

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
          <ul className="list-none flex flex-row justify-start items-center gap-10 pl-5 p-2">
            <li>
              <StandardLink href="/dashboard" text="Dashboard" />
            </li>
            <li>
              <StandardLink href="/create-note" text="Create Note" />
            </li>
            <li>
              <StandardLink href="/profile" text="Profile" />
            </li>
            <li>
              <StandardLink href="/" text="Log Out" />
            </li>
          </ul>
        </nav>
        {user && <p className="pl-5 p-2">Logged in: {user.email}</p>}
      </header>
      <main className="flex flex-col flex-1">{children}</main>
      <footer className="border-2 border-solid border-white flex flex-row justify-center items-center p-1">
        Created by Caleb Smith (2026)
      </footer>
    </>
  );
}
