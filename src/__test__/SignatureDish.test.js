import {  render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dish from "../components/SigntureDishes";
import peparoni from "../images/peparoniPizza.png";

const mockDishArr = {
  dishNo: 1,
  name: "Peperoni",
  url: peparoni,
  description:
    "The finest home made sizzling peparoni pizza served with a side dish of garlic bread. Topping include cheese, peparoni and basel",
};

describe("test if dish renders props properly and displays it", () => {
  it("check name of dish is rendered properly", () => {
    render(<Dish dish={mockDishArr} />);
    const getDishName = screen.getByText(/Peperoni/i);
    expect(getDishName).toBeInTheDocument();
  });

  it("check description of dish is rendered properly", () => {
    render(<Dish dish={mockDishArr} />);

    const getDishDescription = screen.getByText(
      /The finest home made sizzling peparoni pizza served with a side dish of garlic bread. Topping include cheese, peparoni and basel/i
    );
    expect(getDishDescription).toBeInTheDocument();
  });
});
