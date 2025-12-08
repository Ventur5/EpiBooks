import { render, screen } from "@testing-library/react";
import CommentArea from "./CommentArea";

test("CommentArea viene renderizzato correttamente", () => {
  render(<CommentArea asin="12345" />);

  const title = screen.getByText(/comments/i);
  expect(title).toBeInTheDocument();
});
