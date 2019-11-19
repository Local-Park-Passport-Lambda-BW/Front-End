import React, { useState } from "react";

import { Route } from 'react-router-dom'

import DashboardNav from "./DashboardNav";
import ParkForm from "./park/ParkForm";
import ParksList from "./park/ParksList";
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function Dashboard() {
  
  const [parkList, setParkList] = useState([{
    id: "",
    name: "Windshall",
    description: "Some new text not meaning anything for all to see"
  }]);
  const [searchValue, setSearchValue] = useLocalStorage("");

  const handleChange = e => {
    setSearchValue(e.target.value);
  }
  
  const addNewPark = park => {
    const newPark = {
      ...park,
      id: Date.now()
    };
    
    setParkList([...parkList, newPark]);
  };
  
  const filteredParks = parkList.filter(char => char.name.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className="Parks">
      <DashboardNav handleChange={handleChange}/>
      <ParkForm addNewPark={addNewPark} />
      <ParksList parkList={filteredParks} setParkList={setParkList}/>
      <Route exact path="/dashboard/add-park" component={ParkForm} />

      {/* we are going to pass a function down as a prop */}
      {/* <Route exact path="/dashboard/add-a-park" render={ props => {
        return <ParkForm {...props} addNewPark={addNewPark} />
      }} /> */}
    </div>
  );
}
