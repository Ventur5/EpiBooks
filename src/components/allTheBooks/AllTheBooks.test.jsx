import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllTheBooks from "./AllTheBooks";
import books from "./books/scifi.json";

test("renderizza una card per ogni libro nel JSON", () => {
  render(
    <MemoryRouter>
      <AllTheBooks
        searchTitle=""
        selectedAsin={null}
        setSelectedAsin={() => {}}
      />
    </MemoryRouter>
  );

  const images = screen.getAllByRole("img");

  expect(images.length).toBe(books.length);
});
