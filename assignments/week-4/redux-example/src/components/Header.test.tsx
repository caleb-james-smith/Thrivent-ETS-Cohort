// import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component", () => {
  it("renders name input by user", async () => {
    // Arrange
    const testString: string = "";
    const nameInputText: string = "Caleb";

    // Act
    render(<Header title={testString} text={testString} />);

    const nameInput = screen.getByLabelText(/name/i);
    await userEvent.type(nameInput, nameInputText);

    // const title = screen.getByText(testTitle);
    // const text = screen.getByText(testText);

    // Assert
    // expect(screen.getAllByText(testString).length).toBe(7);
    expect(nameInput).toHaveValue(nameInputText);
  });
  it("renders header title and text", () => {
    // Arrange
    const testTitle = "Title For Test";
    const testText = "Text for test.";

    // Act
    render(<Header title={testTitle} text={testText} />);

    // const title = screen.getByText(testTitle);
    // const text = screen.getByText(testText);

    // Assert
    expect(screen.getByText(testTitle)).toBeInTheDocument();
    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});
