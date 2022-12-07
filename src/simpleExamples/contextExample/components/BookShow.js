import { useState, useContext } from "react";

import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

function BookShow({ book, onEdit, onDelete }) {
  const { count, incrementCount } = useContext(BooksContext);
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteBook = () => {
    onDelete(book.id);
  };

  const handleSubmit = (id, title) => {
    incrementCount();
    onEdit(id, title);
    handleEdit();
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <div>{content}</div>ye:{count}
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
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
