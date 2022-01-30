import React from 'react';
import {Card, Button, CardGroup} from 'react-bootstrap';

const BookItem = ({book}) => {
  
    return (
    <div >
        <CardGroup className='cards'>
            <Card>
                <Card.Img className="cardsImage" variant="top" src={book.image} />
                <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Author: {book.author}</Card.Text>
                <Card.Text>Genre:{ book.genre.map(genre => ` ${genre} - `)} </Card.Text>
                <Button variant={book.available ? "success" : "danger"}>
                    {book.available ? "Available" : "Unavailable"}</Button>
            </Card.Body>
            </Card>
        </CardGroup>
    </div>
  );
};

export default BookItem;
