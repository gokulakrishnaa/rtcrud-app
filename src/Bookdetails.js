import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState, useEffect } from "react";

export function Bookdetails() {
  const history = useHistory();
  const { id } = useParams();
  // const book = books[id];

  const [book, setBook] = useState({});
  useEffect(() => {
    fetch(`https://616a3fa516e7120017fa0ee6.mockapi.io/books/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((bk) => setBook(bk));
  }, [id]);

  return (
    <div className="book-info">
      <div className="book-image">
        <img className="bookimg" src={book.cover} alt={book.name} />
      </div>
      <div className="book-info-details">
        <h2 className="bookname">{book.name}</h2>
        <h4 className="bookauthor">{book.author}</h4>
        <p className="bookrating">Rating : {book.rating}/5</p>
        <p className="bookdescription">
          <strong>Description : </strong>
          {book.description}
        </p>
      </div>
      <Button
        onClick={() => history.goBack()}
        startIcon={<ArrowBackIcon />}
        variant="outlined"
      >
        Back
      </Button>
    </div>
  );
}
