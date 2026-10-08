import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const plantsArray = [
    {
      category: "Aromatic Plants",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1595841696677-6489ffa3e56c?w=400", description: "Calming scent", cost: 15 },
        { name: "Mint", image: "https://images.unsplash.com/photo-1628003195200-2c7001402283?w=400", description: "Refreshing aroma", cost: 12 }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1596547609652-9fc5d8d4249a?w=400", description: "Healing properties", cost: 14 },
        { name: "Tulsi", image: "https://images.unsplash.com/photo-1608210344498-75c6d31bb947?w=400", description: "Immunity booster", cost: 10 }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list-container">
      {plantsArray.map((category, index) => (
        <div key={index} className="category-section">
          <h2>{category.category}</h2>
          <div className="plant-grid">
            {category.plants.map((plant, idx) => {
              const isInCart = cartItems.some(item => item.name === plant.name);
              
              return (
                <div key={idx} className="plant-card">
                  <img src={plant.image} alt={plant.name} className="plant-image" />
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <p className="plant-cost">${plant.cost}</p>
                  <button 
                    onClick={() => handleAddToCart(plant)} 
                    disabled={isInCart}
                    className={isInCart ? "added-btn" : "add-btn"}
                  >
                    {isInCart ? "Added" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;