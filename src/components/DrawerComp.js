import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const DrawerComp = ({ pages }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index} onClick={() => navigate(page.link)}>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText>{page.name}</ListItemText>
            </ListItemButton>
          ))}
        </List>

        {/* <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem> */}
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </Box>
  );
};

export default DrawerComp;
