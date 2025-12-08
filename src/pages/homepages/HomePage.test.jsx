import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import HomePage from "./HomePage";

test("la navbar aggiorna il titolo di ricerca", async () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  const input = screen.getByRole("textbox");

  await userEvent.type(input, "dune");

  expect(input.value).toBe("dune");
});
