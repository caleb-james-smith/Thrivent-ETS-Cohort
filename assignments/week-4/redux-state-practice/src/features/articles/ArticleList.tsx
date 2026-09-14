import type { ArticleListProps } from "../../types/types";
import { ArticleCard } from "./ArticleCard";

export function ArticleList({ articles }: ArticleListProps) {
  function renderArticleList() {
    if (articles.length > 0) {
      return articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ));
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
