import React, { useState } from "react";

// import { Route } from 'react-router-dom'

import DashboardNav from "./DashboardNav";
import ParkForm from "./park/ParkForm";
import ParksList from "./park/ParksList";

export default function Dashboard() {
  
  const [parkList, setParkList] = useState([{
    id: "1",
    title: "Windshall",
    body: "Some new text not meaning anything for all to see"
  }]);

  

  const addNewPark = park => {
    const newPark = {
      ...park,
      id: Date.now()
    };

    setParkList([...parkList, newPark]);
  };

  return (
    <div className="Parks">
      <DashboardNav />
      <ParkForm addNewPark={addNewPark} />
      <ParksList parkList={parkList} setParkList={setParkList}/>
      {/* <Route path="/dashboard/add-park" render={props => <ParkForm {...props} addNewPark={addNewPark} />} /> */}

      {/* we are going to pass a function down as a prop */}
      {/* <Route exact path="/dashboard/add-a-park" render={ props => {
        return <ParkForm {...props} addNewPark={addNewPark} />
      }} /> */}
    </div>
  );
}
