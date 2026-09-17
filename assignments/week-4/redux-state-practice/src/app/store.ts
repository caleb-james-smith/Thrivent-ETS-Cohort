import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "../features/articles/articlesSlice";

export const setupStore = () => {  
  return configureStore({
    reducer: {
      articles: articlesReducer,
    },
  });
}

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
