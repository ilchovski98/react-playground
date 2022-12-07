import { createContext, useState, useCallback } from "react";
import axios from "axios";
const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://127.0.0.1:3001/books");
    setBooks([...response.data]);
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

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    createBook,
    editBook,
    deleteBook,
    fetchBooks
  }

  return <BooksContext.Provider value={valueToShare}>
    {children}
  </BooksContext.Provider>
}

export { Provider };
export default BooksContext;
