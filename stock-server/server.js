const express = require('express');
const yahooFinance = require('yahoo-finance2').default;

const app = express();
const port = 3000;

app.get('/stock-data/:name', async (req, res) => {
  const stockName = req.params

  try {
    const stockData = await yahooFinance.quote([stockName.name]
       
        );
    res.json(stockData);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred while fetching stock data.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
