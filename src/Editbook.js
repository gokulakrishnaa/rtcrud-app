import React from "react";
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function Editbook({ books, setBooks }) {
  const history = useHistory();
  const { id } = useParams();
  const book = books[id];
  const [name, setName] = useState(book.name);
  const [author, setAuthor] = useState(book.author);
  const [cover, setCover] = useState(book.cover);
  const [description, setDescription] = useState(book.description);
  const [rating, setRating] = useState(book.rating);
  const editBook = () => {
    const updatedBook = {
      name: name,
      author: author,
      cover: cover,
      description: description,
      rating: rating,
    };
    const copybooks = [...books];
    copybooks[id] = updatedBook;
    setBooks(copybooks);
    history.push("/books");
  };

  return (
    <div className="add-book-container">
      <div className="add-book">
        <TextField
          id="standard-basic"
          value={name}
          onChange={(event) => setName(event.target.value)}
          label="Book Name"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          label="Author"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          value={cover}
          onChange={(event) => setCover(event.target.value)}
          label="Cover Image"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          label="Description"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          label="Rating"
          variant="standard"
        />
        <Button onClick={editBook} variant="outlined">
          Save
        </Button>
      </div>
    </div>
  );
}
