import React from 'react';
import "./Character.css"

const Character = (props) => {

    return (
        <div className="character-card closed-card" id={props.id} onClick={() => props.event()}>
            <div className="opened-character">
                <img src={props.data.image} alt="character_portrait" />
                <p> {props.data.name} </p>
                <p className="char-data"> <span>Species:</span> {props.data.species} </p>
                <p className="char-data"> <span>Type:</span> {props.data.type === "" ? "Unknown" : props.data.type} </p>
                <p className="char-data"> <span>Gender:</span> {props.data.gender} </p>
                <p className="char-data"> <span>Origin:</span> {props.data.origin.name} </p>
                <p className="char-data"> <span>Status:</span> {props.data.status} </p>
            </div>
        </div>
    )
}

export default Character
