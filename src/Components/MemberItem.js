import React from 'react';
import { Card,Button,CardGroup } from 'react-bootstrap';
import members from '../Data/membersData';

const MemberItem = ({member}) => {
    
  return (
    <div> 
        <CardGroup>
         <Card border={( member.membership==="gold" )? "warning": ( member.membership==="silver" )? "secondary" :
        ( member.membership==="platinum" )? "primary" :""} >
            <Card.Header>
            {( member.membership==="gold" )? "Gold Membership": ( member.membership==="silver" )? "Silver Membership" :
        ( member.membership==="platinum" )? "Platinum Membership" :""} 
            </Card.Header>
             <Card.Body>
                 <Card.Title>{`${member.firstName} ${member.lastName}`}</Card.Title>
                 <Card.Text>{`Borrowed Item: ${member.currentlyBorrowedBooks}`}</Card.Text>
                 <Button variant="primary">Update</Button>
             </Card.Body>
        </Card>
        </CardGroup>
    </div>
    );
};

export default MemberItem;
