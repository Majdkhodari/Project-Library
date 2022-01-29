import React from 'react';
import {Card, Button} from 'react-bootstrap';

const BookItem = ({book}) => {
  
    return (
    <div className='cards'>
        <Card style={{ width: '18rem' , height: '15rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Author: {book.author}</Card.Text>
            <Card.Text>Genre:{ book.genre.map(genre => ` ${genre} - `)} </Card.Text>
            <Button variant={book.available ? "success" : "danger"}>
                {book.available ? "Available" : "Unavailable"}</Button>
        </Card.Body>
        </Card>
    </div>
  );
};

export default BookItem;
