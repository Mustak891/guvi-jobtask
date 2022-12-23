import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Fab from "@mui/material/Fab";
import LoginIcon from "@mui/icons-material/Login";
import StartIcon from "@mui/icons-material/Start";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import CustomizedDialogs from "./Dashboard/credentials";

const pages = [
  <CustomizedDialogs />
];

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" top="0" sx={{ bgcolor: "white", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="https://www.pngitem.com/pimgs/m/523-5233379_employee-management-system-logo-hd-png-download.png"
            alt="logo"
            style={{ height: "40px", width: "40px" }}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Poppins",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SwipeWire
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Poppins",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SwipeWire
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {props.auth ? (
            <>
              <Typography>
                <Link to="/login" className="link">
                  <Button
                    size="medium"
                    variant="extended"
                    startIcon={<LoginIcon />}
                    style={{ marginLeft: "10px" }}
                  >
                    Login
                  </Button>
                </Link>
              </Typography>
              <Link to="/register" className="link">
                <Fab
                  size="medium"
                  variant="extended"
                  color="primary"
                  style={{ marginLeft: "10px" }}
                >
                  Get started&nbsp;
                  <StartIcon />
                </Fab>
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="link">
                <Fab
                  size="medium"
                  variant="extended"
                  color="primary"
                  style={{ marginLeft: "10px" }}
                >
                  Dashboard&nbsp;
                  <DashboardIcon />
                </Fab>
              </Link>
              <Link to="/logout" className="link">
                <Button
                  size="medium"
                  variant="extended"
                  endIcon={<LogoutIcon />}
                  style={{ marginLeft: "10px" }}
                >
                  Logout
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
