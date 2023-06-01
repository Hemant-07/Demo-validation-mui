import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import { mainListItems, secondaryListItems } from "../component/Listitems";
import Chart from "./Chart";
import "../web/Style.css";
import Dropdown from 'react-bootstrap/Dropdown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PieChart from "./PieChart"

import {  useNavigate } from "react-router-dom";

// import Deposits from './Deposits';
// import Orders from './Orders';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {/* {'Copyright © '} */}
      <Link color="inherit" href="https://mui.com/">
        {/* Your Website */}
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const chartData = [50,20,20,10];
  const navigate = useNavigate()
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
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
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
        

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <div className="container">

          <div className="con1">
            Dashboard
          </div>
          <div className="start">

          <div className="con2">
           <p> state</p>
              <ArrowDropDownIcon/>
          </div>

          <div className="con3">
           <p>District</p> 
            <ArrowDropDownIcon/>
          </div>

          <div className="con4">
           <p>City</p> 
            <ArrowDropDownIcon/>
          </div>
          
          <div className="con5">
           
          From

<input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31"/>
 
          </div>
          <div className="con6">
           
         To

<input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31"/>
 
          </div>
          </div>

          </div>


        <div className="top">
             <div className="top1">
                    <p className="p"> Total Users</p>
                      <p className="p1"> <b> 20,2162</b> </p>
             </div>
             <div className="top1">
                    <p className="p">Regi. Users</p>
                      <p className="p1">  <b>1,214</b> </p>
             </div>
             <div className="top1">
                    <p className="p">Active Users</p>
                      <p className="p1"> <b>1,214</b> </p>
             </div>
             <div className="top1">
                    <p className="p">No. of orders</p>
                      <p className="p1"> <b>5,845</b>  </p>
             </div>
             <div className="top1">
                    <p className="p">Tot. Revenue</p>
                      <p className="p1"> <b>5,845</b> </p>
             </div>
        </div>
            <Grid container spacing={2}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={8}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 300,
                    width:550
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={10} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: 300,
                    width:350
                  
                    
                  }}
                  className="chart"
                >
                  <PieChart data={chartData} />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              {/* <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                
                </Paper>
              </Grid> */}

            </Grid>

            <div className="nap">
              <div className="nap1">
               <p> No. Bulk of orders</p>
               <p>18,847</p>
              </div>
           
              <div className="nap1">
               <p> Value of Bulk orders</p>
               <p>138,874</p>
              </div>
           
              <div className="nap1">
               <p> No. of PIs</p>
               <p>1,214</p>
            
            </div>
           
              <div className="nap1">
               <p> No. of Design Made</p>
               <p>1,214</p>
            
            </div>
            </div>

            
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
