import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test("il componente Welcome viene montato correttamente", () => {
  render(<Welcome />);

  const title = screen.getByText(/Look for your story.../i);
  expect(title).toBeInTheDocument();

  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});
