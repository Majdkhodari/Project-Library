import React from 'react';
import { Form } from 'react-bootstrap';

export const Filter = ( { setFilter } ) => {
  const filterOptions =[
    "Self-Help", "Sci-Fi", "Thriller", "Suspense", "Fantasy", "Biography",
    "Business", "Entrepreneurship", "Crime", "Mystery", "Fiction"
];
    return (
    <div>
        <Form.Select 
            enabled name="membership" 
            onChange={(e) => setFilter(e.target.value)}>
            {filterOptions.map((option) => <option>{option}</option>)}
        </Form.Select>
    </div>
    );
};
