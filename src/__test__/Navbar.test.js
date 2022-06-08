import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "../components/Navbar";

describe("check if navbar contains links", () => {
  it("check if home link exists", () => {
    render(<Navbar />);
    const getHomeLink = screen.getByText(/Home/i);
    expect(getHomeLink).toBeInTheDocument();
  });
});
