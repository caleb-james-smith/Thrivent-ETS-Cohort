import type { CourseListProps }  from './Interfaces.tsx';
import CourseCard from './CourseCard.tsx';

export default function CourseList({ courses }: CourseListProps) {
    return (
        <>
            {courses.map((course) => (CourseCard({ course })))}
        </>
    );
}
