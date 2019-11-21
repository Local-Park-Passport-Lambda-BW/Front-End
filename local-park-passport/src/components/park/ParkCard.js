import React, { useEffect } from 'react'
import styled from 'styled-components'
import parkImage from '../../images/bridge.jpg'
import Rating from 'react-rating'
import axios from 'axios'

// Styles
const CardCon = styled.div`
  display: flex;
  width: 400px;
  border: 1px solid #E2E2E2;
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

    .ratingCon {
      
    }
  }

`;

const ParkCard = ({ park }) => {

  const id = park.id;

  const handleClick = (rating, id) => {
    console.log(rating, id)

    axios.post(`http://localhost:3300/parks/${id}/ratings/demo`, {
      rating, comment: "", user_id: 1
    })
      .then(res => res.data)
      .catch(err => err.message)
  }

  useEffect(() => {

  }, [park.rating])


  // ROUNDING IT UP THE AVERAGE RATING TO DISPLAY ON THE CARD
  // RETURNS NAN
  // const roundedAverageRating = Math.round(park.average_rating * 10) / 10;
  // console.log(roundedAverageRating);



  return (
    <CardCon className="cardCon">
      <img src={parkImage} alt="bridge-park" style={{ width: "120px", height: "120px" }} />

      <div className="card-right-con">
        <h5 className="card-title">{park.name}</h5>
        <p>{park.description}</p>

        <div className="ratingCon">
          <Rating
            id="card-stars"
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            fractions={2}
            onClick={rating => handleClick(rating, id)}
            initialRating={park.average_rating}
          />
          {park.average_rating}
        </div>
      </div>
    </CardCon>
  )
}

export default ParkCard
