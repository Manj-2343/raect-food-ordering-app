import { render, screen } from "@testing-library/react";
import ContactUsPage from "../ContactUsPage";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  it("Should load contact us component", () => {
    render(<ContactUsPage />);
    const heading = screen.getByRole("heading");
    //   Assertion
    expect(heading).toBeInTheDocument();
  });
  test("Should load button inside my contact component", () => {
    render(<ContactUsPage />);
    const button = screen.getByText("Submit");
    //   Assertion
    expect(button).toBeInTheDocument();
  });
  test("Should load 2 input boxes on the contact component", () => {
    render(<ContactUsPage />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //this input-box  is an array of object
    //   Assertion
    expect(inputBoxes.length).toBe(3);
  });
});
