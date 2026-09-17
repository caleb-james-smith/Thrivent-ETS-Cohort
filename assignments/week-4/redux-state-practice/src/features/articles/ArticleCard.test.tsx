import { render, screen } from "@testing-library/react";
import type { Article } from "../../types/types";
import { ArticleCard } from "./ArticleCard";
import { Provider } from "react-redux";
import { setupStore } from "../../app/store";

describe("Article Card", () => {
  it("renders article info", () => {
    // Arrange

    // Create a new store for each test
    const store = setupStore();

    const testTitle = "Test Article";
    const testCategory = "testing";
    const testSaved = false;
    const expectedTextCategory = `Category: ${testCategory}`;
    // const expectedTextSaved = (testSaved ? "Saved: Yes" : "Saved: No");
    const expectedTextSaved = "Saved: " + (testSaved ? "Yes" : "No");

    const article: Article = {
      id: "1",
      title: testTitle,
      category: testCategory,
      saved: testSaved
    };

    // Act
    render(
      <Provider store={store}>
        <ArticleCard article={article} />
      </Provider>
  );

    // Assert
    expect(screen.getByText(testTitle)).toBeInTheDocument();
    expect(screen.getByText(expectedTextCategory)).toBeInTheDocument();
    expect(screen.getByText(expectedTextSaved)).toBeInTheDocument();
  });
});
