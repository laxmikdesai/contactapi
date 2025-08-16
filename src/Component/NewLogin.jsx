import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CustomButton from "./Button/CustomButton";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [bgIndex, setBgIndex] = useState(0);

  // List of background images
  const backgrounds = [
    "https://i.pinimg.com/736x/68/8c/e8/688ce847f631de88b87f5ac684c389e9.jpg",
    "https://i.pinimg.com/736x/18/49/9d/18499d6d7cd263f568f1863bae7d9624.jpg",
    "https://i.pinimg.com/1200x/c4/25/cc/c425cc071e8573bf42868d2977956b41.jpg",
    "https://i.pinimg.com/736x/0d/a3/c0/0da3c0062d2c6923f007ac3e3afe757f.jpg"

  ];

  // Change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", form);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#eaeff1",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "800px",
          height: "500px",
          overflow: "hidden",
          boxShadow: 6,
          bgcolor: "white",
        }}
      >
        {/* Left side - Rotating Background image + text */}
        <Box
          sx={{
            flex: 1,
            backgroundImage: `url(${backgrounds[bgIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 4,
            transition: "background-image 1s ease-in-out",
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome Back!
          </Typography>
          <Typography variant="body1" align="center">
            Log in to continue your journey 🚀
          </Typography>
        </Box>

        {/* Right side - Login Form */}
        <Box sx={{ flex: 1, p: 5, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Log In
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              label="Email address"
              fullWidth
              margin="normal"
              size="small"
              value={form.email}
              onChange={handleChange}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              size="small"
              margin="normal"
              value={form.password}
              onChange={handleChange}
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                />
              }
              label="Remember me"
              sx={{ mt: 1 }}
            />

            <CustomButton name="login" />
          </form>
        </Box>
      </Box>
    </Box>
  );
}
