
import './App.css'
import Stock from './Stock'
import axios from '../baseurl';
import { useState, useEffect } from 'react';
function App() {
  const stock = 'TCS.NS'
  const [stockPrice, setStockPrice] = useState();

  useEffect(( () =>{
    axios.get(`stock-data/${stock}`).then(response =>{
      const stockInfo = response.data;
     console.log(stockInfo)

     

      setStockPrice(stockInfo)
    })
  }), [])
  return (
    <>
      <Stock stockPrice={stockPrice}/>
    </>
  )
}

export default App
