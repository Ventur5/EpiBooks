import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import "./styles.css";
import CommentArea from "../commentArea/CommentArea";

const SingleBook = ({ book }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelected = () => setIsSelected(!isSelected);

  return (
    <div className="h-100 single-book-wrapper" style={{ marginBottom: '1rem' }}>
      <Card className="single-book-card h-100"
        onClick={toggleSelected}
        style={{ 
          border: isSelected ? '3px solid red' : '1px solid lightgray',
          cursor: 'pointer'
        }}>
        <Card.Img src={book.img} />
        <Card.Body className='card-body'>
          <Card.Title className='title'>{book.title}</Card.Title>
        </Card.Body>
      </Card>

      {isSelected && (
        <div className="comment-area">
          <CommentArea asin={book.asin} />
        </div>
      )}
    </div>
  );
};

export default SingleBook;
