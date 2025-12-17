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
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  logo: React.ReactNode;
  menuItems: Record<string, string>;
}

const Header = ({ logo, menuItems }: HeaderProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const contentWidth = isMobileOrTablet ? "90vw" : "55vw";
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          position: "absolute",
          zIndex: 999,
          width: contentWidth,
          mx: "auto",
          left: 0,
          right: 0,
          top: 10,
        }}
      >
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
            <Box display="flex" gap={4}>
              {Object.entries(menuItems).map(([id, label]) => (
                <Typography
                  onClick={() =>
                    navigate(label.toLowerCase().replaceAll(" ", "-"))
                  }
                  className={ganChiTitle}
                  key={id}
                  variant="button"
                  sx={{ cursor: "pointer" }}
                  // onClick={item.onClick}
                >
                  {label}
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
            {Object.entries(menuItems).map(([id, label]) => (
              <ListItem
                key={id}
                component="div" // Make ListItem render as a divv
                // onClick={item.onClick}
                sx={{ cursor: "pointer" }}
              >
                <ListItemText
                  primary={label}
                  className={ganChiTitle}
                  onClick={() =>
                    navigate(label.toLowerCase().replaceAll(" ", "-"))
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
