import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Form, FormGroup, FormText, Input, Label } from "reactstrap";
import { saveAllContactToServer } from "../api/ContactApi";

const AddContact = () => {
  const [contact, setContact] = useState({
    fullName: "",
    dob: "",
    contactNo: "",
    email: "",
    address: "",
    status: "",
    photoUrl: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...contact,
      dob: new Date(contact.dob) // ensure proper date conversion
    };

    console.log("Sending Payload:", payload);
    saveAllContactToServer(payload);
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    const payload = {
      ...contact,
      dob: new Date(contact.dob) // ensure proper date conversion
    };

    console.log("Sending Payload:", payload);
    saveAllContactToServer(payload);
  };


  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="fullName">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter full name"
            value={contact.fullName}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="dob">Date of Birth</Label>
          <Input
            type="date"
            id="dob"
            name="dob"
            value={contact.dob}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="contactNo">Mobile Number</Label>
          <Input
            type="text"
            id="contactNo"
            name="contactNo"
            placeholder="Enter mobile number"
            value={contact.contactNo}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={contact.email}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            type="textarea"
            id="address"
            name="address"
            placeholder="Enter address"
            value={contact.address}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="status">Status</Label>
          <Input
            type="text"
            id="status"
            name="status"
            placeholder="Enter status"
            value={contact.status}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="photoUrl">Photo URL</Label>
          <Input
            type="text"
            id="photoUrl"
            name="photoUrl"
            placeholder="Enter photo URL"
            value={contact.photoUrl}
            onChange={handleChange}
          />
        </FormGroup>

        <Container className="text-center mt-3">
          <Button variant="success" size="sm" type="submit" style={{ marginLeft: "20px" }}>
            Submit
          </Button>
          <Button variant="danger" size="sm" type="button" style={{ marginLeft: "20px" }}>
            Delete
          </Button>
          <Button variant="warning" size="sm" type="button" style={{ marginLeft: "20px" }}>
            Update
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default AddContact;
