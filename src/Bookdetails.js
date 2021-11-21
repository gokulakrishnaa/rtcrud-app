import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function Bookdetails({ books }) {
  const history = useHistory();
  const { id } = useParams();
  const book = books[id];
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
