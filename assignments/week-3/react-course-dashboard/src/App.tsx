import Header from './components/Header.tsx';
import CourseCard from './components/CourseCard.tsx';
import Footer from './components/Footer.tsx';
// import './App.css';
import './styles/app.css';

function App() {
  const userName: string = "Jimmy Schmidt";
  const numCourses: number = 6;

  return (
    <>
      <div>
        <Header />
        <section>
          <p>Name: {userName}</p>
          <p>Number of courses: {numCourses}</p>
        </section>
        <section className="card-container">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App
