import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../web/Style.css";
import {  useNavigate } from "react-router-dom";
import img from "../asset/a2.avif"
import { useState } from "react";


function Copyright(props) {
  
 
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {


  const navigate = useNavigate();
    
  const [email,setEmail]= useState('');
  const [password,setPassword] =useState('');

  
  const handleEmailChange = (event) =>{
    setEmail(event.target.value);
  }
  
  const handlePasswordChange = (event) =>{
    setPassword(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);
    console.log(data,"data")
    console.log({
    });
      if ( data.get("email") === "hemant@gmail.com" && data.get("password") === "1234567"){
navigate("/dashboard")
      }
      else{
        alert("not navigated")
      }
    
  }
  
  const LoginForm = ()=>{

   
      // let obj = {
      //   email: data.get("email"),
      //    password: data.get("password"),
      // }
    //        let obj = {
    //     email: "hemant99arora@gmail.com" ,
    //      password:"123" ,
    //   }
      
    //   if(obj.email==="hemant99arora@gmail.com" && obj.password==="123"){
    //     navigate("/dashboard")
    //   }
    //   else{
    //     alert('Invalid email or password. please try again')
    //   }
     };
   
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  

  return (
 
     <div className="row">
      <div className="col-md-6">
        {/* <div className="main">
          <div className="a1"> */}
            <ThemeProvider theme={defaultTheme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar> */}

                  <div className="main">

                   <div className="main1">
                    <img src={img} alt="" width={30}  className="imgborder"/>
                   </div>

                  <div  className = "main2">

                  <Typography component="h1" variant="h5" className="m4">
                    Green Fortune
                  </Typography>
                  </div>
                  </div>
                  <h1>Welcome Back</h1>

                  <p className="s1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit iusto natus quam sequi quaerat ex veniam nesciunt totam
                    dicta fuga. Excepturi, voluptatem odit.
                  </p>
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      className="m5"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      className="m5"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    {/* <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        
      /> */}

                    {/* <Link href="#" variant="body2" className="m3"> */}
                    <p className="m9"> Forgot password?</p>
                    {/* </Link> */}

                    <Button
                      className="m2"
                      type="submit"
                      fullWidth
                      variant="contained"
                      // onClick={()=> navigate("/dashboard")}
                      
                >
                      Login
                    </Button>
                    <Grid container>
                      <Grid item>
                        {/* <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link> */}
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
              </Container>
            </ThemeProvider>
          {/* </div>
        </div> */}
      </div>
      <div className="col-md-6">
       
        <div className="ap">
          <div >
           <div className="img">
             <img src={img} alt="" width={200} />
           </div>  
       <b>   <h4 className="m6">Welcome to Green fortune</h4> </b>
          <p className="m3">
            Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Id
            perspiciatis necessitatibus optio 
            molestiae repudiandae distinctio
            iusto. Adipisci sint  delectus
             dolorem sapiente enim  explicabo natus
            voluptates  dolorum et nam eligendi eius excepturi, vel qui unde.
          </p>
          </div>
          </div>
        </div>
      </div>
   
   
  );
}
