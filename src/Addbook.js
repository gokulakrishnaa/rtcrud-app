import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export function Addbook() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const addBook = () => {
    const newBook = {
      name: name,
      author: author,
      cover: cover,
      description: description,
      rating: rating,
    };
    // setBooks([...books, newBook]);

    fetch("https://616a3fa516e7120017fa0ee6.mockapi.io/books", {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/books"));
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
        <Button onClick={addBook} variant="outlined">
          Add Book
        </Button>
      </div>
    </div>
  );
}
