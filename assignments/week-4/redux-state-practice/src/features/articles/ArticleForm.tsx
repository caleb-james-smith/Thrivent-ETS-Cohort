import { useState } from "react";
import type { Article } from "../../types/types";
import { addArticle } from "./articlesSlice";
import { useAppDispatch } from "../../app/hooks";

export function ArticleForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useAppDispatch();

  function handleAddArticle(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const article: Article = {
      id: crypto.randomUUID(),
      title: title,
      category: category,
      saved: false,
    };

    dispatch(addArticle(article));

    setTitle("");
    setCategory("");
  }

  function renderArticleForm() {
    return (
      <div id="form-container">
        <h2>Add Article</h2>
        <form onSubmit={handleAddArticle}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
          <label htmlFor="category">Category: </label>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          ></input>
          <button type="submit">Add Article</button>
        </form>
      </div>
    );
  }

  return renderArticleForm();
}
