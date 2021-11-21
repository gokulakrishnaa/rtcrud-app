import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export const formValidationSchema = yup.object({
  name: yup.string().required("Why not fill this name ? 😊"),
  cover: yup
    .string()
    .required("Why not provide the Cover ?? 😊")
    .min(10, "Provide the proper details"),
  rating: yup
    .number()
    .required("Why not fill this rating ?? 😊")
    .min(0, "Invalid Rating")
    .max(10, "Invalid Rating"),
  description: yup
    .string()
    .required("Why not fill this Description ?? 😊")
    .min(20, "Need a bigger Description"),
  author: yup
    .string()
    .required("Why not fill this Author Name ?? 😊")
    .min(10, "Need a proper Author Name"),
});

export function Addbook() {
  const history = useHistory();
  // const [name, setName] = useState("");
  // const [author, setAuthor] = useState("");
  // const [cover, setCover] = useState("");
  // const [description, setDescription] = useState("");
  // const [rating, setRating] = useState("");

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        author: "",
        cover: "",
        description: "",
        rating: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (newBook) => {
        addBook(newBook);
      },
    });

  const addBook = (newBook) => {
    // const newBook = {
    //   name: name,
    //   author: author,
    //   cover: cover,
    //   description: description,
    //   rating: rating,
    // };
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
          Add Book
        </Button>
      </div>
    </form>
  );
}
