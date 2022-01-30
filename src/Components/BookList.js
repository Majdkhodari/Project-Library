import React, { useState } from "react";
import booksStore from "../Stores/bookStore";
import BookItem from "./BookItem";
import { Button } from "react-bootstrap";
import AddBookModal from "./AddBookModal";
import { observer } from "mobx-react";

const BookList = () => {
  const books = booksStore.books.map((book) => (
    <BookItem key={book.id} book={book} />
  ));
  const [isShowing, setIsShowing] = useState(false);

  const handleClose = () => setIsShowing(false);
  const handleShow = () => setIsShowing(true);

  const [query, setQuery] = useState("");
  const book = booksStore.books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) &&
        book.title.includes()
    )
    .map((book) => <BookItem key={book.id} book={book} />);

  return (
    <div className="content">
      <Button variant="primary" size="sm" onClick={handleShow}>
        + New
      </Button>
      <AddBookModal isShowing={isShowing} handleClose={handleClose} />
      <div className="cardsContainer">{books}</div>;
      <div class="input-group rounded">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default observer(BookList);
