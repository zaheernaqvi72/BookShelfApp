import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './Bookshelf.css';


function Bookshelf() {
  const [bookshelf, setBookshelf] = useState([]);

  // Load bookshelf from localStorage on initial render
  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  // Function to remove a book from the bookshelf
  const removeFromBookshelf = (bookToRemove) => {
    const updatedBookshelf = bookshelf.filter((book) => book.key !== bookToRemove.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  // Render books in the bookshelf
  return (
    <div className="Bookshelf">
      <div className="top-right-buttons">
        <Link to="/" className="btn btn-primary"><FontAwesomeIcon icon={faChevronCircleLeft} /> Search</Link>
      </div>
      <h1>My Bookshelf</h1>
      <div className="books">
        {bookshelf.map((book, index) => (
          <div key={index} className="book-card">
            <p><b>Book Title: </b>{book.title}</p>
            <p> <b>Author: </b>{book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
            <button className="btn btn-danger newbtn" onClick={() => removeFromBookshelf(book)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookshelf;
