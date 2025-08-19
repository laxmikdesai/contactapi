import React, { useState } from "react";
import { Container, TextField, Button, Box, Typography, Divider } from "@mui/material";
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

  const fields = [
    { label: "Full Name", name: "fullName", type: "text" },
    { label: "Date of Birth", name: "dob", type: "date" },
    { label: "Mobile Number", name: "contactNo", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Address", name: "address", type: "text", multiline: true, rows: 3 },
    { label: "Status", name: "status", type: "text" },
    { label: "Photo URL", name: "photoUrl", type: "text" },
  ];

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

  return (
    <Container sx={{ width: "100%", p: 2 }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 1 }}
      >
        Add New Contact
      </Typography>

  <Divider sx={{ mb: 4,mt:2, borderBottomWidth: 2, bgcolor: "gray" }} />

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          boxShadow: 2,
          bgcolor: "#fff",
          p: 4,
          borderRadius: 2,
        }}
      >
        {fields.map((field) => (
          <Box sx={{ flex: "1 1 30%", minWidth: "250px" }} key={field.name}>
            <TextField
              label={field.label}
              name={field.name}
              type={field.type}
              value={contact[field.name]}
              onChange={handleChange}
              fullWidth
              {...(field.multiline ? { multiline: true, rows: field.rows } : {})}
              InputLabelProps={field.type === "date" ? { shrink: true } : {}}
            />
          </Box>
        ))}

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 3,
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              borderRadius: 2,
              px: 4,
              py: 1.5,
              bgcolor: "#000",
              "&:hover": { bgcolor: "#333" },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddContact;
