export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: number;
  title: string;
  description: string;
  duration: number;
  level: Level;
  featured?: boolean;
}

export interface CourseListProps {
  courses: Course[];
  selectedCourse: Course | null;
  enrolledCourses: Course[];
  updateSelectedCourse: (course: Course) => void;
  updateEnrolledCourses: (course: Course) => void
}

export interface CourseProps {
  course: Course;
  selectedCourse: Course | null;
  enrolledCourses: Course[];
  updateSelectedCourse: (course: Course) => void;
  updateEnrolledCourses: (course: Course) => void
}

export interface CourseDetailsProps {
//   description: string;
//   duration: number;
//   level: Level;
  course: Course;
  enrolledCourses: Course[];
  updateEnrolledCourses: (course: Course) => void
}
