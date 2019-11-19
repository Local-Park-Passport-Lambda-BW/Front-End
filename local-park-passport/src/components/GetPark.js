import React, { useEffect, useState } from "react";
import axios from "axios";

const Parks = () => {
  const [parkList, setParkList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3300/parks")
      .then(res => {
        setParkList(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1 className="intro">Welcome to Parks Page.</h1>
      <div className="parksdiv">
        {parkList.map(park => (
          <div key={park.id}>
            <p>{park.name}</p>
            <p>{park.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Parks;
