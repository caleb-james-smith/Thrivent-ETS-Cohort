import type { CourseProps } from "./Interfaces.tsx";
import CourseDetails from "./CourseDetails.tsx";

export default function CourseCard({
  course,
  selectedCourse,
  enrolledCourses,
  updateSelectedCourse,
  updateEnrolledCourses,
}: CourseProps) {
  return (
    <div className="course-card">
      <h2>{course.title}</h2>
      {course.featured && (
        <p>
          <b>Featured Course</b>
        </p>
      )}
      <button type="button" onClick={() => updateSelectedCourse(course)}>
        View Details
      </button>
      {selectedCourse && selectedCourse.id === course.id && (
        <CourseDetails
          course={course}
          enrolledCourses={enrolledCourses}
          updateEnrolledCourses={updateEnrolledCourses}
        />
      )}
    </div>
  );
}
