import BookShow from "./BookShow";

function BookList({ books, onEdit, onDelete }) {
  const renderedList = books.map((book) => {
    return (
      <BookShow book={book} onEdit={onEdit} onDelete={onDelete} key={book.id} />
    );
  });
  return <div className="book-list">{renderedList}</div>;
}

export default BookList;
