import type { ArticleCardProps } from "../../types/types";

export function ArticleCard({ article }: ArticleCardProps) {
  function renderArticleCard() {
    return (
      <div>
        <h3>{article.title}</h3>
        <p>Category: {article.category}</p>
        <p>Saved: {article.saved}</p>
      </div>
    );
  }

  return renderArticleCard();
}
