import React from "react";
import { Likesdislikes } from "./Likesdislikes";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";

export function Books({ books, setBooks }) {
  const history = useHistory();
  return (
    <div className="books-app">
      {books.map(({ name, author, description, cover, rating, id }, index) => (
        <Booklist
          id={index}
          name={name}
          author={author}
          cover={cover}
          description={description}
          rating={rating}
          deletebutton={
            <IconButton
              onClick={() => {
                const deleteindex = index;
                const remBooks = books.filter((bk, idx) => idx !== deleteindex);
                setBooks(remBooks);
              }}
              aria-label="delete"
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          }
          editbutton={
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => history.push("/books/edit/" + index)}
              aria-label="edit"
              color="secondary"
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}

function Booklist({
  id,
  name,
  author,
  description,
  cover,
  rating,
  editbutton,
  deletebutton,
}) {
  const history = useHistory();
  return (
    <div className="book-list">
      <div className="book-image">
        <img className="bookimg" src={cover} alt={name} />
      </div>
      <div className="book-details">
        <h2 className="bookname">
          {name}
          <IconButton
            onClick={() => {
              history.push("/books/" + id);
            }}
            color="primary"
            aria-label="likes"
          >
            <InfoIcon />
          </IconButton>
        </h2>
        <h4 className="bookauthor">{author}</h4>
        <p className="bookrating">{rating}/5</p>
        <p className="bookdescription">
          <strong>Description : </strong>
          {description}
        </p>
        <div className="edit-delete">
          <Likesdislikes /> {editbutton} {deletebutton}
        </div>
      </div>
    </div>
  );
}
