import React, {useState} from 'react';
import booksStore from '../Stores/bookStore';
import BookItem from './BookItem';
import { Button } from 'react-bootstrap';
import AddBookModal from './AddBookModal' 
import { observer } from "mobx-react";

const BookList = () => {
    const books = booksStore.books.map((book) => (
        <BookItem key={book.id} book={book} />
      ));
      const [isShowing, setIsShowing] = useState(false);

      const handleClose = () => setIsShowing(false);
      const handleShow = () => setIsShowing(true);
    

  return (
    <div className='content'>
        <Button variant="primary" size="sm" onClick={handleShow}>
        + New
        </Button>
        <AddBookModal isShowing={isShowing} handleClose={handleClose} />
        <div className="cardsContainer">{books}</div>;
    </div>
    );
};

export default observer(BookList);
