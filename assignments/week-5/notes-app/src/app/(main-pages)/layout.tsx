export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Header

  // Main
  // - children

  // Footer

  console.log("children?.toString():", children?.toString());
  console.log("children?.valueOf():", children?.valueOf());

  return (
    <>
      <header className="border-2 border-solid border-white">
        <nav>
          <ul className="list-none flex flex-row justify-start items-center gap-10 pl-10 p-2">
            <li>Dashboard</li>
            <li>Create Note</li>
            <li>Profile</li>
            <li>Log Out</li>
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
