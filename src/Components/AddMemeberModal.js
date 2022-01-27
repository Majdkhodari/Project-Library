import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import memberStore from "../Stores/memberStore";

const AddMemeberModal = ({ isShowing, handleClose }) => {
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    membership: "gold",
  });

  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    memberStore.addMember(member);
    handleClose();
  };

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
            <Modal.Title>Add a new member</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="firstName"
                  type="text"
                  placeholder=" First Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="lastName"
                  type="text"
                  placeholder=" Last Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Membership</Form.Label>
                <Form.Select enabled name="membership" onChange={handleChange}>
                  {/* <option>Select One</option> */}
                  <option>gold</option>
                  <option>silver</option>
                  <option>platinum</option>
                </Form.Select>
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

export default AddMemeberModal;
