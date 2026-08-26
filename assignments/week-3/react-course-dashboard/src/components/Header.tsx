export default function Header({ title }: { title: string }) {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li>Courses</li>
                    <li>Majors</li>
                    <li>Records</li>
                    <li>Graduation</li>
                </ul>
            </nav>
            <h1>{title}</h1>
        </>
    );
}