import axios from "axios";
import { useState, useEffect } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async (title) => {
    const response = await axios.get("http://127.0.0.1:3001/books");
    setBooks([...response.data]);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://127.0.0.1:3001/books", {
      title,
    });
    setBooks([...books, response.data]);
  };

  const editBook = async (id, title) => {
    const response = await axios.put(`http://127.0.0.1:3001/books/${id}`, {
      title,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBook = async (id) => {
    const response = await axios.delete(`http://127.0.0.1:3001/books/${id}`);

    console.log('response', response);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onEdit={editBook} onDelete={deleteBook} />
      <BookCreate onSubmit={createBook} />
    </div>
  );
}

export default App;
