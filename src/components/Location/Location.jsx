import React, { useState, useEffect } from 'react';
import "./Location.css"

const Location = (props) => {

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