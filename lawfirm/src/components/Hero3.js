

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import styles from "./Hero3.module.css";
import {
    Grid
  } from "@mui/material";
import Giftimage from "../assets/gift.png"


export default function Hero3() {
  return (
   

    <Box className={styles.header}>
      
            <p className={styles.firstchild}>Why Choose us?</p>
            <div className={styles.secondchild}>
            <Grid container spacing={2}>
            <Grid  item lg={4}>
            <Card   sx={{ maxWidth: 359 }} height="205" className={styles.card}>
        <CardActionArea >
          <img src={Giftimage} alt="logo" className={styles.image} />
          <CardContent className={styles.content}>
          <p className={styles.cardp1}>98% Success Rate</p>
          <p className={styles.cardp2}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
<Button variant="contained" className={styles.button}>Read More</Button>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      <Grid  item lg={4}>
      <Card   sx={{ maxWidth: 359 }} height="205" className={styles.card}>
        <CardActionArea >
        <img src={Giftimage} alt="logo" className={styles.image} />
          <CardContent className={styles.content}>
          <p className={styles.cardp1}>100% Success Rate</p>
          <p className={styles.cardp2}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
<Button variant="contained" className={styles.button}>Read More</Button>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      <Grid  item lg={4}>
      <Card   sx={{ maxWidth: 359 }} height="205" className={styles.card}>
        <CardActionArea >
        <img src={Giftimage} alt="logo" className={styles.image} />
          <CardContent className={styles.content}>
          <p className={styles.cardp1}>98% Success Rate</p>
          <p className={styles.cardp2}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
<Button variant="contained" className={styles.button}>Read More</Button>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      </Grid>
            </div>
       
    
  </Box>
  );
}