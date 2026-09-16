import { render, screen } from "@testing-library/react";
import type { Article } from "../../types/types";
import { ArticleCard } from "./ArticleCard";
import { Provider } from "react-redux";
import { store } from "../../app/store";

describe("Article Card", () => {
  it("renders title, category, and saved", async () => {
    // Arrange
    const article: Article = {
      id: "1",
      title: "Test Article",
      category: "testing",
      saved: false
    };

    // Act
    render(
      <Provider store={store}>
        <ArticleCard article={article} />
      </Provider>
  );

    // Assert

  });
});
