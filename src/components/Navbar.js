import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import classes from "./Navbar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DrawerComp from "./DrawerComp";

const pages = [
  { name: "Home", link: "/", icon: <HomeIcon /> },
  { name: "About", link: "/about", icon: <InfoIcon /> },
  { name: "Projects", link: "/projects", icon: <LibraryBooksIcon /> },
  { name: "Contact", link: "/contact", icon: <ContactMailIcon /> },
];

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
      <Toolbar className={classes.nav}>
        <Typography
          marginLeft={2}
          variant="h3"
          fontFamily={"monospace"}
          fontWeight="bolder"
          color="white"
        >
          David Lee
        </Typography>
        <Tabs
          aria-label="icon label tabs example"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          {pages.map((page) => (
            <Tab
              icon={page.icon}
              key={page.name}
              label={page.name}
              onClick={() => navigate(page.link)}
              sx={{
                color: "white",
                fontFamily: "cursive",
              }}
            >
              {page.name}
            </Tab>
          ))}
        </Tabs>
        <DrawerComp pages={pages} />
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
