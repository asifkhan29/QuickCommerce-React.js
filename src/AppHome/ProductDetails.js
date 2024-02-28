import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './PageFormat';
import { amazonHomeStyles } from './PageFormat';

const ProductDetailPage = () => {
  const { productId } = useParams(); // Get the product ID from URL params

  const product = products.find((p) => p.id === parseInt(productId, 10)); // Find the product by ID

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={amazonHomeStyles}>
      <h2>{product.name}</h2>
      <h2>{product.id}</h2>
      <img src={product.imageUrl} alt={product.name} style={{borderRadius: '40px'}} />
       <h2>Buy</h2>
      <button >Buy</button>
        
      {/* Display other details as needed */}
    </div>
  );
};

export default ProductDetailPage;





      