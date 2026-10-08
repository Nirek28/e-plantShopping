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
        { name: "Lavender", image: "https://cdn.pixabay.com/photo/2017/08/07/22/35/lavender-2608472_1280.jpg", description: "Calming scent", cost: 15 },
        { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/02/02/03/peppermint-1117565_1280.jpg", description: "Refreshing aroma", cost: 12 }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2019/08/13/10/05/aloe-vera-4403061_1280.jpg", description: "Healing properties", cost: 14 },
        { name: "Tulsi", image: "https://cdn.pixabay.com/photo/2021/04/04/16/06/tulsi-6147986_1280.jpg", description: "Immunity booster", cost: 10 }
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