import React, { useState } from 'react';

const productsData = [
  { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 10 },
  { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 15 },
  { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 20 },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartQuantity(cartQuantity + 1);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    setCartQuantity(cartQuantity - 1);
  };

  return (
    <div>
      <h2>Available Products</h2>
      <ul>
        {productsData.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>
            <p>{product.description}</p>
            <p>${product.price}</p>
            {cart.find((item) => item.id === product.id) ? (
              <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
            ) : (
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            )}
          </li>
        ))}
      </ul>

      <div>
        <h2>Shopping Cart</h2>
        <p>Quantity in Cart: {cartQuantity}</p>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCart;
