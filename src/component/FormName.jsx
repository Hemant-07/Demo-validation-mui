import React from "react";
import "../web/Style.css";
import Form from "react-bootstrap/Form";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import PeopleIcon from "@mui/icons-material/People";
import Dropdown from "react-bootstrap/Dropdown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import { mainListItems, secondaryListItems } from "./Listitems";
import Divider from "@mui/material/Divider";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const userSchema = yup.object().shape({
  firstName: yup.string().required().matches(/^[A-Za-z]{2,}$/,"Enter valid First Name"),
  lastName: yup.string().required().matches(/^[A-Za-z]{2,}$/,"Enter valid Last Name "),
  email: yup.string().required().matches(
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    "Enter Valid email address"),
  secondaryEmail: yup.string().required().matches(
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    "Enter Valid Secondary email address"),
  contactNo: yup.string().required().matches(/^\d{10}$/,"Enter valid  Contact no."),
  AltercontactNo: yup.string().required().matches(/^\d{10}$/,"Enter Valid  Alternate Contact no."),
  PinCode: yup.string().required().matches(/^[1-9][0-9]{5}$/," Please Enter valid picode"),
  Gst: yup.string().required().matches(/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/," Please Enter  valid Gst No."),
  Pan: yup.string().required().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/," Please Enter valid Pan Number"),
  Designation: yup.string().required().matches(/^[A-Za-z\s]{2,}$/,"Enter valid  Designation "),
  Billing: yup.string().required().matches(/^[A-Za-z0-9\-]{1,}$/," Please Enter  valid Billing no"),
  Company: yup.string().required().matches( /^[A-Za-z0-9\s]{2,}$/,"Please Enter valid company"),
  State: yup.string().required().matches(/^[A-Za-z\s]{2,}$/,"Enter valid State"),
  Statecode: yup.string().required().matches(/^[A-Za-z]{2}$/,"Please Enter valid State Code"),
  City: yup.string().required().matches(/^[A-Za-z\s]{2,}$/,"Enter valid City Name"),
  Shopping: yup.string().required().matches(/^[A-Za-z0-9\s\-,]+$/," Please Enter valid Shopping Number"),
});

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

const FormName = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const onSubmit = handleSubmit( (values) => {
    console.log(values);
  });
  return (
    <div>
      <div className="sidebar">
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
              <Dropdown.Toggle id="dropdown-basic" className="s5">
                John Doe
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/Profile")}>
                  My Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/Password")}>
                  Change Password
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/Notification")}>
                  Notification
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Toolbar>
        </AppBar>
        <List component="nav">
          {mainListItems}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems}
        </List>
      </div>
      <form onSubmit={onSubmit}>
        <div className="karma">
          <div className="form-card">
            <div className="dealerl">
              <h5>
                
                List of Dealers > <span className="para">Deler Deatil</span>
              </h5>
            </div>
            <div className="dealerR">
              <button className="b1">Cancel </button>
              <button className="b2" type="submit">
                Save Changes
              </button>
            </div>
          </div>

          <div className="  crax">
            <div className="dealmain">
              <Form.Control
                type="text"
                placeholder="First Name"
                className="inp"
                {...register("firstName")}
              />
              {errors.firstName && <div className="err">{errors.firstName.message}</div>}
          
              <Form.Control
                type="text"
                placeholder="Email ID"
                className="inp"
                {...register("email")}
              />
                {errors.email && <div className="err">{errors.email.message}</div>}
           
              <Form.Control
                type="text"
                placeholder="Secondary Email ID"
                className="inp"
                {...register("secondaryEmail")}
              />
                {errors.secondaryEmail && <div className="err">{errors.secondaryEmail.message}</div>}
              <Form.Control
                type="text"
                placeholder="Designation"
                {...register("Designation")}
                className="inp"
              />
              {errors.Designation && <div className="err">{errors.Designation.message}</div>}
              <Form.Control
                type="text"
                placeholder="Pin Code"
                {...register("PinCode")}
                className="inp"
              />
                {errors.PinCode && <div className="err">{errors.PinCode.message}</div>}
              <Form.Control
                type="text"
                placeholder="GST Number"
                {...register("Gst")}
                className="inp"
              />
                {errors.Gst && <div className="err">{errors.Gst.message}</div>}
                {/* "29ABCDE1234F1ZW" */}
            </div>
            <div className="dealmain1">
              <Form.Control
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
                className="inp"
              />
                {errors.lastName && <div className="err">{errors.lastName.message}</div>}
              <Form.Control
                type="text"
                placeholder="Contact No."
                {...register("contactNo")}
                className="inp"
              />
                {errors.contactNo && <div className="err">{errors.contactNo.message}</div>}
              <Form.Control
                type="text"
                placeholder="Alternate phone number"
                className="inp"
                {...register("AltercontactNo")}
              />
               {errors.AltercontactNo && <div className="err">{errors.AltercontactNo.message}</div>}
              <Form.Control
                type="text"
                placeholder="PAN NUMBER"
                {...register("Pan")}
                className="inp"
              />
              {/* "ABCDE1234F" */}
                {errors.Pan && <div className="err">{errors.Pan.message}</div>}
              <Form.Control
                type="text"
                placeholder="Billing Address"
                {...register("Billing")}
                className="inp"
              />
                {errors.Billing && <div className="err">{errors.Billing.message}</div>}
                {/* "ABCD1234" */}
            </div>
            <div className="dealmain2">
              <Form.Control
                type="text"
                placeholder="Company Name"
                {...register("Company")}
                className="inp"
              />
                {errors.Company && <div className="err">{errors.Company.message}</div>}
              <Form.Control
                type="text"
                placeholder="State"
                className="inp"
                {...register("State")}
              />
                {errors.State && <div className="err">{errors.State.message}</div>}
              <Form.Control
                type="text"
                placeholder="State Code"
                {...register("Statecode")}
                className="inp"
              />
              {errors.Statecode && <div className="err">{errors.Statecode.message}</div>}
              <Form.Control
                type="text"
                placeholder="City"
                className="inp"
                {...register("City")}
              />
                {errors.City && <div className="err">{errors.City.message}</div>}
               
              <Form.Control
                type="text"
                placeholder="Shopping Address"
                {...register("Shopping")}
                className="inp"
              />
                {errors.Shopping && <div className="err">{errors.Shopping.message}</div>}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormName;
