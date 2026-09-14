import "./App.css";
import { ArticleList } from "./features/articles/ArticleList";
import { useAppSelector } from "./app/hooks";
import { ArticleForm } from "./features/articles/ArticleForm";

function App() {
  const articles = useAppSelector((state) => state.articles.articles);

  function renderApp() {
    return (
      <div>
        <section id="center">
          <div>
            <h1>Article Reading-List App</h1>
            <p>
              An article reading-list React app using Redux for shared
              application data.
            </p>
          </div>
        </section>
        <section>
          <ArticleForm />
          <ArticleList articles={articles} />
        </section>
      </div>
    );
  }

  return renderApp();
}

export default App;
