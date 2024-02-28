import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomePanel from '../MenuButtons';

const Homes = () => {
	
	  const products = [

   { id: 2, name: 'Product 2', imageUrl: 'https://p.globalsources.com/IMAGES/PDT/B1200527063/Custom-T-shirt-100-Cotton-blank-T-shirt-O-Neck.jpg' },
      { id: 3, name: 'Product 1', imageUrl: 'https://p.globalsources.com/IMAGES/PDT/B1200527063/Custom-T-shirt-100-Cotton-blank-T-shirt-O-Neck.jpg' },
       { id: 3, name: 'Product 1', imageUrl: 'https://p.globalsources.com/IMAGES/PDT/B5857173533/T-shirt.jpghttps://p.globalsources.com/IMAGES/PDT/B5857173533/T-shirt.jpg' },
       { id: 3, name: 'Product 1', imageUrl: 'https://p.globalsources.com/IMAGES/PDT/B5857173533/T-shirt.jpghttps://p.globalsources.com/IMAGES/PDT/B5857173533/T-shirt.jpg' },
       { id: 3, name: 'Product 1', imageUrl: 'https://p.globalsources.com/IMAGES/PDT/B5857173533/T-shirt.jpghttps://p.globalsources.com/IMAGES/PDT/B5857173533/T-shirt.jpg' },
       { id: 3, name: 'Product 1', imageUrl: 'https://p.globalsources.com/IMAGES/PDT/B5857173533/T-shirt.jpghttps://p.globalsources.com/IMAGES/PDT/B5857173533/T-shirt.jpg' },
      
                    
    // Add more products as needed
  ];
	
	const responsive = {
   0: { items: 1 },
    128: { items: 1 },
   
   
};
const items = products.map((product,index )=> (
  <div
    className="item"
    data-value={product.id}
    key={product.id}
    style={{}} // Adjust dimensions as needed
  >
    <button
    style={{borderRadius: '30px',marginLeft: '530px'}}
    />
    <img
      src={product.imageUrl}
      alt={product.name}
      style={{borderRadius: '30px',marginLeft: '530px',   }}
    />
  </div>
));



const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);
	
  const amazonHomeStyles = {
    background: 'linear-gradient(to bottom right, #ff6b6b, #5565ff)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const appHeaderStyles = {
    padding: '30px',
    display: 'flex',
    left: '300px',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginLeft: '50px'
  };

  const searchBarStyles = {
    padding: '10px',
    background: 'white',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    marginRight: '100px',
    width: '500px',
  };

  const searchBarInputStyles = {
    flex: 1,
    padding: '8px',
    border: 'none',
    borderRadius: '5px',
  };

  const searchBarButtonStyles = {
    padding: '8px 15px',
    border: 'none',
    borderRadius: '5px',
    background: '#ffa726',
    color: 'white',
    cursor: 'pointer',
  };



  const productGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '20px',
    width: '900px',
    marginBottom: '40px',
  };

  const productCardStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
  };

  const imageStyles = {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: '10px',
    marginTop:'20px',
  };

  return (
    <div style={amazonHomeStyles}>
    
    <div>
    
    <HomePanel/>
    </div>
      <header style={appHeaderStyles}>
        <h1>Welcome</h1>
        <div style={searchBarStyles}>
          <input
            type="text"
            placeholder="Search for products..."
            style={searchBarInputStyles}
          />
          <button style={searchBarButtonStyles}>Search</button>
        </div>
      </header>
      <div>
      </div>
      
    
      
  
    <div style={productGridStyles}>
        {products.map(product => (
          <div key={product.id} style={productCardStyles}>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={imageStyles}
            />
            <p>{product.name}</p>
          </div>
        ))}
      </div> 
      
      <Carousel/>
      
      <div style={productGridStyles}>
        {products.map(product => (
          <div key={product.id} style={productCardStyles}>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={imageStyles}
            />
            <p>{product.name}</p>
          </div>
        ))}
      </div> 
      
        <Carousel/>
      
      
    </div>
    
          
  );
};

export default Homes;



      