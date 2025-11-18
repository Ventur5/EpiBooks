import { useState } from 'react';
import Card from 'react-bootstrap/Card';

const SingleBook = ({ book }) => {

const [isSelected, setIsSelected] = useState(false);

const toggleSelected = () => setIsSelected(!isSelected);


  return (
    <Card className="mb-3 h-100"
      onClick={toggleSelected}
      style={{ border: isSelected ? '3px solid red' : '1px solid lightgray', cursor: 'pointer' }}>
      <Card.Img src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
