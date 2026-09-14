import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Article, ArticlesState } from "../../types/types";

const initialState: ArticlesState = {
  articles: [],
}

// TODO: Add actions (functions) to reducers

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticle(state, action: PayloadAction<Article>) {
      // Append article to array of articles
      state.articles.push(action.payload);
    },
    removeArticle(state, action: PayloadAction<number>) {
      // Remove article from array of articles based on id
      state.articles = state.articles.filter(
        article => article.id !== action.payload
      );
    },
    toggleSaved(state, action: PayloadAction<number>) {
      // Find the article to modify based on id
      const article = state.articles.find(
        article => article.id === action.payload
      );
      // Invert the saved status
      if (article) {
        article.saved = !article.saved;
      }
    },
    clearSavedArticles(state) {
      // For all articles, set saved status to false

      // Version 1
      // state.articles = state.articles.map(
      //   article => ({
      //     ...article,
      //     saved: false
      //   })
      // );

      // Version 2
      for (const article of state.articles) {
        article.saved = false;
      }
    },
  }
});

export const { addArticle, removeArticle, toggleSaved, clearSavedArticles } = articlesSlice.actions;

export default articlesSlice.reducer;
