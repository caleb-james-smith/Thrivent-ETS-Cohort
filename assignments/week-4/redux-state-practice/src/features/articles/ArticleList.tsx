import { useAppDispatch } from "../../app/hooks";
import type { ArticleListProps } from "../../types/types";
import { ArticleCard } from "./ArticleCard";
import { clearSavedArticles } from "./articlesSlice";

export function ArticleList({ articles }: ArticleListProps) {
  const dispatch = useAppDispatch();

  function handleClearAllSavedStatuses() {
    dispatch(clearSavedArticles());
  }

  function renderArticleList() {
    if (articles.length > 0) {
      return (
        <div className="articles-container">
          <div className="button-container">
            <button onClick={handleClearAllSavedStatuses}>Clear All Saved Statuses</button>
          </div>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      );
    } else {
      return <p>No articles found.</p>;
    }
  }

  return (
    <div className="articles-container">
      <h2>Articles</h2>
      {renderArticleList()}
    </div>
  );
}
