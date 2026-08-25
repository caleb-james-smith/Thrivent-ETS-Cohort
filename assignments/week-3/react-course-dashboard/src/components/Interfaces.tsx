export interface Course {
    id: number;
    title: string;
    description: string;
    duration: number;
    level: number;
    featured?: boolean;
}

export interface CourseProps {
    course: Course;
}

export interface CourseListProps {
    courses: Course[];
}
