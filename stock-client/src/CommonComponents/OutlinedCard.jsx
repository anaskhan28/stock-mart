
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import '../Card.css';
const OutlinedCard = ({ title, subtitle, price,currency, open,high, low, cap, ratio, yeild, cdp, weekHigh, weekLow, confidence, marketChange, marketChangePercent, arrow, color}) => {
  

  return (
    <div style={{width: "30%"}}>
      <Grid container spacing={2}>
      <Grid item md={3} sm={4} xs={12}>
    <Card style={{ minWidth: 380, height: '100%', marginBottom: '20px',backgroundColor:"#202124" }} variant="outlined">
      <CardContent>
        <div className='card-top'>
          <div className="card-name">
        <Typography sx={{textAlign: 'initial', fontSize: 14,color:"white" }} >
        {title}
        
        </Typography>
        
        <Typography sx={{textAlign: 'initial',fontSize: 10, mb: 1, mt: 0.5, color:"#B2B2B2" }} >
        {subtitle}
        </Typography>
        </div>
        <Typography sx={{color: '#ffff', fontWeight: 600}}>
          {price}
          <span style={{padding: '3px', color: '#6E6E6E', fontWeight: 'normal', fontSize: '12px'}}>{currency}</span>
          <div style={{color: color}} className="changePrice">
            {`${marketChange} (${marketChangePercent}%)`}
            <img className='arrow'  src={arrow} alt="" /> toady
          </div>
        </Typography>
        </div>
        <Typography variant="body2" sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
         marginTop: '1rem', fontSize: '12px', color: '#ffff', lineHeight: 2}}>
          <div className="finance" style={{display: 'flex', flexDirection: 'row'}}>
          Open <span>{open}</span>
          </div>
          <div className="finance" style={{display: 'flex', flexDirection: 'row'}}>
          High <span>{high}</span>
          </div>
          <div className="finance" style={{display: 'flex', flexDirection: 'row'}}>
          Low <span>{low}</span>
          </div>
          <div className="finance" style={{display: 'flex', flexDirection: 'row'}}>
          Mkt cap <span>{cap}</span>
          </div>
          <div className="finance" style={{display: 'flex', flexDirection: 'row'}}>
          P/E ratio <span>{ratio}</span>
          </div>
          <div className="finance" style={{display: 'flex', flexDirection: 'row'}}>
          Div Yeild <span>{yeild}</span>
          </div>
          <div className="finance" style={{display: 'flex', flexDirection: 'row'}}>
          Confidence <span>{confidence}</span>
          </div>
          <div className="finance" style={{display: 'flex', flexDirection: 'row'}}>
          52-wk-high <span>{weekHigh}</span>
          </div>
          <div className="finance" style={{display: 'flex', flexDirection: 'row'}}>
          52-wk-low <span>{weekLow}</span>
          </div>
          
         
        </Typography>
      </CardContent>
      
      
     
    </Card>
    </Grid>
    </Grid>
    </div>
  );
};

export default OutlinedCard;
