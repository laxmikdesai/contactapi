import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
        boxShadow: 1,
        width: "100%",
        p: 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Search Box */}
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <TextField
            placeholder="Search..."
            size="small"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                bgcolor: "#f5f5f5",
                pl: 1,
                width: { xs: "150px", sm: "250px", md: "350px" },
                "& fieldset": { border: "none" },
              },
            }}
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ color: "grey.600", mr: 1 }} />
              ),
            }}
          />
        </Box>

        {/* Profile Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar
            alt="User"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="caption" sx={{ color: "grey.600" }}>
              Welcome back,
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Lauro Morgado
            </Typography>
          </Box>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
