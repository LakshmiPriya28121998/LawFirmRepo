

import * as React from 'react';
import Box from '@mui/material/Box';
import styles from "./Hero4.module.css";
import {
    Grid
  } from "@mui/material";
import Image1 from "../assets/image1.png"
import Image2 from "../assets/image2.png"
import Image3 from "../assets/image3.png"
import Image4 from "../assets/image4.png"
import Image5 from "../assets/image5.png"
import Image6 from "../assets/image6.png"

export default function Hero4() {
  return (
   

    <Box className={styles.header}>
      
            <p className={styles.firstchild}>Area of Practices</p>
            <img src={Image1} alt="logo" className={styles.image1} />
            <img src={Image2} alt="logo" className={styles.image2} />
            <img src={Image3} alt="logo" className={styles.image3} />
            <img src={Image4} alt="logo" className={styles.image4} />
            <img src={Image5} alt="logo" className={styles.image5} />
            <img src={Image6} alt="logo" className={styles.image6} />
  </Box>
  );
}