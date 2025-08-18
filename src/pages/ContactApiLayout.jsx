import React from "react";
import Sidebar from "../Component/Sidebar/Sidebar";
import Navbar from "../Component/Navbar1";
import { Box } from "@mui/material";
import AddContact from "../Component/AddContact";

const ContactApiLayout = () => {
  return (
    <Box sx={{ display: "flex", m:0, width: "100%", minHeight: "100vh" }}>
      {/* Sidebar (2/12 = ~16.7%) */}
      <Box
        sx={{
         // fixed to 2/12 of width
          minHeight: "100vh",
          width: "250px", // fixed width for sidebar
        }}
      >
        <Sidebar />
      </Box>

      {/* Main Section (10/12 = ~83.3%) */}
      <Box sx={{ flex: 1, bgcolor:"#F4F5FE" }}>
        {/* Navbar full width */}
        <Box sx={{ width: "100%" }}>
          <Navbar />
        </Box>

        {/* Page Content */}
        <Box sx={{ p: 2 }}>
            //here i want to rende add addContact component
      </Box>
      </Box>
    </Box>
  );
};

export default ContactApiLayout;
