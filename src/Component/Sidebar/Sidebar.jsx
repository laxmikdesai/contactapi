import React, { useState } from "react";
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
  Collapse,
} from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function Sidebar() {
  const [openContact, setOpenContact] = useState(false);

  const handleContactClick = () => {
    setOpenContact(!openContact);
  };

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
      <Box sx={{ color: "white" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Typography variant="h4" fontWeight="bold">
JUNO
          </Typography>
        </Box>

        {/* User Info */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 3,
          }}
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
        <List sx={{ bgcolor: "black", color: "white" }}>
          {/* Dashboard */}
          <ListItem disablePadding>
            <ListItemButton sx={{ borderRadius: 1 }} component={Link} to="/">
              <ListItemIcon>
                <DashboardIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          {/* Contact with sub-items */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleContactClick} sx={{ borderRadius: 1 }}>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Contact" />
              {openContact ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          <Collapse in={openContact} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 4 }}>
              <ListItem disablePadding>
  <ListItemButton component={Link} to="/dashboard/addContact" sx={{ borderRadius: 1 }}>
                  <ListItemIcon>
                    <AddIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Add Contact" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ borderRadius: 1 }}
                  component={Link}
                  to="/manageContact"
                >
                  <ListItemIcon>
                    <ManageAccountsIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Manage Contact" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>
        </List>

        <Divider sx={{ my: 2, bgcolor: "gray" }} />

        {/* Support Section */}
        <Typography variant="body2" align="center">
          Need Help?
        </Typography>
        <Typography variant="body2" align="center">
          +1-202-555-0139
        </Typography>
        <Typography variant="body2" align="center" mb={2}>
          support@nike.us
        </Typography>
        <Button
          variant="contained"
          startIcon={<ExitToAppIcon />}
          sx={{
            bgcolor: "white",
            color: "#222",
            width: "100%",
            "&:hover": { bgcolor: "black", color: "white" },
            border: "0",
          }}
        >
          Log Out
        </Button>
      </Box>
    </Box>
  );
}
