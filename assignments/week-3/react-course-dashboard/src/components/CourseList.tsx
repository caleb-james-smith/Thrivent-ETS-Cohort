import type { CourseListProps }  from './Interfaces.tsx';
import CourseCard from './CourseCard.tsx';

export default function CourseList({ courses }: CourseListProps) {
    return (
        <section className="card-container">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </section>
    );
}
