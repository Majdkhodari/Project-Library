import React, {useState} from 'react';
import booksStore from '../Stores/bookStore';
import BookItem from './BookItem';
import SearchBar from './SearchBar';
import AddBookModal from './AddBookModal' 
import { Button } from 'react-bootstrap';
import { observer } from "mobx-react";
import { Filter } from './Filter';

const BookList = () => {
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('');

    const books = booksStore.books.filter(
        (book) => book.title.toLowerCase().includes(query.toLowerCase()) &&
                    book.genre.includes(filter) 
    ).map((book) => (<BookItem key={book.id} book={book} />));

      const [isShowing, setIsShowing] = useState(false);

      const handleClose = () => setIsShowing(false);
      const handleShow = () => setIsShowing(true);
    

  return (
    <div className='content'>
        <div className='upperBarContainer'>
        <Button variant="primary" size="sm" onClick={handleShow}>
        + New
        </Button>
        <SearchBar setQuery={setQuery} />
        <Filter setFilter={setFilter}/>
        </div>
        <AddBookModal isShowing={isShowing} handleClose={handleClose} />
        <div className="cardsContainer">{books}</div>;
    </div>
    );
};

export default observer(BookList);
