import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import CourseList from './components/CourseList.tsx';
import { courseData } from './data/courses.ts';

// import './App.css';
import './styles/app.css';

function App() {
  const userName: string = "Jimmy Schmidt";
  const numCourses: number = courseData.length;

  return (
    <>
      <div>
        <Header />
        <section>
          <p>Name: {userName}</p>
          <p>Number of courses: {numCourses}</p>
        </section>
        <CourseList courses={courseData} />
        <Footer />
      </div>
    </>
  );
}

export default App
