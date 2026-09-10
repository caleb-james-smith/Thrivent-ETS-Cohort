import React, { useState } from "react";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import CourseList from "./components/CourseList.tsx";
import type { Course } from "./components/Interfaces.tsx";
import { courseData } from "./data/courses.ts";

// import './App.css';
import "./styles/app.css";

function App() {
  const verbose: boolean = true;
  const dashboardTitle: string = "Courses Dashboard";
  const userName: string = "Jimmy Schmidt";
  const numCourses: number = courseData.length;

  // Note: Set initial search term to ""
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Note: Set initial selected level to "All Levels"
  const [selectedLevel, setSelectedLevel] = useState<string>("All Levels");

  // Note: Set initial selected course to null
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Note: Set initial enrolled courses to []
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);

  // When the search input changes, update the search term.
  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearchTerm(event.target.value);
  };

  // When the selected level changes, update the selected level.
  const handleLevelChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setSelectedLevel(event.target.value);
  };

  // When the selected course changes, update the selected course.
  const handleSelectedCourseChange = (course: Course): void => {
    setSelectedCourse(course);
  };

  // When the user enrolls in a course, update the array of enrolled courses.
  const handleEnrolledCoursesChange = (course: Course): void => {
    if (verbose) {
      console.log(
        `Handling enrollment update for course: id=${course.id}, title=${course.title}`,
      );
    }
    // Check if the course is already in a enrolled course array before adding it.
    for (const enrolledCourse of enrolledCourses) {
      if (course.id === enrolledCourse.id) {
        return;
      }
    }
    if (verbose) {
      console.log(
        `Enrolling in course: id=${course.id}, title=${course.title}`,
      );
    }
    const addedCourseArray: Course[] = [course];
    setEnrolledCourses([...enrolledCourses, ...addedCourseArray]);
  };

  // Filter courses based on the search term and the selected level.
  const filteredCourses: Course[] = courseData.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLevel === "All Levels" || selectedLevel === course.level),
  );

  // Reset all filters, selections, and enrollments.
  function resetEverything(): void {
    console.log("Resetting everything...");
    setSearchTerm("");
    setSelectedLevel("All Levels");
    setSelectedCourse(null);
    setEnrolledCourses([]);
    console.log("Reset complete!");
  }

  if (verbose) {
    console.log("searchTerm:", searchTerm);
    console.log("selectedLevel:", selectedLevel);
    console.log("selectedCourse:", selectedCourse);
    console.log("enrolledCourses:", enrolledCourses);
    // console.log("courseData:", courseData);
    // console.log("filteredCourses:", filteredCourses);
  }

  return (
    <>
      <Header title={dashboardTitle} />
      <section className="info-container">
        <p>Name: {userName}</p>
        <p>Number of enrolled courses: {enrolledCourses.length}</p>
        <p>Number of courses available (total): {numCourses}</p>
        <p>Number of courses matching filters: {filteredCourses.length}</p>
        <form>
          <label htmlFor="search">Search courses:</label>
          <input
            type="text"
            name="search"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <label htmlFor="level">Select level:</label>
          <select
            name="level"
            value={selectedLevel}
            onChange={handleLevelChange}
          >
            <option value="All Levels">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </form>
        <div className="button-container">
          <button type="button" id="reset-button" onClick={resetEverything}>
            Reset Everything
          </button>
          <button type="button" onClick={() => setSelectedCourse(null)}>
            Clear Course Selection
          </button>
        </div>
      </section>
      <CourseList
        courses={filteredCourses}
        selectedCourse={selectedCourse}
        enrolledCourses={enrolledCourses}
        updateSelectedCourse={handleSelectedCourseChange}
        updateEnrolledCourses={handleEnrolledCoursesChange}
      />
      <Footer />
    </>
  );
}

export default App;
