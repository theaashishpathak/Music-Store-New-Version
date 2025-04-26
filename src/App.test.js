import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders SearchPage component", () => {
  render(<App />);
  const searchPageElement = screen.getByRole("main");
  expect(searchPageElement).toBeInTheDocument();
});
