import React from 'react'
import styled from 'styled-components'
import parkImage from '../../images/bridge.jpg'

// Styles
const CardCon = styled.div`
  display: flex;
  width: 400px;
  border: 1px solid #E2E2E2;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.6em;
  padding: 0.6em;
  margin: 1em;

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
    height: auto;
    margin-left: 1em;

    .card-title {
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0.05em;
    }

    p {
      font-size: 0.8rem;
    }

    button {
      width: 100px;
    }
  }

`;

const ParkCard = ({park}) => {
  return (
    <CardCon className="cardCon">
      <img src={parkImage} alt="bridge-park" style={{ width: "120px", height: "120px" }} />

      <div className="card-right-con">
        <h5 className="card-title">{park.title}</h5>
        <p>{park.body}</p>

        <div>
          <i className="fa fa-spinner fa-spin"></i>
        </div>
      </div>
    </CardCon>
  )
}

export default ParkCard
