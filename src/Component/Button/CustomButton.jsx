import React from "react";
import { Button } from "@mui/material";
import "./Button.css";

const CustomButton = ({ name = "Login" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",   // take full width
        marginTop: "20px",
      }}
    >
      <Button
        id="btn"
        sx={{
          width: "100%",
          padding: "10px 20px",
          borderRadius: 0,
          textTransform: "none",
          bgcolor: "black",
          color: "white",
          fontWeight: "bold",
          "&:hover": {
            bgcolor: "#333",
          },
        }}
      >
        {name}
      </Button>
    </div>
  );
};

export default CustomButton;
