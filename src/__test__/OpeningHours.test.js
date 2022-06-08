import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Opening from "../components/OpeningHours";

describe("check if text exists in component", () => {
  it("check if heading exists", () => {
    render(<Opening />);
    const getHeading = screen.getByText(/Opening Times/i);
    expect(getHeading).toBeInTheDocument();
  });
});
