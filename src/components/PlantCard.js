import React, {useState} from "react";

function PlantCard({plant}) {
  const {image, name, price} = plant;
  const [inStock, setInStock]= useState(true);

  return (
    <li className="card" >
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={() => setInStock(false)}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
