

import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import Button from './Button';
import IconButton from '@mui/material/IconButton';
import Logo from './Logo';
import styles from "./Hero2.module.css"
import buttonstyles from "./Button.module.css";
import Heroimage from "../assets/heroimage.png"
import EmailIcon from '@mui/icons-material/Email';
import {
    InputAdornment, 
    TextField,
    colors,
  } from "@mui/material";
  import Divider from '@mui/material/Divider';


export default function Hero2() {
  return (
   

    <Box className={styles.header}>
      
            <p className={styles.firstchild}>Let's Introduce Ourself.</p>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" className={styles.divider}/>
            <div >
                <p className={styles.secondchild1}>Criminal Lawyer</p>
                <p className={styles.secondchild2}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exercitation.</p>
            </div>
          
       
    
  </Box>
  );
}