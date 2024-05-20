import React, { useState} from 'react';
import {Avatar, Button, Typography, Container, Box, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline, FormGroup} from '@mui/material';
import {Email, LockOutlined} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './signin.css'
import './redirect.jsx'
import { BrowserRouter as Router, useNavigate} from 'react-router-dom'
import * as Yup from "yup"
import { useFormik } from 'formik';

import {gapi} from "gapi-script"
import GoogleLogin from 'react-google-login'
import { useEffect } from 'react'



function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const defaultTheme = createTheme();

const usuarios = [
  {email: "marcos.lopez@gmail", password: "12345"},
  {email: "marcos.lopez@mindfactory.ar", password: "12345"},
  {email: "marc12@gmail" , password:"11111" },
];


function SignIn() {

const navigate = useNavigate();
const clientID = "826431473382-0rud95i8jtuvrn6eofo9uehu8dmrbp6p.apps.googleusercontent.com";

useEffect(() => {
  const start = () =>{
    gapi.auth2.init({
      client_id: clientID,
        
    });
  };

  gapi.load("client:auth2", start);
}, [clientID]);

const onSuccess = (response) =>{
  navigate("/redirect");
  console.log(response);
  
}

const onFailure = () =>{
  console.log("error");
}

  const enviarForm = (values) =>{
    const userValid = usuarios.find((usuario) => usuario.email === values.Email && usuario.password === values.Password);
    if(userValid){
      navigate("/redirect");
    }else{
      console.log("FALSE");
    }
    
}

  const {handleSubmit, handleChange, values, errors} = useFormik({
    initialValues:{
        Email: "",
        Password: ""
    },
    
    validationSchema: Yup.object({
      Email: Yup.string()
        .required("¡Campo Requerido!")
        .email("Correo electronico invalido")
        .max(255, "Maximo 255 caracteres"),
      Password: Yup.string()
        .required("¡Campo Requerido!")
        .min(5, "Minimo 5 caracteres"),
    }),

    onSubmit: enviarForm

})


  return (

    <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlined />
            </Avatar>

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

              <TextField
                margin="normal"
                fullWidth
                onChange={handleChange}
                label="Email Address"
                name="Email"
                autoComplete="email"
                value= {values.Email}
                error ={!!errors.Email}
                helperText={errors.Email}
              />
             
              <TextField
                 
                margin="normal"
                fullWidth
                name="Password"
                label="Password"
                type="password"
                onChange={handleChange}
                autoComplete="current-password"
                value = {values.Password}
                error = {!!errors.Password}
                helperText={errors.Password}
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <div className='btn'>
              <GoogleLogin 
                clientId={clientID}
                buttonText='Login with Google'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_policy'}
              />
              </div>
              <Button
                type='button'
                //onClick={handleClean}
              > 
                Reset
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="./redirect.jsx" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
        
    </ThemeProvider>
  );  
} 


export default SignIn;