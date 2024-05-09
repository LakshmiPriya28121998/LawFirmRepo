

import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import Button from './Button';
import IconButton from '@mui/material/IconButton';
import Logo from './Logo';
import styles from "./Navbar.module.css"
import buttonstyles from "./Button.module.css"

export default function Navbar() {
  return (
   

    <Box className={styles.header}>
      <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>
          {/* <Navbarmiddle /> */}
          <div className={styles.middle}>
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
    
  </div>
          <Button className={buttonstyles.button}>Contact Now</Button>
    
  </Box>
  );
}