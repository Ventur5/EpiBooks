import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import SingleBook from "./SingleBook";

const fakeBook = {
  asin: "123",
  title: "Test Book",
  img: "test.jpg",
  price: 10,
  category: "test",
};

test("cliccando sulla card viene chiamata la callback con l'asin", async () => {
  const user = userEvent.setup();

  const mockSetter = vi.fn();

  render(
    <MemoryRouter>
      <SingleBook
        book={fakeBook}
        setSelectedAsin={mockSetter}
        isSelected={false}
      />
    </MemoryRouter>
  );

  const img = screen.getByRole("img");

  await user.click(img);

  expect(mockSetter).toHaveBeenCalledTimes(1);
  expect(mockSetter).toHaveBeenCalledWith("123");
});
