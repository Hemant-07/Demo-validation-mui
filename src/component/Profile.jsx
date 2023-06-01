import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import "../web/Style.css";
import List from "@mui/material/List";
import { mainListItems, secondaryListItems } from "./Listitems";
import Divider from "@mui/material/Divider";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import PeopleIcon from "@mui/icons-material/People";
import Dropdown from 'react-bootstrap/Dropdown';
import NotificationsIcon from "@mui/icons-material/Notifications";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {  useNavigate } from "react-router-dom";


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

function Profile() {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
  return (
    
    <div className="d-flex">
    <AppBar position="absolute" open={open}>
    <Toolbar
      sx={{
        pr: "24px", // keep right padding when drawer closed
      }}
      className="mui"
    >
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        sx={{
          marginRight: "36px",
          ...(open && { display: "none" }),
        }}
        // className='mui'
      >
        <MenuIcon />
      </IconButton>
      <Typography
        component="h1"
        variant="h6"
        // color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        Dashboard
      </Typography>

      <div className="s4">
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </div>

      <div className="s2">
        <PeopleIcon />
      </div>

      <Dropdown>
<Dropdown.Toggle  id="dropdown-basic" className="s5">
  John Doe
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item   onClick={()=>navigate("/Profile")}>My Profile</Dropdown.Item>
  <Dropdown.Item  onClick={()=>navigate("/Password")}>Change Password</Dropdown.Item>
  <Dropdown.Item  onClick={()=>navigate("/Notification")}>Notification</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
     
    </Toolbar>
  </AppBar>
      <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
      </List>
      <div>
        <div className="express">
          <h1>Profile</h1>
        </div>
        <div className="profile">
          <div className="profile-left">
            <div className="person-left-1">
              <PersonIcon fontSize="large" />
            </div>
            <div className="person-left-2">
              <h4>JohnDoe</h4>
              <p>euro@gmail.com</p>
              <p>+916378175919</p>
            </div>
          </div>
          <div className="profile-right">
            <div className="profile-right-1">
              <EditIcon />
            </div>
            <div className="profile-right-2">
              <p>Edit Profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
