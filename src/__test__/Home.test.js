import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../components/Home";

it("check button exists in home component", () => {
  render(<Home />);
  const getButton = screen.getByRole("button", { name: "Order now" });
  expect(getButton).toBeInTheDocument();
});
