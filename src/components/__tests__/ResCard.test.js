import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import Moc_Data from "./mocks/resCardMoc.json";
import "@testing-library/jest-dom";

it("should render RestaurantCardComponent with props Data", () => {
  render(<RestaurantCard resData={Moc_Data.info} />);
  console.log(Moc_Data);
  const name = screen.getByText("Shadab Go");
  expect(name).toBeInTheDocument();
});
