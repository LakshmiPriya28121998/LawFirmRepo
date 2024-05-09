

import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import Button from './Button';
import IconButton from '@mui/material/IconButton';
import Logo from './Logo';
import styles from "./Hero.module.css"
import buttonstyles from "./Button.module.css";
import Heroimage from "../assets/heroimage.png"
import EmailIcon from '@mui/icons-material/Email';
import {
    InputAdornment, 
    TextField,
  } from "@mui/material";


export default function Hero() {
  return (
   

    <Box className={styles.header}>
      
         <div>
            <p className={styles.firstp}>You dont have to Fight them Alone.</p>
            <p className={styles.secondp}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
            {/* <div className={styles.rectangle}><div className={styles.smallrect}></div></div> */}
            <TextField
        className={styles.rectangle}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <EmailIcon color="primary" />
              </InputAdornment>
            ),
          }}
          placeholder="Enter your email address"
          name="search"
        />
         </div>
         <div className={styles.shape}>
         <img src={Heroimage} alt="logo" className={styles.image} />
         </div>
          
   
          
    
  </Box>
  );
}