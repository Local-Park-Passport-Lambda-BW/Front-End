import React from 'react'
import { Input, Button } from 'reactstrap'
import styled from 'styled-components'

import { useLocalStorage } from './hooks/useLocalStorage'

const MainCon = styled.div`
  color: #fff;
  margin: 5em auto 0 auto;
  max-width: 700px;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1.5em;
  }
`;


const SearchCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .navSearch {
    width: 550px;
    height: 50px;
    font-size: 1.2em;
    margin-right: 0.8em;
  }

  button {
    width: 100px;
    height: 50px;
  }
`;

const Main = () => {

  const [homeSearch, setHomeSearch] = useLocalStorage("")

  const handleChange = evt => {
    setHomeSearch(evt.target.value);
  }

  return (
    <MainCon>
      <h1>Your best neighborhood parks are closer than you think.</h1>

      <SearchCon>
        <Input
          className="navSearch"
          type="search"
          name="search"
          placeholder="Find your favorite park"
          onChange={handleChange}
        />
        <Button color="primary">Search</Button>

      </SearchCon>

    </MainCon>
  )
}

export default Main
