import type { CourseProps } from './Interfaces.tsx';

export default function CourseCard({ course }: CourseProps) {
    return (
        <div key={course.id} className="course-card">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Duration: {course.duration} hours</p>
            <p>Level: {course.level}</p>
        </div>
    );
}