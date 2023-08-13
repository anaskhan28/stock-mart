
<<<<<<< HEAD

=======
import React from 'react';
>>>>>>> ff7cc51c516c04ad38ad0a12db9e7a6cc97069e9
import OutlinedCard from './CommonComponents/OutlinedCard'
import Navbar from './NavBar/NavBar';


const Stock = () => {



  const cardData = [
    {
      // title: 'Card Title 1',
      content: 'This is the content of Card 1.',
    },
    {
      // title: 'Card Title 2',
      content: 'This is the content of Card 2.',
    },
    {
      // title: 'Card Title 2',
      content: 'This is the content of Card 2.',
    },
    {
      // title: 'Card Title 2',
      content: 'This is the content of Card 2.',
    },
    {
      // title: 'Card Title 2',
      content: 'This is the content of Card 2.',
    },
    {
      // title: 'Card Title 2',
      content: 'This is the content of Card 2.',
    },
    {
      // title: 'Card Title 2',
      content: 'This is the content of Card 2.',
    },
    {
      // title: 'Card Title 2',
      content: 'This is the content of Card 2.',
    },
    {
      // title: 'Card Title 2',
      content: 'This is the content of Card 2.',
     },
    // Add more card data as needed
  ];

  return (
    <>
<Navbar/>
    <div style={{ marginTop:"60px",display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {cardData.map((card, index) => (
        <OutlinedCard key={index} title={card.shortName} content={card.symbol} />
      ))}
      
    </div>
    </>
  );
};

export default Stock;

