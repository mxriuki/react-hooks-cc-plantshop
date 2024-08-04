import React, { useState } from "react";

function NewPlantForm({handleSubmit}) {
  const [newPlant, setNewPlant] = useState({});

  function handleChange (e) {
    const newValue = e.target.value;
    const inputName = e.target.name;
    const updatedPlant = {...newPlant };
    updatedPlant[inputName] = newValue;
    setNewPlant(updatedPlant);
  }
  function submitForm(e) {
    e.preventDefault();
    handleSubmit(newPlant);
    setNewPlant({});

  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitForm}>
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" valu={newPlant.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
