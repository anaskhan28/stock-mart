
import OutlinedCard from './CommonComponents/OutlinedCard'
import Navbar from './NavBar/NavBar';
import axios from '../baseurl';
import { useState, useEffect } from 'react';
import green from './assets/images/green-arrow.png'
import red from './assets/images/red-arrow.png'


const Stock = () => {

  const [stockPrice, setStockPrice] = useState();


  useEffect(( () =>{
    const stock = ['TCS.NS', 'RELIANCE.NS', 'HDFCBANK.NS', 'SBIN.NS', 
    'ADANIPORTS.NS', 'TITAN.NS', 'BAJAJ-AUTO.NS', 'ITC.NS', 'ONGC.NS', 'KOTAKBANK.NS']
    axios.get(`stock-data/${stock}`).then(response =>{
      const stockInfo = response.data;
     console.log(stockInfo)

     

      setStockPrice(stockInfo)
    })
  }), [])

  function formatToCrore(amount) {
    const crore = 1000000000000;
    const croreFormatted = (amount / crore).toFixed(2) + "Lcr";
    return croreFormatted;
  }

 
  



  return (
    <>
<Navbar/>
    <div style={{ marginTop:"60px",display: 'flex', justifyContent: 'space-between', alignContent: 'center', rowGap: 20, flexWrap: 'wrap' }}>
      {stockPrice && stockPrice.map((card, index) => (
        <OutlinedCard 
        key={index} 
        title={card.longName} 
        subtitle={card.symbol}
         price={card.regularMarketPrice}
         currency={card.financialCurrency}
         open={card.regularMarketOpen}
         high={card.regularMarketDayHigh}
         low={card.regularMarketDayLow}
         cap={formatToCrore(card.marketCap)}
         ratio={card.forwardPE}
         yeild={card.dividendYield}
         confidence={card.customPriceAlertConfidence}
         weekHigh={card.fiftyTwoWeekHigh}
         weekLow={card.fiftyTwoWeekLow}
        marketChange={card.regularMarketChange.toFixed(2)}
        marketChangePercent={card.regularMarketChangePercent.toFixed(2)}
        arrow={card.regularMarketChangePercent>=0 ? green  : red }
        color={card.regularMarketChangePercent>=0 ? 'green' : 'red'}
          />
      ))}
      
    </div>
    </>
  );
};

export default Stock;

