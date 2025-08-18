import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { saveAllContactToServer } from "../api/ContactApi";

const AddContact = () => {
  const [contact, setContact] = useState({
    fullName: "",
    dob: "",
    contactNo: "",
    email: "",
    address: "",
    status: "",
    photoUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...contact, dob: new Date(contact.dob) };
    console.log("Sending Payload:", payload);
    saveAllContactToServer(payload);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const payload = { ...contact, dob: new Date(contact.dob) };
    console.log("Updating Payload:", payload);
    saveAllContactToServer(payload);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 ,bgcolor:"yellow"}}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        Add New Contact
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Full Name"
          name="fullName"
          value={contact.fullName}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Date of Birth"
          name="dob"
          type="date"
          value={contact.dob}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          label="Mobile Number"
          name="contactNo"
          value={contact.contactNo}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={contact.email}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Address"
          name="address"
          value={contact.address}
          onChange={handleChange}
          fullWidth
          multiline
          rows={3}
        />

        <TextField
          label="Status"
          name="status"
          value={contact.status}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Photo URL"
          name="photoUrl"
          value={contact.photoUrl}
          onChange={handleChange}
          fullWidth
        />

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
          <Button type="button" variant="contained" color="error">
            Delete
          </Button>
          <Button
            type="button"
            variant="contained"
            color="warning"
            onClick={handleUpdate}
          >
            Update
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddContact;
