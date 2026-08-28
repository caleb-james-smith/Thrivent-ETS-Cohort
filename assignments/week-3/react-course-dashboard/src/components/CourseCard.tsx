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
    <div className="course-card shadow-xl hover:shadow-2xl">
      <h2 className="font-bold text-2xl text-gray-800 text-center p-2">
        {course.title}
      </h2>
      {course.featured && (
        <div className="p-2">
          <p className="text-green-600">
            <b>Featured Course</b>
          </p>
        </div>
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
