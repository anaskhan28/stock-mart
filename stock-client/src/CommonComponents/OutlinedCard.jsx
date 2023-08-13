
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const OutlinedCard = ({ title, content }) => {
  return (
    <div style={{width: "30%"}}>
      <Grid container spacing={1}>
      <Grid item md={3} sm={4} xs={12}>
    <Card style={{ minWidth: 300, marginBottom: '20px',backgroundColor:"#444" }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14,color:"white" }} >
        Reliance Industries Limited
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1, color:"#B2B2B2" }} >
          Reliance Ind
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
      </CardContent>
      
      <Button  sx={{ outline: '1px solid green',color:"green" ,mb:"2rem",border:0,'&.MuiButton-root:hover':{bgcolor: 'transparent'}}}>Learn More</Button>
     
    </Card>
    </Grid>
    </Grid>
    </div>
  );
};

export default OutlinedCard;
