import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import Swal from "sweetalert2";   // ✅ Import SweetAlert2
import AdminloginApi from "../api/AdminloginApi";
import { showCustomAlert } from "./CustomAlert/CustomAlert";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [bgIndex, setBgIndex] = useState(0);
  const navigate = useNavigate(); // <-- initialize here

  // Background images
  const backgrounds = [
    "https://i.pinimg.com/736x/18/49/9d/18499d6d7cd263f568f1863bae7d9624.jpg",
  ];

  // Auto change slide
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {   // ✅ make it async
    e.preventDefault();
    console.log("Login Data:", form);

    try {
      const res = await AdminloginApi(form);  // ✅ send form
console.log("Response:", res);
      if (res?.token) {
 showCustomAlert({
  title: "Login Successful!",
  text: "Welcome back Admin 🚀",
  icon: "success",
  timer: 2000,
  showConfirmButton: false,
})
  sessionStorage.setItem("admin_token", res.token);

      setTimeout(() => {
  navigate("/contactApi/dashboard");
      }, 3000);



        
      } else {
       showCustomAlert({
          title: "Invalid Credentials",
          text: "Please check your username and password",
          icon: "error",
        });
      }
    } catch (error) {
      showCustomAlert({
        title: "Login Failed",
        text: "Something went wrong. Try again later.",
        icon: "warning",
      });
    }
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
        {/* Left side - Slider */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            overflow: "hidden",
          }}
        >
          {backgrounds.map((bg, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "opacity 1s ease-in-out",
                opacity: index === bgIndex ? 1 : 0,
              }}
            />
          ))}
          <Box sx={{ position: "absolute", textAlign: "center", p: 4 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Welcome Back!
            </Typography>
            <Typography variant="body1">
              Log in to continue your journey 🚀
            </Typography>
          </Box>
        </Box>

        {/* Right side - Login Form */}
        <Box
          sx={{
            flex: 1,
            p: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Log In
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              name="username"
              label="Username"
              fullWidth
              margin="normal"
              size="small"
              value={form.username}   // ✅ fix mismatch
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

  <Button
    type="submit"         
    variant="contained"   
    color="primary"       
    fullWidth             
    sx={{
      mt: 2,              
      borderRadius: 2,    
      fontWeight: "bold", 
      padding: "10px 0",  
      bgcolor: "black",
      "&:hover": {    bgcolor: "#333"
      }
    }}
  >
    Login
  </Button>

          </form>
        </Box>
      </Box>
    </Box>
  );
}
