"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Link from "next/link";
//Images
import OrderImg from "@/assests/order.png";
import UserImg from "@/assests/user.png";
import ReviewsImg from "@/assests/Icon-Reviews.png";
import CancelImg from "@/assests/icon-cancel.png";
import LogoutImg from "@/assests/Icon-logout.png";
import Heart from "@/assests/heart.png";
import Cart from "@/assests/cart.png";
import Search from "@/assests/search.png";
import User from "@/assests/user-1.png";
//Icons
import { IoMdMenu } from "react-icons/io";
//Styles
import Styles from "@/styles/menu.module.css";


const pages = [
  {
    page: "Home",
    path: "/home"
  },
  {
    page: "Contact",
    path: "/contact"
  },
  {
    page: "About",
    path: "/about"
  },
  {
    page: "Signup",
    path: "/"
  },
];
const settings = [
  {
    icon: <Image src={UserImg} width={25} height={25} alt="user-icon" />,
    text: "Manage My Account",
    path: "/profile"
  },
  {
    icon: <Image src={OrderImg} width={25} height={25} alt="order-icon" />,
    text: "My Order",
    path: "/profile"
  },
  {
    icon: <Image src={CancelImg} width={25} height={25} alt="cancel-icon" />,
    text: "My Cancellations",
    path: "/profile"
  },
  {
    icon: <Image src={ReviewsImg} width={25} height={25} alt="reviews-icon" />,
    text: "My Reviews",
    path: "/profile"
  },
  
  {
    icon: <Image src={LogoutImg} width={25} height={25} alt="logout-icon" />,
    text: "Logout",
    path: "/profile"
  },
];

function AccountMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const [showClearIcon, setShowClearIcon] = React.useState(false);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setShowClearIcon(event.target.value === "" ? false : true);
  // };

  const handleClick = () => {
    console.log("clicked the clear icon...");
  };

  const handleOpenNavMenu = (
    event: React.SyntheticEvent<EventTarget>
  ): void => {
    console.log("event check:", event);
    setAnchorElNav(event.currentTarget as never);
  };
  const handleOpenUserMenu = (event: React.SyntheticEvent<EventTarget>) => {
    setAnchorElUser(event.currentTarget as never);
    console.log("event check:", event);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Inter, sans-serif",
              fontWeight: "bold",
              fontSize: "24px",
              letterSpacing: ".3rem",
              color: "#000",
              textDecoration: "none",
            }}
          >
            Exclusive
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              justifyContent: "flex-start",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menuAppbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                display: { xs: "flex", md: "none", lg: 'none', xl: 'none' },
              }}
            >
              <IoMdMenu />
            </IconButton>
            <Menu 
              id={Styles.menuAppbar}
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <Link href={page.path}>{page.page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 3,
                  color: "#000",
                  display: "block",
                  fontFamily: "Poppins, sans-serif",
                  textTransform: "capitalize",
                }}
                href={page.path}
              >
                {page.page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <FormControl>
              <TextField
                size="small"
                variant="outlined"
                placeholder="What are you looking for?"
                className="searchInput"
                // onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" onClick={handleClick}>
                      <Image src={Search} alt="cart" width={20} height={20} />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <div className={Styles.notifiImages}>
              <Image src={Heart} alt="favourite-icon" width={18} height={18} />
              <Image src={Cart} alt="cart" width={20} height={20} />
            </div>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Image src={User} alt="cart" width={20} height={20} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id={Styles.menuAppbar}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, i) => (
                <MenuItem key={i} onClick={handleCloseUserMenu}>
                  <Typography style={{ marginRight: 10 }}>
                    {setting.icon}
                  </Typography>
                  <Link href={setting?.path}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting.text}
                  </Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Divider orientation="horizontal" flexItem />
    </AppBar>
  );
}
export default AccountMenu;
