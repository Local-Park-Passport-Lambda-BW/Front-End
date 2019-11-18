import React, { useState } from "react";
import { Route } from 'react-router-dom'

import DashboardNav from './DashboardNav'
import ParkForm from "./park/ParkForm";
import ParksList from "./park/ParksList";

export default function Dashboard() {
  const [parks, setParks] = useState([
    {
      id: 1,
      title: "Coldham's Common",
      body:
        "A large open shared use space with wild meadow, sports pitches and woodland.  Fully off lead"
    }
  ]);

  const addNewPark = park => {
    const newPark = {
      ...park,
      id: Date.now()
    };

    setParks([...parks, newPark]);
  };

  return (
    <div className="Parks">
      <DashboardNav />
      <ParksList parks={parks} />
      {/* <ParkForm addNewPark={addNewPark} /> */}
      {/* <Route path="/dashboard/add-park" render={props => <ParkForm {...props} addNewPark={addNewPark} />} /> */}


      
      {/* we are going to pass a function down as a prop */}
      {/* <Route exact path="/dashboard/add-a-park" render={ props => {
        return <ParkForm {...props} addNewPark={addNewPark} />
      }} /> */}
      
    </div>
  );
}
