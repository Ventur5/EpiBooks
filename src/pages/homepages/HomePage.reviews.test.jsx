import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import HomePage from "./HomePage";

test("cliccando su un libro con recensioni le recensioni vengono renderizzate", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  const cards = screen.getAllByRole("img");
  const firstCard = cards[0];

  await user.click(firstCard);

  const comments = await screen.findAllByText(/./);

  expect(comments.length).toBeGreaterThan(0);
});
