import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import CourseList from './components/CourseList.tsx';
import type { Course } from './components/Interfaces.tsx';
import { courseData } from './data/courses.ts';

// import './App.css';
import './styles/app.css';

function App() {
  const dashboardTitle: string = "Courses Dashboard";
  const userName: string = "Jimmy Schmidt";
  const numCourses: number = courseData.length;
  const [searchTerm, setSearchTerm] = useState<string>('');

  // When the search input changes, update the search term.
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  // Filter courses based on search term.
  const filteredCourses: Course[] = courseData.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header title={dashboardTitle} />
      <section>
        <p>Name: {userName}</p>
        <p>Number of courses (total): {numCourses}</p>
      </section>
      <label htmlFor="search">Search courses:</label>
      <input
        type="text"
        name="search"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <p>Number of matching courses: {filteredCourses.length} </p>
      <CourseList courses={filteredCourses} />
      <Footer />
    </>
  );
}

export default App
