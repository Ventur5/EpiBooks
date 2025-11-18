import { useState } from "react";
import books from "./books/history.json";
import SingleBook from "../singleBook/SingleBook.jsx";

const AllTheBooks = () => {
  const [searchTitle, setSearchTitle] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a book..."
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
      </div>

      <div className="row g-3">
        {filteredBooks.map((book) => (
          <div key={book.id} className="col-md-4 col-6 col-xl-2">
            <SingleBook book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTheBooks;
