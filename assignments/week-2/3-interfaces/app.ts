// Learning Platform Data Model App

interface Person {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

interface Student extends Person {
    gpa: number,
    creditsEarned: number
}

interface Instructor extends Person {
    jobTitle: string;
}

interface Course {
    subject: string;
    credits: number;
    location: string;
    instructor: Instructor;
    students: Student[];
}

interface Lesson {
    course: Course;
    topic: string
}

type CourseSummary = Omit<Course, "credits" | "location">;
type StudentSummary = Omit<Student, "email">;

// Students

const AndrewWiggin: Student = {
    id: 5001,
    firstName: "Andrew",
    lastName: "Wiggin",
    email: "andrew.wiggin@ku.edu",
    gpa: 4.00,
    creditsEarned: 80
}

const EmilyJohnson: Student = {
    id: 5002,
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily.johnson@ku.edu",
    gpa: 3.25,
    creditsEarned: 40
}

const LilyPotter: Student = {
    id: 5003,
    firstName: "Lily",
    lastName: "Potter",
    email: "lily.potter@ku.edu",
    gpa: 4.00,
    creditsEarned: 60
}

const SamwiseGamgee: Student = {
    id: 5004,
    firstName: "Samwise",
    lastName: "Gamgee",
    email: "samwise.gamgee@ku.edu",
    gpa: 3.00,
    creditsEarned: 50
}

const ThomasScott: Student = {
    id: 5005,
    firstName: "Thomas",
    lastName: "Scott",
    email: "thomas.scott@ku.edu",
    gpa: 3.75,
    creditsEarned: 100
}

// Instructors

const AmyJones: Instructor = {
    id: 1001,
    firstName: "Amy",
    lastName: "Jones",
    email: "amy.jones@ku.edu",
    jobTitle: "Associate Professor"
}

const CalebSmith: Instructor = {
    id: 1002,
    firstName: "Caleb",
    lastName: "Smith",
    email: "caleb.smith@ku.edu",
    jobTitle: "Assistant Professor"
}

const Calculus1: Course = {
    subject: "Calculus 1",
    credits: 3,
    location: "Mathematics Building 1",
    instructor: AmyJones,
    students: [EmilyJohnson, SamwiseGamgee, ThomasScott]
}

const ModernPhysics: Course = {
    subject: "Modern Physics",
    credits: 4,
    location: "Physics Building 1",
    instructor: CalebSmith,
    students: [AndrewWiggin, LilyPotter, ThomasScott]
}

function runApp(): void {
    const students: Student[] = [AndrewWiggin, EmilyJohnson, LilyPotter, SamwiseGamgee, ThomasScott];
    const instructors: Instructor[] = [AmyJones, CalebSmith];
    const courses: Course[] = [Calculus1, ModernPhysics];

    printHeader();
    for (const course of courses) {
        printCourseSummary(course);
    }

    console.log("------------------------------------");

    for (const student of students) {
        printStudentSummary(student);
    }
}

function printCourseSummary(course: CourseSummary): void {
    console.log();
    console.log(`Subject: ${course.subject}`);
    console.log(`Instructor: ${course.instructor.firstName} ${course.instructor.lastName} (${course.instructor.email})`);
    console.log(`Number of students: ${course.students.length}`);
    console.log();
}

function printStudentSummary(student: StudentSummary): void {
    console.log();
    console.log(`Student: ${student.firstName} ${student.lastName}`);
    console.log(`GPA: ${student.gpa}`);
    console.log(`Credits earned: ${student.creditsEarned}`);
    console.log();
}

function printHeader(): void {
    console.log("------------------------------------");
    console.log("| Learning Platform Data Model App |");
    console.log("------------------------------------");
}

runApp();
