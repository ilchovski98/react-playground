import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/books";

function BookList() {
  const { books } = useContext(BooksContext);

  const renderedList = books.map((book) => {
    return (
      <BookShow book={book} key={book.id} />
    );
  });
  return <div className="book-list">{renderedList}</div>;
}

export default BookList;
