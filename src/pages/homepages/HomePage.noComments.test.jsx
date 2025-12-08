import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "./HomePage";

test("all'avvio non ci sono SingleComment nel DOM", () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  const comment = screen.queryByText(/comment/i);

  expect(comment).toBeNull();
});
