import React, { useState, useEffect, useRef } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import { mainListItems, secondaryListItems } from "./Listitems";
import Divider from "@mui/material/Divider";
import "../web/Style.css";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import logo from "../asset/a4.png"


const userSchema = yup.object().shape({
  Name: yup
    .string()
    .required()
    .matches(/^[A-Za-z]{2,}$/, "Enter valid  Name"),
  group: yup.string().required("Enter valid Group Name"),
  id: yup.string().required("Enter id values"),
  description: yup
    .string()
    .required()
    .matches(/^.*$/, "Enter valid description"),
  brand: yup
    .string()
    .required()
    .matches(/^[A-Za-z]+$/, "Enter brand name"),
  material: yup.string().required("Enter material code"),
  profile: yup
    .string()
    .required()
    .matches(/^[A-Za-z0-9]+$/, "Enter valid profile"),

  cgst: yup.string().required("Enter valid cgst"),
  igst: yup.string().required("Enter valid igst"),
  sgst: yup.string().required("Enter valid sgst"),
  hsn: yup.string().required("Enter valid hsn"),
  category: yup.string().required("Enter valid sub-category"),
  quantity: yup.string().required("Enter valid quantity"),
  threshold: yup.string().required("Enter valid threshold"),
  supplier: yup.string().required("Enter valid supplier"),
  pcs: yup.string().required("Enter valid pcs per packet"),
  mtr: yup.string().required("Enter valid mtr"),
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

function Addnew() {
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);
  const fileInputRef4 = useRef(null);
  const [preview1, setPreview1] = useState();
  const [preview2, setPreview2] = useState();
  const [preview3, setPreview3] = useState();
  const [preview4, setPreview4] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();
  const[buttonName,setButtonName] =useState();
  const dispatch = useDispatch()
  useEffect(() => {
    if (image1) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview1(reader.result);
      };
      reader.readAsDataURL(image1);
    } else {
      setPreview1(null);
    }
  }, [image1]);
  useEffect(() => {
    if (image2) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview2(reader.result);
      };
      reader.readAsDataURL(image2);
    } else {
      setPreview2(null);
    }
  }, [image2]);
  useEffect(() => {
    if (image3) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview3(reader.result);
      };
      reader.readAsDataURL(image3);
    } else {
      setPreview3(null);
    }
  }, [image3]);
  useEffect(() => {
    if (image4) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview4(reader.result);
      };
      reader.readAsDataURL(image4);
    } else {
      setPreview4(null);
    }
  }, [image4]);

  // const [InputVisible,setInputVisible] = useState(false)
  // const [imageData, setImageData] = useState(null);

  //   const [imageData1, setImageData1] = useState(null);
  // const [imageData2, setImageData2] = useState(null);
  // const [imageData3, setImageData3] = useState(null);
  // const [imageData4, setImageData4] = useState(null);
  // const [inputVisible1, setInputVisible1] = useState(false);
  // const [inputVisible2, setInputVisible2] = useState(false);
  // const [inputVisible3, setInputVisible3] = useState(false);
  // const [inputVisible4, setInputVisible4] = useState(false);

  // const handleClick = () => {
  //   setInputVisible(true);
  // };

  // const handleClick = (inputIndex) => {
  //   if (inputIndex === 1) setInputVisible1(true);
  //   if (inputIndex === 2) setInputVisible2(true);
  //   if (inputIndex === 3) setInputVisible3(true);
  //   if (inputIndex === 4) setInputVisible4(true);
  // };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setImageData(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleFileChange = (e, inputIndex) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       if (inputIndex === 1) setImageData1(reader.result);
  //       if (inputIndex === 2) setImageData2(reader.result);
  //       if (inputIndex === 3) setImageData3(reader.result);
  //       if (inputIndex === 4) setImageData4(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const [data, setData] = useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const state = useSelector((state)=>state.row)
console.log(state)
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

