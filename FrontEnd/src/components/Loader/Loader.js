import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <Box sx={{ display: 'flex' }} className={styles.Loader}>
      <CircularProgress  />
    </Box>
  );
}

export default Loader