import React, { useState} from 'react';
import {Avatar, Button, Typography, Container, Box, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline} from '@mui/material';
import {LockOutlined} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'
import './redirect.jsx'
import { BrowserRouter as Router, useNavigate} from 'react-router-dom'



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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
  
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);
  
    const user = data.get('email') as string;
    const pass = data.get('password') as string;
    

    if(user === ""){
      alert("El usuario no puede ser vacio");
      return;
    }

    if(pass.length < 6){
      alert("La contraseña tiene que tener mas de 6 caracteres");
      return;
    }

    console.log("CHECK");
  
    //redireccionar a otra pag
    
    navigate('/redirect');
  
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleClean = () =>{
    setFormValues({
      email: '',
      password: ''
    });
  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <div className='contenedor1'>
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
              required
              fullWidth
              value={formValues.email}
              onChange={handleInputChange}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              helperText={"Requerido"}
              error={true}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={formValues.password}
              onChange={handleInputChange}
              autoComplete="current-password"
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
            <Button
              type='button'
              onClick={handleClean}
            > 
              Borrar 
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
      </div>
    </ThemeProvider>
  );
}
