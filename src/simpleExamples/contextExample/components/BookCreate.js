import { useState } from "react";

function BookCreate({ onSubmit }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="input"
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
