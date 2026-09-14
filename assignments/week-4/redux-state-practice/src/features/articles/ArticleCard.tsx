import type { ArticleCardProps } from "../../types/types";

export function ArticleCard({ article }: ArticleCardProps) {
  function renderArticleCard() {
    return (
      <div className="article-card">
        <h3>{article.title}</h3>
        <p>Category: {article.category}</p>
        <p>Saved: {article.saved ? "Yes" : "No"}</p>
      </div>
    );
  }

  return renderArticleCard();
}
