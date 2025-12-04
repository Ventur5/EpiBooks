import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import books from "../../components/allTheBooks/books/scifi.json";
import MyNav from "../../components/myNav/MyNav";
import MyFooter from "../../components/myFooter/MyFooter";
import CommentArea from "../../components/commentArea/CommentArea";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

const BookDetails = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [theme, setTheme] = useState("light");
  const [book, setBook] = useState(null);
  const { asin } = useParams();

  useEffect(() => {
    const foundBook = books.find((b) => String(b.asin) === String(asin));
    setBook(foundBook || null);
  }, [asin]);

  if (!book) return <div className="container mt-4">Libro non trovato</div>;

  return (
    <div className={theme === "light" ? "theme-light" : "theme-dark"}>
      <MyNav
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        theme={theme}
        setTheme={setTheme}
      />

      <div className="container mt-1 mb-3 book-container">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6 mt-5">
            <img
              src={book.img}
              alt={book.title}
              className="w-100"
            />
          </div>
          <div className="col-12 col-md-6 mt-5 d-flex flex-column align-items-start gap-3">
            <h2>{book.title}</h2>
            <Badge className="bg-warning p-2">Category: {book.category}</Badge>
            <Badge className="bg-secondary p-2">Price: {book.price}$</Badge>
            <Link to="/" className="btn btn-info">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
      <CommentArea asin={book.asin} />
      <MyFooter />
    </div>
  );
};

export default BookDetails;
