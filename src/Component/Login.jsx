import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    // Call your API here
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
      }}
    >
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3, width: 350 }}>
        <Typography variant="h5" fontWeight="bold" mb={2} textAlign="center">
          Login
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": { borderRadius: "10px" },
            }}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": { borderRadius: "10px" },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              borderRadius: "10px",
              py: 1.2,
              textTransform: "none",
              fontSize: "16px",
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
