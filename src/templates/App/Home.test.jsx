import { screen } from "@testing-library/react";
import Home from "./Home";
import { renderTheme } from "../../styles/render-theme";

test("renders hello", () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole("heading", { name: "Hello" }).parentElement;
  expect(headingContainer).toHaveStyleRule("background", "blue");
});
