import type { CourseListProps }  from './Interfaces.tsx';
import CourseCard from './CourseCard.tsx';

export default function CourseList({ courses }: CourseListProps) {
    return (
        <>
            {/* Version 1 */}
            {/* {courses.map((course) => (
                <div key={course.id} className="course-card">
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                    <p>Duration: {course.duration} hours</p>
                    <p>Level: {course.level}</p>
                </div>
            ))} */}
            {/* Version 2 */}
            {courses.map((course) => (CourseCard({ course })))}
        </>
    );
}
