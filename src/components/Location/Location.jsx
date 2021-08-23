import React, {useState, useEffect} from 'react';
import "./Location.css"

const Location = (props) => {

	const residentList = [props.data.residents.map((resident, index) => {
		fetch(resident)
		.then((response) => {
			return response.json();
		})
		.then((json) => json.name);
	})]  // CORS HIBA MIATT NEM SIKERÜLT


    return (
        <div className="location-card closed-card" id={props.id} onClick={() => props.event()}>
            <div className="opened-location">
                <p> {props.data.name} </p>
                <p className="location-data"> <span>Type:</span> {props.data.type === "" ? "Unknown" : props.data.type} </p>
                <p className="location-data"> <span>Dimension:</span> {props.data.dimension} </p>
                <p className="location-data"> <span>Number of Residents:</span> {props.data.residents.length}	</p>
            </div>
        </div>
    )
}

export default Location