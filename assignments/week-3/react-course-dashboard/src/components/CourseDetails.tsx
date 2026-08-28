import type { CourseDetailsProps } from "./Interfaces";

export default function CourseDetails({
  course,
  enrolledCourses,
  updateEnrolledCourses,
}: CourseDetailsProps) {
  // Check if the user is enrolled to this course.
  let enrolled: boolean = false;
  for (const enrolledCourse of enrolledCourses) {
    if (course.id === enrolledCourse.id) {
      enrolled = true;
    }
  }
  return (
    <div className="p-2">
      <p>{course.description}</p>
      <p>Duration: {course.duration} hours</p>
      <p>Level: {course.level}</p>
      <button
        type="button"
        disabled={enrolled}
        onClick={() => {
          updateEnrolledCourses(course);
        }}
      >
        Enroll
      </button>
      {enrolled && <p>You are enrolled in this course!</p>}
    </div>
  );
}
