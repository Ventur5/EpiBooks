import books from "./books/fantasy.json";
import SingleBook from "../singleBook/SingleBook.jsx";

const AllTheBooks = ({ searchTitle, setSelectedAsin, selectedAsin }) => {
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="row g-3">
        {filteredBooks.map((book) => (
          <div key={book.id} className="col-md-4 col-12 col-xl-2">
            <SingleBook
              book={book}
              setSelectedAsin={setSelectedAsin}
              isSelected={selectedAsin === book.asin}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTheBooks;

