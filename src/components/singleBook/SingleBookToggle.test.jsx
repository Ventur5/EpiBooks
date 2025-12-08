import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import SingleBook from "./SingleBook";
import { useState } from "react";

const book1 = {
  asin: "1",
  title: "Book One",
  img: "one.jpg",
  price: 10,
  category: "test",
};

const book2 = {
  asin: "2",
  title: "Book Two",
  img: "two.jpg",
  price: 20,
  category: "test",
};

const Wrapper = () => {
  const [selected, setSelected] = useState(null);

  return (
    <MemoryRouter>
      <SingleBook
        book={book1}
        setSelectedAsin={setSelected}
        isSelected={selected === book1.asin}
      />

      <SingleBook
        book={book2}
        setSelectedAsin={setSelected}
        isSelected={selected === book2.asin}
      />
    </MemoryRouter>
  );
};

test("cliccando sul secondo libro il primo ritorna normale", async () => {
  const user = userEvent.setup();

  render(<Wrapper />);

  const images = screen.getAllByRole("img");

  const img1 = images[0];
  const img2 = images[1];

  await user.click(img1);

  const card1 = img1.closest(".flip-card-inner");
  const card2 = img2.closest(".flip-card-inner");

  expect(card1.classList.contains("flipped")).toBe(true);
  expect(card2.classList.contains("flipped")).toBe(false);

  await user.click(img2);

  expect(card1.classList.contains("flipped")).toBe(false);
  expect(card2.classList.contains("flipped")).toBe(true);
});