console.log(location,
  "lovcaation")

  useEffect(() => {
   setData(location?.state?.values || {})
    }
  , [])

  useEffect(() => {

    setValue("description", data.description);
    setValue("id", data.id);
    setValue("category", data.category);
    setValue("group", data.group);
    setValue("threshold", data.threshold);
    setValue("hsn", data.hsn);
    setValue("pcs", data.PCS);

    // Set other form field values here
  }, [data]);
  
console.log(data,"asfasfohadsflladslfjhsadjlfDATA")
  //  setValue('Name',editableData.name?editableData.name : "", )


  const onSubmit = handleSubmit((values) => {
    if(location.state.route==="edit"){
      dispatch({type:"EDIT_ITEM",payload:values});
      navigate("/Inventry")
    }
    else{
      console.log(values);
      dispatch({type:"ADD_NEW_ITEM",payload:values})
      navigate("/Inventry")
    }

  });
  console.log("errors", errors);
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

      <form onSubmit={onSubmit}>
        <div className="ist">
          <div className="total">
            <div className="material">
              <p>Material Listing > </p>
            </div>
            <div className="Add-material">
              <p> Add Material </p>
            </div>
          </div>

          <div className="create">
            <div className="Discard" onClick={()=>navigate("/Inventry")}>
              <p> Discard</p>
            </div>
            <div className="Saves">
              <button type="submit" >Save</button>
            </div>
          </div>
        </div>

        <div className="information">
          <div className="basic">
            <p>Basic Information</p>
          </div>
          <p className="Basic-main">Main</p>
          <div className="plus">
            <div className="plus1">
              
              {preview1 ? (
                <img
                  src={preview1}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    fileInputRef1.current.click();
                  }}
                  className="imagesize"
                  width={"100px"}
                />
              ) : (
                <button
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    fileInputRef1.current.click();
                  }}
                  className="imagesize"
                >
                  +
                </button>
              )}
              <input
                type="file"
                style={{ display: "none", cursor: "pointer" }}
                ref={fileInputRef1}
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.type.substr(0, 5) === "image") {
                    setImage1(file);
                  } else {
                    setImage1(null);
                  }
                }}
              />

            </div>

            <div className="plus2">
              
              {preview2 ? (
                <img
                  src={preview2}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    fileInputRef2.current.click();
                  }}
                  className="imagesize" width={"100px"}
                />
              ) : (
                <button
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    fileInputRef2.current.click();
                  }}
                  className="imagesize"
                >
                  +
                </button>
              )}
              <input
                type="file"
                style={{ display: "none", cursor: "pointer" }}
                ref={fileInputRef2}
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.type.substr(0, 5) === "image") {
                    setImage2(file);
                  } else {
                    setImage2(null);
                  }
                }}
              />

            </div>

            <div className="plus3">
              
              {preview3 ? (
                <img
                  src={preview3}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    fileInputRef3.current.click();
                  }}
                  className="imagesize"
                  width={"100px"}
                />
              ) : (
                <button
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    fileInputRef3.current.click();
                  }}
                  className="imagesize"
                >
                  +
                </button>
              )}
              <input
                type="file"
                style={{ display: "none", cursor: "pointer" }}
                ref={fileInputRef3}
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.type.substr(0, 5) === "image") {
                    setImage3(file);
                  } else {
                    setImage3(null);
                  }
                }}
              />

            </div>
            <div className="plus4">
              
              {preview4 ? (
                <img
                  src={preview4}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    fileInputRef4.current.click();
                  }}
                  className="imagesize"
                  width={"100px"}
                />
              ) : (
                <button
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    fileInputRef4.current.click();
                  }}
                  className="imagesize"
                >
                  +
                </button>
              )}
              <input
                type="file"
                style={{ display: "none", cursor: "pointer" }}
                ref={fileInputRef4}
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.type.substr(0, 5) === "image") {
                    setImage4(file);
                  } else {
                    setImage4(null);
                  }
                }}
              />
             
            </div>
          </div>
        </div>

        <div className="validates row">
          <div className="validates1 col-md-4">
            <Form.Control
              type="text"
              placeholder=" Name"
              className="inp"
              {...register("Name")}
            />
            {errors?.Name?.message && (
              <div className="err">{errors.Name?.message}</div>
            )}

            <Form.Control
              type="text"
              placeholder="Group"
              className="inp"
              {...register("group")}
            />
            {errors?.group?.message && (
              <div className="err">{errors.group.message}</div>
            )}

            <Form.Control
              type="text"
              placeholder="id"
              className="inp"
              {...register("id")}
            />
            {errors?.kg?.message && (
              <div className="err">{errors.kg.message}</div>
            )}
            <Form.Control
              type="text"
              placeholder="Description"
              {...register("description")}
              className="inp"
              id="des"
            />
            {errors?.description?.message && (
              <div className="err">{errors?.Description?.message}</div>
            )}
            <Form.Control
              type="text"
              placeholder="Brand Name"
              {...register("brand")}
              className="inp"
            />
            {errors?.brand?.message && (
              <div className="err">{errors.brand.message}</div>
            )}
          </div>

          <div className="validates2 col-md-4">
            <Form.Control
              type="text"
              placeholder=" Material Category"
              className="inp"
              {...register("material")}
            />
            {errors?.material?.message && (
              <div className="err">{errors.material.message}</div>
            )}

            <Form.Control
              type="text"
              placeholder="Profile length mtr.copy"
              className="inp"
              {...register("profile")}
            />
            {errors?.profile?.message && (
              <div className="err">{errors.profile.message}</div>
            )}

            <Form.Control
              type="text"
              placeholder="CGST%"
              className="inp"
              {...register("cgst")}
            />
            {errors?.cgst?.message && (
              <div className="err">{errors.cgst.message}</div>
            )}
            <Form.Control
              type="text"
              placeholder="IGST%"
              {...register("igst")}
              className="inp"
            />
            {errors?.igst?.message && (
              <div className="err">{errors.igst.message}</div>
            )}
            <Form.Control
              type="text"
              placeholder=" SGST%"
              {...register("sgst")}
              className="inp"
            />
            {errors?.sgst?.message && (
              <div className="err">{errors.sgst.message}</div>
            )}
            <Form.Control
              type="text"
              placeholder=" HSN code"
              {...register("hsn")}
              className="inp"
            />
            {errors?.hsn?.message && (
              <div className="err">{errors.hsn.message}</div>
            )}
          </div>

          <div className="validates3 col-md-4">
            <Form.Control
              type="text"
              placeholder=" Sub-category"
              className="inp"
              {...register("category")}
            />
            {errors?.category?.message && (
              <div className="err">{errors.category.message}</div>
            )}

            <Form.Control
              type="text"
              placeholder="Quantity"
              className="inp"
              {...register("quantity")}
            />
            {errors?.quantity?.message && (
              <div className="err">{errors.quantity.message}</div>
            )}

            <Form.Control
              type="text"
              placeholder="Threshold Value"
              className="inp"
              {...register("threshold")}
            />
            {errors?.threshold?.message && (
              <div className="err">{errors.threshold.message}</div>
            )}
            <Form.Control
              type="text"
              placeholder="Supplier Code"
              {...register("supplier")}
              className="inp"
            />
            {errors?.supplier?.message && (
              <div className="err">{errors.supplier.message}</div>
            )}
            <Form.Control
              type="text"
              placeholder=" PCS per packet"
              {...register("pcs")}
              className="inp"
            />
            {errors?.pcs?.message && (
              <div className="err">{errors.pcs.message}</div>
            )}
            <Form.Control
              type="text"
              placeholder=" Kg/Mtr"
              {...register("mtr")}
              className="inp"
            />
            {errors?.mtr?.message && (
              <div className="err">{errors.mtr.message}</div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Addnew;
