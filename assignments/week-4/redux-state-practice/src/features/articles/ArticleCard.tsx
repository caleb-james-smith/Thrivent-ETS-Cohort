import { useAppDispatch } from "../../app/hooks";
import type { ArticleCardProps } from "../../types/types";
import { toggleSaved, removeArticle } from "./articlesSlice";

export function ArticleCard({ article }: ArticleCardProps) {
  const dispatch = useAppDispatch();
  
  function handleToggleSavedStatus() {
    dispatch(toggleSaved(article.id));
  }

  function handleRemoveArticle() {
    dispatch(removeArticle(article.id));
  }

  function renderArticleCard() {
    return (
      <div className="article-card">
        <h3>{article.title}</h3>
        <p>Category: {article.category}</p>
        <p>Saved: {article.saved ? "Yes" : "No"}</p>
        <div id="button-container">
          <button onClick={handleToggleSavedStatus}>{article.saved ? "Unsave" : "Save"}</button>
          <button className="negative-button" onClick={handleRemoveArticle}>Delete</button>
        </div>
      </div>
    );
  }

  return renderArticleCard();
}
