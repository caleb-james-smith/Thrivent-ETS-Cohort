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
}

export interface CourseListProps {
    courses: Course[];
}
