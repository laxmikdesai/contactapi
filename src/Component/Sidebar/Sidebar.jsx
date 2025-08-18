import React from "react";
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        bgcolor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
        
      }}
    >
      {/* Top Section */}
      <Box  sx={{ color:"white", bgcolor: "black" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Typography variant="h4" fontWeight="bold">
            {/* Replace with logo image */}
            <Link to="addContact" style={{ textDecoration: "none", color: "white" }}>
                        <span style={{ fontFamily: "sans-serif",color:"white" }}>✔</span>

              </Link>
          </Typography>
        </Box>

        {/* User Info */}
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 ,bgcolor: "black",}}
        >
          <Avatar
            src="https://mui.com/static/images/avatar/2.jpg"
            sx={{ width: 60, height: 60, mb: 1 }}
          />
          <Typography variant="body1" fontWeight="bold">
            Todd Smith
          </Typography>
          <Typography variant="body2" color="gray">
            Nike Sports • Los Angeles
          </Typography>
        </Box>

        {/* Menu Items */}
        <List sx={{bgcolor: "black" }}  >
          <ListItem disablePadding>
            <ListItemButton sx={{  borderRadius: 1 }}>
              <ListItemIcon>
                <DashboardIcon sx={{color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SwapHorizIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Transfers" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReceiptIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Statements" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
         <Typography variant="body2"  align="center">
          __________________
        </Typography>
         <Typography variant="body2"  align="center">
          Need Help?
        </Typography>
        <Typography variant="body2" align="center">
          +1-202-555-0139
        </Typography>
        <Typography variant="body2"  align="center" mb={2}>
          support@nike.us
        </Typography>
        <Button
          variant="contained"
          startIcon={<ExitToAppIcon />}
          sx={{
          bgcolor:"white",
            color: "#222",
            width: "100%",
            "&:hover": { bgcolor: "black" },
            border:"0"
          }}
        >
          Log Out
        </Button>



      </Box>

      {/* Bottom Section */}
    
    </Box>
  );
}
