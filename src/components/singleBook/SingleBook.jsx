import { Badge } from "react-bootstrap";
import "./styles.css";
import { Link } from "react-router-dom";

const SingleBook = ({ book, setSelectedAsin, isSelected }) => {
  const handleClick = () => {
    setSelectedAsin(isSelected ? null : book.asin);
  };

  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${isSelected ? "flipped" : ""}`}>
        <div className="flip-card-front">
          <img src={book.img} alt={book.title} className="card-img" />
          <h5 className="card-title">{book.title}</h5>
        </div>
        <div className="flip-card-back">
          <h5>{book.title}</h5>
          <Badge className="badge" href="#">
            {book.price}$
          </Badge>
          <Badge className="bg-warning text-dark mt-1">{book.category}</Badge>
          <Link to={`/book/${book.asin}`} className="btn mt-2">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
