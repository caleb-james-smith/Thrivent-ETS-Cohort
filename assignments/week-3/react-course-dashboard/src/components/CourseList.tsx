import type { CourseListProps } from "./Interfaces.tsx";
import CourseCard from "./CourseCard.tsx";

export default function CourseList({
  courses,
  selectedCourse,
  enrolledCourses,
  updateSelectedCourse,
  updateEnrolledCourses,
}: CourseListProps) {
  function renderCourseList() {
    if (courses.length > 0) {
      return courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          selectedCourse={selectedCourse}
          enrolledCourses={enrolledCourses}
          updateSelectedCourse={updateSelectedCourse}
          updateEnrolledCourses={updateEnrolledCourses}
        />
      ));
    } else {
      return <p>No courses match your search.</p>;
    }
  }
  return <section className="card-container">{renderCourseList()}</section>;
}
