export default function Header() {
    const dashboardTitle: string = "Courses Dashboard";
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li>Dashboard</li>
                    <li>Majors</li>
                    <li>Records</li>
                    <li>Graduation</li>
                </ul>
            </nav>
            <h1>{dashboardTitle}</h1>
        </>
    );
}