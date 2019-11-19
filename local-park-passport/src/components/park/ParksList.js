import React from "react";
import styled from 'styled-components'
import parkImage from '../../images/bridge.jpg'


const CardCon = styled.div`
  display: flex;
  max-width: 420px;
  border: 1px solid slateblue;

    img {
      max-width: 100%;
      height: auto;
    }

  .card-right-con {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 1em;
    width

    .title-card {
      font-size: 2rem;
      font-weight: 700;
    }

    button {
      width: 100px;
    }
  }

`;

const ParksList = ({ parks }) => {
  return (
    <div>
      {parks.map(park => (
        <div className="park" key={park.id}>
          <h2>{park.title}</h2>
          <p>{park.body}</p>
        </div>
      ))}

      <CardCon className="cardCon">
          <img src={parkImage} alt="bridge-park" style={{width: "150px", height: "150px"}}/>

        <div className="card-right-con">
          <h5 className="title-card">Windshall Bridge Park</h5>
          <p>Made up of walkways, shrubs and happiness, be yourself and come visit. Your kids will thank you for this.
          Made up of walkways, shrubs and happiness, be yourself and come visit. Your kids will thank you for this.</p>
          <div>

            <button>Button</button>
          </div>
        </div>
      </CardCon>
    </div>
  )
}

export default ParksList
