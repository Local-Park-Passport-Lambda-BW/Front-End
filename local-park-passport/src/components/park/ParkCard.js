import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Rating from 'react-rating'
import axios from 'axios'
import getToken from "../GetToken";

import parkImage from '../../images/bridge.jpg'
import ViewParkModal from '../ViewParkModal'

// Styles
const CardCon = styled.div`
  display: flex;
  width: 400px;
  border: 1px solid #e2e2e2;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.6em;
  padding: 0.6em;
  margin: 1em;
  background: white;

  &:hover {
    transform: scale(1.04);
  }

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
    padding-right: 0.5em;

    .cardHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.6em;
      
      .card-title {
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        margin-bottom: 0;
      }

      .viewButton {
        color: #fff;
        background: #2B2121;
        border: 1px solid #2B2121;
        font-size: 0.7rem;
        font-weight: 500;
        width: auto;
      }
    }


    p {
      font-size: 0.8rem;
    }

    button {
      width: 100px;
    }
  }
`;

const ParkCard = props => {
  const { park, history } = props;
  const id = park.id;

  const [ comment, setComment ] = useState("");

  const handleComment = () => {
    axios.post(`https://park-pp.herokuapp.com/parks/1/demo/ratings`, )
      .then()
      .catch()
  }


  const handleClick = (rating, id) => {
    console.log(rating, id);

    axios
      .post(`https://park-pp.herokuapp.com/parks/${id}/ratings/demo`, {
        rating,
        comment: "",
        user_id: 1
      })
      .then(res => res.data)
      .catch(err => err.message);
  };

  // console.log(park);
  // const newId = parkList.id;
  useEffect(() => {}, [park.rating]);

  // useEffect(() => {
  // }, []);
  console.log(props);
  const deletePark = (event, id) => {
    console.log(event);
    event.preventDefault();
    getToken()
      .delete(`https://park-pp.herokuapp.com/parks/${id}`)
      .then(response => history.location.reload(true))
      .catch(error => console.log(error.message));
  };

  return (
    <CardCon className="cardCon">
      <img
        src={parkImage}
        alt="bridge-park"
        style={{ width: "120px", height: "120px" }}
      />

      <div className="card-right-con">
        <div className="cardHeader">
          <h5 className="card-title">{park.name}</h5>
          <ViewParkModal park={park} handleClick={handleClick}
            parkId={id} />
        </div>
        <p>{park.description}</p>

        <div className="ratingCon">
          <Rating
            id="card-stars"
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            fractions={2}
            onClick={() => alert("Please view park in order to rate")}
            initialRating={park.average_rating}
          />
          {park.average_rating}
        </div>
        <div>
          <button
            onClick={event => deletePark(event, park.id)}
            className="parks-button"
          >
            Delete park
          </button>{" "}
        </div>
      </div>
    </CardCon>
  );
};

export default ParkCard;
