import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ganChiTitle } from "../../constants/classNames";

interface MenuItem {
  label: string;
  onClick: () => void;
}

interface HeaderProps {
  logo: React.ReactNode;
  menuItems: MenuItem[];
}

const Header = ({ logo, menuItems }: HeaderProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          sx={{ justifyContent: "space-between", padding: "0 !important" }}
        >
          {/* Logo */}
          <Box display="flex" alignItems="center">
            {logo}
          </Box>

          {/* Menu items or Hamburger icon */}
          {isMobile ? (
            <IconButton onClick={toggleDrawer} edge="end" color="inherit">
              <MenuIcon />
            </IconButton>
          ) : (
            <Box display="flex" gap={3}>
              {menuItems.map((item, index) => (
                <Typography
                  className={ganChiTitle}
                  key={index}
                  variant="button"
                  sx={{ cursor: "pointer" }}
                  onClick={item.onClick}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                key={index}
                component="div" // Make ListItem render as a divv
                onClick={item.onClick}
                sx={{ cursor: "pointer" }}
              >
                <ListItemText primary={item.label} className={ganChiTitle} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
