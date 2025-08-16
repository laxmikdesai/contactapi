import RoundedTextField from "./RoundedTextField";
import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <span className="navbar-brand text-white" style={{ border: "0px" }}>
            Juno
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div>
            <TextField
              id="searchField"
              onKeyUp={() => alert("Key released!")}
              placeholder="Search Here"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  padding: 0,
                  width: "600px",
                  height: "30px",
                  backgroundColor: "white",
                  "& fieldset": { borderColor: "grey.400" },
                  "&:hover fieldset": { borderColor: "primary.main" },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                    borderWidth: 2,
                    color: "black",
                  },
                },
              }}
            />
            <span id="researchBox" style={{ display: "none" }}></span>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/ContactCard">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
  <Link to="/login" className="nav-link text-white">
    <IconButton aria-label="login" sx={{ color: 'white' }}>
      <LoginIcon />
    </IconButton>
  </Link>
</li>

            </ul>
          </div>
        </div>
      </nav>
     

    </>
  );
}
