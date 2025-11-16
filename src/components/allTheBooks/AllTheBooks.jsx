import books from './books/history.json';

const AllTheBooks = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {books.map((book) => (
          <div key={book.id} className="col-md-4 mb-3">
            <div className="card h-100 w-100 p-3">
                <img src={book.img} alt="#" className='img h-100 '/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTheBooks;
