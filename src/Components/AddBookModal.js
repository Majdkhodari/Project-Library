import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import booksStore from "../Stores/bookStore";

const AddBookModal = ({ isShowing, handleClose }) => {
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: [],
  });

  const handleChange = (event) => {
    if (event.target.name === "genre")
      setSelectedGenre([...selectedGenre, event.target.value]);
    setBook({
      ...book,
      [event.target.name]: event.target.value,
      genre: selectedGenre,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    booksStore.addBook(book);
    handleClose();
  };

  const genre = [
    "Self-Help",
    "Sci-Fi",
    "Thriller",
    "Suspense",
    "Fantasy",
    "Biography",
    "Business",
    "Entrepreneurship",
    "Crime",
    "Mystery",
    "Fiction",
  ];

  return (
    <div>
      <>
        <Modal
          show={isShowing}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add a new book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="required">Book Title</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="title"
                  type="text"
                  placeholder="Book Title"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="required">Author</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="author"
                  type="text"
                  placeholder="Author"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="required">Genre: </Form.Label>
                <br />
                {genre.map((genre) => (
                  <Form.Check
                    inline
                    label={genre}
                    name="genre"
                    type={"checkbox"}
                    id={`inline-checkbox-1`}
                    onChange={handleChange}
                  />
                ))}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="required">Image:</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="Image"
                  type="text"
                  placeholder="Image URL"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};
export default AddBookModal;
