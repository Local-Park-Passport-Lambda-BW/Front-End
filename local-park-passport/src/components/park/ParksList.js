import React from "react";
import styled from 'styled-components'
import parkImage from '../../images/bridge.jpg'


const CardCon = styled.div`
  display: flex;
  width: 420px;
  border: 1px solid #E2E2E2;
  border-radius: 0.6em;
  padding: 0.6em;

    img {
      max-width: 100%;
      height: auto;
      align-self: center;
      border-radius: 0.2em;
    }

  .card-right-con {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-self: center;
    width: 400px;
    height: 150px;
    margin-left: 1em;

    .card-title {
      font-size: 1.1rem;
      font-weight: 700;
    }

    p {
      font-size: 0.8rem;
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
          <h5 className="card-title">Windshall Bridge Park</h5>
          <p>Made up of walkways, shrubs and happiness, be yourself and come visit.</p>
          <div>

            <button>Button</button>
          </div>
        </div>
      </CardCon>
    </div>
  )
}

export default ParksList
