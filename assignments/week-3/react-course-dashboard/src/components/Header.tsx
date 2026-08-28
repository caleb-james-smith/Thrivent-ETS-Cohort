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
            <h1 className="font-bold text-5xl text-gray-800 p-5">{title}</h1>
        </>
    );
}