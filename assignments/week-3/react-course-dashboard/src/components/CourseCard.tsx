import type { CourseProps } from './Interfaces.tsx';
import CourseDetails from './CourseDetails.tsx';

export default function CourseCard({ course }: CourseProps) {
    return (
        <div className="course-card">
            <h2>{course.title}</h2>
            {course.featured && <p><b>Featured Course</b></p>}
            <button type="button">View Details</button>
            
            <CourseDetails {...course} />
            
            {/* <CourseDetails description={course.description} duration={course.duration} level={course.level} /> */}
            
            {/* <p>{course.description}</p>
            <p>Duration: {course.duration} hours</p>
            <p>Level: {course.level}</p> */}
        </div>
    );
}