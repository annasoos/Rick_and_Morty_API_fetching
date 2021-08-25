import React, { useState, useEffect } from "react";
import { useCharacters } from "../../api/useData";
import "./Character_list.css";
import Pagination from "@material-ui/lab/Pagination";
import Character from "../Character/Character";

const CharacterList = () => {
  const [page, setPage] = useState(1);

  const characters = useCharacters(page); 
  const dataList = characters.results; 
  console.log(characters);

  let resultElement;

  const cardOpen = (event) => {

    const openCard = document.querySelectorAll(".character-card");
    let selectedCard = event.target.id;

    for (let i = 0; i < openCard.length; i++) {
      if(openCard[i].id === selectedCard){
      openCard[i].classList.remove("closed-card");
      openCard[i].classList.add("opened-card");
      };
    };
  };


  const cardClose = () => {
    const openedCard = document.querySelector(".opened-card");
    openedCard.classList.remove("opened-card");
    openedCard.classList.add("closed-card");
  }; 



  if (dataList !== undefined) { // should rewrite using async await method

    resultElement = dataList.map((character, index) => (
      <div key={index}>
        <Character id={character.id} data={character} event={cardClose} />
        <div className="characterElement" key={index} id={character.id} onClick={cardOpen} >
          <img src={character.image} alt="character_portrait" />
          <div className="charachterP">
            <p>{character.name}</p>
            <p> Species: {character.species} </p>
          </div>
        </div>
      </div>
    )); 
  }

  const pageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Pagination className="pagination" count={34} page={page} boundaryCount={2} onChange={pageChange} />
      <div id="characterContainer"> {resultElement} </div> 
      <Pagination className="pagination" count={34} page={page} boundaryCount={2} onChange={pageChange} />
    </>
  );
};

export default CharacterList;
