import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const plantAPI =  'http://localhost:6001/plants';

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => fetch(plantAPI)
    .then(res => res.json())
    .then(setPlants), []
);

function addNewPlant(newPlant) {
  fetch(plantAPI, {
    method: 'POST',
    headers: {
      Accepts: 'application/json',
      'Content-type': 'applictaion/json',
    },
    body: JSON.stringify(newPlant)
  })
  .then(res => res.json())
  .then(plant => setPlants([...plants, plant]));
}
  return (
    <main>
      <NewPlantForm handleSubmit={addNewPlant}/>
      <Search handleSearch={setSearchTerm}/>
      <PlantList plants={plants.filter(plant => plant.name.includes(searchTerm))}/>
    </main>
  );
}

export default PlantPage;
