import { useState, useContext } from "react";

import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

function BookShow({ book }) {
  const { deleteBook } = useContext(BooksContext);
  const [showEdit, setShowEdit] = useState(false);

  const toggleEditState = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteBook = () => {
    deleteBook(book.id);
  };

  const handleSubmit = () => {
    toggleEditState();
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={toggleEditState}>
          Edit
        </button>

        <button onClick={handleDeleteBook} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
