import React, { useEffect, useState } from 'react'
import "../web/Style.css"
// import Form from "react-bootstrap/Form";
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
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ImageIcon from '@mui/icons-material/Image';
import Avatar from '@mui/material/Avatar';
import img from "../asset/a4.png"
import { TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import img1 from "../asset/act1.png"
import img7 from "../asset/act7.png"
import img2 from "../asset/act3.svg"
import img3 from "../asset/act4.svg"
import img4 from "../asset/act5.png"
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { connect } from 'react-redux';
import { addItem, updateItem, deleteItem } from '../redux/actions/Action';
import {useSelector, useDispatch} from 'react-redux'
// import { useNavigate } from 'react-router-dom';
// import { deleteItem } from '../redux/actions/Action';
// import { updateItem } from '../redux/actions/Action';






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


  
  const rows = [
    { id: "CW-GF-001", description:  "80outerframe",  category:"Lpvc profiles",group:"Casement Series",threshold :"10",hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6", actions: '', status: "" },
    { id:  "CW-GF-002", description : "80outerframe",category:"Lpvc profiles",group:"Casement Series",threshold :"10" ,hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6",actions: '', status: "" },
    { id:  "CW-GF-003", description: "80outerframe",category:"Lpvc profiles",group:"Casement Series", threshold :"10",hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6",actions: '', status: "" },
    { id:  "CW-GF-004", description: "80outerframe",category:"Lpvc profiles", group:"Casement Series",threshold :"10",hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6",actions: '', status: "" },
    { id:  "CW-GF-005", description: "80outerframe",category:"Lpvc profiles", group:"Casement Series",threshold :"10",hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6",actions: '', status: "" },
    { id:  "CW-GF-006", description: "80outerframe",category:"Lpvc profiles",group:"Casement Series",threshold :"10" ,hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6",actions: null, status: "" },
    { id:  "CW-GF-007", description: "80outerframe",category:"Lpvc profiles",group:"Casement Series",threshold :"10" ,hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6",actions: '', status: "" },
    { id:  "CW-GF-008", description: "80outerframe",category:"Lpvc profiles", group:"Casement Series",threshold :"10",hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6",actions: '', status: "" },
    { id:  "CW-GF-009", description: "80outerframe",category:"Lpvc profiles",group:"Casement Series",threshold :"10" ,hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6",actions: '', status: ""}
  ]


const Inventry=({})=> {
  // const handleUpdateItem = (updatedItem) => {
  //   dispatch(updateItem(updatedItem));
  // };
  const columns = [
    { field: 'id', headerName: 'Material Code', width: 100 },
    { field: 'description', headerName: 'Description', width: 130,    renderCell: (params) => (
      <TableCell >
        <img src={img} alt="Icon" style={{ marginRight: 5 }} width="20px" className='avatar' />
       {/* <CropOriginalIcon/> */}
        {params.value}
      </TableCell>
    ),
},
    { field: 'category', headerName: 'Category', width: 100 },
    {
      field: 'group',
      headerName: 'Group',
     
      width: 100,
    },
    {
      field: 'threshold',
      headerName: 'Threshold value',
      width:80
    },
    {
      field: 'hsn',
      headerName: 'HSN code',
      width:80
    },
    {
      field: 'PCS',
      headerName: 'Pcs',
      width:60
    },
    {
      field: 'Kg',
      headerName: 'kg/mtr',
      width:60
    },
    {
      field: 'profile',
      headerName: 'Profile Length mtr',
      width:70
    },
    {
      field: 'actions',
      headerName: 'Actions  ',
      width:100, renderCell: (params) => (
        <TableCell>
          <img src={img1} alt="Icon" style={{ marginRight: 5 }} width="10px" className='avatar'  onClick={() =>{navigate("/Add",{state:{route:"edit",values:params.row}})}} />
          <img src={img7} alt="Icon" style={{ marginRight: 5 }} width="10px" className='avatar'   onClick = {() =>{dispatch({type:"DELITEM", payload: params.row.id})}} />

          <img src={img2} alt="Icon" style={{ marginRight: 5 }} width="17px" className='avatar' />
          <img src={img3} alt="Icon" style={{ marginRight: 5 }} width="17px" className='avatar' onClick={()=>{
                  const updatedItem = {
          id: params.row.id,
          description: 'Updated Description',
          // other properties to be updated
        };
        dispatch(updateItem(updatedItem));
      }} 
           />
          {params.value}
        </TableCell>
      )
    },
    {
      field: 'Status',
      headerName: 'Status ',
      width:100, renderCell: (params) => (
        <TableCell className='toggle'>
          {/* <img src={img4} alt="Icon" style={{ marginRight: 5 }} width="20px" className='avatar' className="toggle" /> */}
      <ToggleOnIcon/>
        
          {params.value}
        </TableCell>
      )
    },
  ];

const [myrows,setMYRows] = useState([])
const [mycol,setMycol] = useState([])
const [selectedItem, setSelectedItem] = useState(null);

  const {row} = useSelector((state)=>state);
  const dispatch = useDispatch();
  console.log(row,"row fro reducer")
  // const navigate = useNavigate();

  useEffect(() => {
   setMYRows(row)
   setMycol(columns)
  }, [])
  // console.log(row)

  // useEffect(() => {
    // const deleteIds = ["CW-GF-004","CW-GF-007","CW-GF-006","CW-GF-008"];
    // const itemIndex = rows.findIndex(item => item.id === deleteId);
    // if (itemIndex !== -1) {
      // const updatedRows = rows.filter(item => !deleteIds.includes(item.id));

  //   dispatch({type:"DELETE_ITEM",payload:updatedRows});
  //   setTimeout(() => {
  //     setMycol(mycol)
  //     console.log("Deleted row with ID: " + deleteIds)
  //   }, 2000);
  // // }
  // }, [])
  

  // useEffect(() => {
  //  dispatch({type:"DELETE_ELE",payload:item.id});
  // }, [])
  
// console.log(row,"'ygjyhffhjfhtdyrdhjgfgfghfjhfjh");
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };

   const  abc=()=>{

    }
  return (
    <>
    <div className='d-flex'>
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

      <div className="header-main ">
        <div className="headleft">
        Material management
        </div>

        <div className="headmid">
          <SearchIcon/>
          search
        </div>

        <div className="right">
            <div className="head1">
                Import CSV > 
            </div>
            <div className="head2">
                Export CSV > 
            </div>
            <div className="head3">
                No. of Records > 
            </div>
            <div className="head4">
                Filter 
            </div>
            <div className="head5" onClick={()=>navigate("/Add")}>
            Add new material 
            </div>
        </div>

   


      </div>
   

      

   <div className="contmainstart">


      <div style={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={row}
        columns={mycol}
        
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 10]}
        checkboxSelection
        components={{
          
            // TableContainer: TableContainer,
            // TableHead: TableHead,
            TableRow: TableRow,
          }}
      />
   </div>
   </div>
      

      {/* <div className="Table" d-flex>
        <table>
            <tr>
                  
              <th>Material code</th>   

            </tr>
        </table>
      </div> */}


      </div>
      {/* <button ></button> */}
</>
      

    
  )
}

export default Inventry
