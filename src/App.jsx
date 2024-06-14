import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [bookshelf, setBookshelf] = useState([]);

  // Load bookshelf from localStorage on initial render
  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  // Function to handle book search
  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
      setBooks(response.data.docs);
    } else {
      setBooks([]);
    }
  };

  // Function to add a book to the bookshelf
  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  // Check if a book is already in the bookshelf
  const isInBookshelf = (book) => {
    return bookshelf.some((b) => b.key === book.key);
  };

  // Render search results
  return (
    <div className="App">
      <div className="top-right-buttons">
        <Link to="/bookshelf" className="btn btn-primary">My Bookshelf</Link>
      </div>
      <h1>Book Search</h1>
      <input type="text" value={query} onChange={handleSearch} placeholder="Search for books..." />
      <div className="books">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <p><b>Book Title: </b> {book.title}</p>
            <p> <b> Author: </b>{book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
            {isInBookshelf(book) ? (
              <button className="btn btn-success newbtn" disabled>
                Added to Bookshelf
              </button>
            ) : (
              <button className="btn btn-primary" onClick={() => addToBookshelf(book)}>
                Add to Bookshelf
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
