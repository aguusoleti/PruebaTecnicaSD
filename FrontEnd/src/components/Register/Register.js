import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styles from './register.module.css'
import { register, login } from '../../pages/api/hello.js';

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

const Register = ({ handleClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    register(name, email, password)
      .then(() => {
        return login(email, password);
      })
      .then(result => {
        localStorage.setItem('token', result.token);
        window.location.reload();
        handleClose();
      })
      .catch(error => {
        setError('Credenciales incorrectas');

        console.error(error);
      });
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.contenedor}>
        <img src='./logo.jpeg' ></img>
          <h1>¡Creá tu cuenta!</h1>
          <div className={styles.espacios}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              value={name}
              onChange={handleNameChange}
              sx={{ width: '300px' }} 

            />
          </Typography>
          </div>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              label="Email"
              value={email}
              onChange={handleEmailChange}
              sx={{ width: '300px' }} 

            />
          </Typography>

          <div className={styles.espacios}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              label="Password"
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
          <Button variant="contained" onClick={handleRegister}>
            Registrarse
          </Button>
          <Button  onClick={handleClose}>
            Volver
          </Button>
        </Box>
      </Modal>
    </div>
  );
  
};

export default Register;
``
