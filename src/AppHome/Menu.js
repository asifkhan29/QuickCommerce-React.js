import React from 'react';


import HomePanel from '../AppHome/MenuButtons';
 import './ProductDetails.css'
 import { Carousel,products,productCardStyles,productGridStyles,amazonHomeStyles,appHeaderStyles,searchBarButtonStyles,searchBarInputStyles,searchBarStyles,imageStyles } from './PageFormat';



const Homes = () => {
	
	
	
	
  
  


 
  
  

  return (
	  
	  
    <div style={amazonHomeStyles}>
    
    
    <div>
    
    { /* {selectedProduct && <ProductDetailPage product={selectedProduct} />} */}
	  </div>
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
      
      
      
    </div>
    
          
  );
};

export default Homes;



      