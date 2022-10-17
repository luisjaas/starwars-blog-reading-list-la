import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = (props) => {
  const { store, actions } = useContext(Context);
  return (
    
    // carta pequena
    <div className="characters cards d-flex container m-3">
      <div className="card" style={{ width: "15rem" }}>
        <img src={props.character.image} className="card-img-top" />
        <div className="card-body text-white">
          <h5 className="card-title">{props.character.name}</h5>
          <p className="card-text">
            Gender: {props.character.gender}
            <br></br>
            Hair color: {props.character.hair_color}
            <br></br>
            Eye color: {props.character.eye_color}
          </p>
          
          {/* boton que abre la carta y modifica el url */}
          <div className="container buttonCards">
            <Link to={`/singleCharacters/${props.character.uid}`}
                  className="btn btn-outline-danger text-white">
                    Learn More!
            </Link>
          
            {/* boton favoritos */}
            <a  href="#"
                className="btn btn-outline-warning"
                onClick={(event) => actions.toggleFavorite(props.character)} >
              <i  className={
                    actions.isFavorite(props.character.name) == undefined
                      ? "far fa-heart" 
                      : "fas fa-heart"
                  } >
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
