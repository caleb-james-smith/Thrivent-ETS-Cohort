// Learning Platform Data Model App

interface Person {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

interface Student extends Person {
}

interface Instructor extends Person {
}

interface Course {
    subject: string;
    instructor: Instructor;
    students: Student[];
}

interface Lesson {
    course: Course;
    topic: string
}

// Students

const AndrewWiggin: Student = {
    id: 5001,
    firstName: "Andrew",
    lastName: "Wiggin",
    email: "andrew.wiggin@ku.edu"
}

const EmilyJohnson: Student = {
    id: 5002,
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily.johnson@ku.edu"
}

const LilyPotter: Student = {
    id: 5003,
    firstName: "Lily",
    lastName: "Potter",
    email: "lily.potter@ku.edu"
}

const SamwiseGamgee: Student = {
    id: 5004,
    firstName: "Samwise",
    lastName: "Gamgee",
    email: "samwise.gamgee@ku.edu"
}

const ThomasScott: Student = {
    id: 5005,
    firstName: "Thomas",
    lastName: "Scott",
    email: "thomas.scott@ku.edu"
}

// Instructors

const AmyJones: Instructor = {
    id: 1001,
    firstName: "Amy",
    lastName: "Jones",
    email: "amy.jones@ku.edu"
}

const CalebSmith: Instructor = {
    id: 1002,
    firstName: "Caleb",
    lastName: "Smith",
    email: "caleb.smith@ku.edu"
}

const Calculus1: Course = {
    subject: "Calculus 1",
    instructor: AmyJones,
    students: [EmilyJohnson, SamwiseGamgee, ThomasScott]
}

const ModernPhysics: Course = {
    subject: "Modern Physics",
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
    for (const student of students) {
        printStudentSummary(student);
    }
}

function printCourseSummary(course: Course): void {
    console.log();
    console.log(`Subject: ${course.subject}`);
    console.log(`Instructor: ${course.instructor.firstName} ${course.instructor.lastName} (${course.instructor.email})`);
    console.log(`Number of students: ${course.students.length}`);
    console.log();
}

function printStudentSummary(student: Student): void {
    console.log();
    console.log(`Student: ${student.firstName} ${student.lastName} (${student.email})`);
    console.log();
}

function printHeader(): void {
    console.log("------------------------------------");
    console.log("| Learning Platform Data Model App |");
    console.log("------------------------------------");
}

runApp();
