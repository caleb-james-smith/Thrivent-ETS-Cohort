export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: number;
  title: string;
  description: string;
  duration: number;
  level: Level;
  featured?: boolean;
}

export interface CourseProps {
  course: Course;
  selectedCourse: Course | null;
  updateSelectedCourse: (course: Course) => void;
}

export interface CourseListProps {
  courses: Course[];
  selectedCourse: Course | null;
  updateSelectedCourse: (course: Course) => void;
}

export interface CourseDetailsProps {
  description: string;
  duration: number;
  level: Level;
}
