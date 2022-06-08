import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "../components/ContactForm";

describe("check text exists in for form component", () => {
  it("check name label exists inside component", () => {
    render(<ContactForm />);
    const formText = screen.getByText(/name/i);
    expect(formText).toBeInTheDocument();
  });
  it("check question label exists", () => {
    render(<ContactForm />);
    const formText = screen.getByText(/question/i);
    expect(formText).toBeInTheDocument();
  });
});

it("check submit button exists for ", () => {
  render(<ContactForm />);
  const getButton = screen.getByRole("button", { name: "Submit" });
  expect(getButton).toBeInTheDocument();
});
