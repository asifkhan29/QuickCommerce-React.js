import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

 import './ProductDetails.css'
 import { useNavigate } from 'react-router-dom';
  
	
	
	import { Link } from 'react-router-dom'; 


	
	


		

		export  const products = [

   { id: 2, name: 'Product 1', imageUrl: 'https://p.globalsources.com/IMAGES/PDT/B1200527063/Custom-T-shirt-100-Cotton-blank-T-shirt-O-Neck.jpg' },
      { id: 3, name: 'Product 2', imageUrl: 'https://p.globalsources.com/IMAGES/PDT/B1200527063/Custom-T-shirt-100-Cotton-blank-T-shirt-O-Neck.jpg' },
       { id: 4, name: 'Product 3', imageUrl: 'https://p.globalsources.com/IMAGES/PDT/B5857173533/T-shirt.jpghttps://p.globalsources.com/IMAGES/PDT/B5857173533/T-shirt.jpg' },
       { id: 5, name: 'Product 4', imageUrl: 'https://p.globalsources.com/IMAGES/PDT/B5857173533/T-shirt.jpghttps://p.globalsources.com/IMAGES/PDT/B5857173533/T-shirt.jpg' },
       { id: 6, name: 'Product 5', imageUrl: 'https://p.globalsources.com/IMAGES/PDT/B5857173533/T-shirt.jpghttps://p.globalsources.com/IMAGES/PDT/B5857173533/T-shirt.jpg' },
       { id: 7, name: 'Product 6', imageUrl: 'https://p.globalsources.com/IMAGES/PDT/B5857173533/T-shirt.jpghttps://p.globalsources.com/IMAGES/PDT/B5857173533/T-shirt.jpg' },
      
                    
    // Add more products as needed
  ];
 
// ProductDetailPage.js








	
	export const responsive = {
   0: { items: 1 },
    128: { items: 1 },
   
   
};

export const Carousel = () => {
  const navigate = useNavigate();

  const ProductDetails = (productId) => {
    // Navigate to the details page with the product ID as a parameter
    navigate(`/details/${productId}`);
  };

  const items = products.map((product) => (
    <div
      className="item"
      data-value={product.id}
      key={product.id}
      style={{}} // Adjust dimensions as needed
    >
    <Link to={`/details/${product.id}`} style={{ cursor: 'pointer' }}>
        {/* Use Link component instead of <a> */}
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ borderRadius: '30px', marginLeft: '530px' }}
        />
      </Link>
    { /*  <a 
       href='1'

        style={{ cursor: 'pointer' }}
       onClick={(event) => {
    event.preventDefault(); // Prevent default navigation behavior
    ProductDetails(product.name);
  } }
   >
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ borderRadius: '30px', marginLeft: '530px' }}
        />
      </a>  */}
    </div>
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  );
};

	
 export const amazonHomeStyles = {
    background: 'linear-gradient(to bottom right, #ff6b6b, #5565ff)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
  };

 export const appHeaderStyles = {
    padding: '30px',
    display: 'flex',
    left: '300px',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginLeft: '50px'
  };

 export const searchBarStyles = {
    padding: '10px',
    background: 'white',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    marginRight: '100px',
    width: '500px',
  };

  export const searchBarInputStyles = {
    flex: 1,
    padding: '8px',
    border: 'none',
    borderRadius: '5px',
  };

  export const searchBarButtonStyles = {
    padding: '8px 15px',
    border: 'none',
    borderRadius: '5px',
    background: '#ffa726',
    color: 'white',
    cursor: 'pointer',
  };



export   const productGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '20px',
    width: '900px',
    marginBottom: '40px',
  };

 export  const productCardStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
  };

  export const imageStyles = {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: '10px',
    marginTop:'20px',
  };
  
  






      