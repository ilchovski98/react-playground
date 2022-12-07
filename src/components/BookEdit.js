import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBook } = useBooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBook(book.id, title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button type="submit" className="button is-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default BookEdit;
