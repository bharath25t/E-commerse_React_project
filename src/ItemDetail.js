import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { productId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost/netflix/netflix.php?id=${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch item');
        }
        const data = await response.json();
        if (data.length > 0) {
          setItem(data[0]);
        } else {
          throw new Error('Item not found');
        }
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
  }, [productId]);

  const addToCart = async () => {
    try {
      const response = await fetch('http://localhost/netflix/add_to_cart.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          product_id: item.product_id,
          user_id: 1 // Replace with the actual user ID
        })
      });

      const result = await response.json();
      if (result.success) {
        alert('Item added to cart successfully');
      } else {
        alert('Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={item.product_img} alt={item.product_name} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h1>{item.product_name}</h1>
          <p><strong>Description:</strong> {item.product_desp}</p>
          <p><strong>Price:</strong> {item.product_price}</p>
          <button onClick={addToCart} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
