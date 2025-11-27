import books from "./books/romance.json";
import SingleBook from "../singleBook/SingleBook.jsx";

const AllTheBooks = ({ searchTitle }) => {
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <div className="container mt-4">
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
