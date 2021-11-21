import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { formValidationSchema } from "./Addbook";

export function Editbook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  useEffect(() => {
    fetch(`https://616a3fa516e7120017fa0ee6.mockapi.io/books/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((bk) => setBook(bk));
  }, [id]);
  return book ? <UpdateBook book={book} /> : "";
}

function UpdateBook({ book }) {
  const history = useHistory();
  // const [name, setName] = useState(book.name);
  // const [author, setAuthor] = useState(book.author);
  // const [cover, setCover] = useState(book.cover);
  // const [description, setDescription] = useState(book.description);
  // const [rating, setRating] = useState(book.rating);

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: book.name,
        author: book.author,
        cover: book.cover,
        description: book.description,
        rating: book.rating,
      },
      validationSchema: formValidationSchema,
      onSubmit: (updatedBook) => {
        editBook(updatedBook);
      },
    });

  const editBook = (updatedBook) => {
    // const updatedBook = {
    //   name: name,
    //   author: author,
    //   cover: cover,
    //   description: description,
    //   rating: rating,
    // };

    fetch(`https://616a3fa516e7120017fa0ee6.mockapi.io/books/${book.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedBook),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/books"));
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-container">
      <div className="add-book">
        <TextField
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name && touched.name}
          helperText={errors.name && touched.name && errors.name}
          label="Book Name"
          variant="standard"
        />
        <TextField
          id="author"
          name="author"
          value={values.author}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.author && touched.author}
          helperText={errors.author && touched.author && errors.author}
          label="Author"
          variant="standard"
        />
        <TextField
          id="cover"
          name="cover"
          value={values.cover}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.cover && touched.cover}
          helperText={errors.cover && touched.cover && errors.cover}
          label="Cover Image"
          variant="standard"
        />
        <TextField
          id="description"
          name="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.description && touched.description}
          helperText={
            errors.description && touched.description && errors.description
          }
          label="Description"
          variant="standard"
        />
        <TextField
          id="rating"
          name="rating"
          value={values.rating}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.rating && touched.rating}
          helperText={errors.rating && touched.rating && errors.rating}
          label="Rating"
          variant="standard"
        />
        <Button type="submit" variant="outlined">
          Save
        </Button>
      </div>
    </form>
  );
}
