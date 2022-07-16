import React from 'react'
import ReactDOM from 'react-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
export const Login = () => {
  return (
    <>
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        marginTop:'100px',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Inicio de Sesión
              </Typography>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    required
                    id="outlined-required"
                    label="Correo Electrónico"
                    defaultValue=""
                  />
                  
                  <TextField
                    id="outlined-password-input"
                    label="Contraseña"
                    type="password"
                    autoComplete="current-password"
                  />
                
                </div>
                
              </Box>
            </Grid>
            <Grid item>
              <Button variant="contained">Iniciar Sesión</Button>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </Paper>
    
    </>
  )
}
if (document.getElementById('root')) {
    ReactDOM.render(<Login />, document.getElementById('root'));
}