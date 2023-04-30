import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styles from './login.module.css'
import { login } from '../../pages/api/hello.js';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '20px',
};

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(null);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(null);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const handleLogin = () => {
    login(email, password)
      .then(result => {
        localStorage.setItem('token', result.token);
        window.location.reload();
        handleClose();
      })
      .catch(error => {
        console.error(error);
        setError('Credenciales incorrectas');
      });
  };
  
  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
      >
        <Box sx={style} className={styles.contenedor}>
          <img src='./logo.jpeg' ></img>
          <h1>Iniciar sesión</h1>
          <div className={styles.espacios}>

            <Typography  >
              <TextField
                label="Correo electrónico"
                value={email}
                onChange={handleEmailChange}
                sx={{ width: '300px' }} />
            </Typography>

          </div>

          <div className={styles.espacios}>

            <Typography >
              <TextField
                label="Contraseña"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleTogglePasswordVisibility}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
                sx={{ width: '300px' }} 
              />
            </Typography>

          </div>

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          <Button variant="contained" onClick={handleLogin}>
            Iniciar sesión
          </Button>
          <Button onClick={handleClose}>
            Volver
          </Button>
        </Box>
      </Modal>
    </div>
  );

};

export default Login;
