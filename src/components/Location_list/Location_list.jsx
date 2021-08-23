import React, { useState } from "react";
import { useLocations } from "../../api/useData";
import Pagination from "@material-ui/lab/Pagination";
import "./Location_list.css";
import Location from "../Location/Location";

const LocationList = () => {
  const [page, setPage] = useState(1);

  const locations = useLocations(page); 
  const locationsDataList = locations.results; 
  console.log(locations);

  let locationsResultElement; 

  const cardOpen = (event) => {
    const openCard = document.querySelectorAll(".location-card");
    let selectedCard = event.target.id;

    for (let i = 0; i < openCard.length; i++) {
      if (openCard[i].id === selectedCard) {
        openCard[i].classList.remove("closed-card");
        openCard[i].classList.add("opened-card");
      }
    }
  };

  const cardClose = () => {
    const openedCard = document.querySelector(".opened-card");
    openedCard.classList.remove("opened-card");
    openedCard.classList.add("closed-card");
  };

  if (locationsDataList !== undefined) {
    // csak akkor fusson le a .map iteráció ha a visszakapott objektum nem undefined (tehát ha már végigfutott a fetch)

    locationsResultElement = locationsDataList.map((location, index) => (
      <div key={index}>
        <Location id={location.id} data={location} event={cardClose} />
        <div className="locationElement" key={index} id={location.id} onClick={cardOpen} >
          <div>
            <p>{location.name}</p>
            <p> Type: {location.type} </p>
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
      <Pagination className="pagination" count={6} page={page} boundaryCount={2} onChange={pageChange} />
      <div id="locationContainer"> {locationsResultElement} </div>{" "}
      <Pagination className="pagination" count={6} page={page} boundaryCount={2} onChange={pageChange} />
    </>
  );
};

export default LocationList;
