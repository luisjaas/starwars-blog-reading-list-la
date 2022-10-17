import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);
  return (

    // carta pequena
    <div className="planets cards d-flex container m-3">
      <div className="card" style={{ width: "15rem" }}>
        <img src={props.planets.image} className="card-img-top" />
        <div className="card-body text-white">
          <h5 className="card-title">{props.planets.name}</h5>
          <p className="card-text">
            population: {props.planets.population}
            <br></br>
            terrain: {props.planets.terrain}
          </p>

          {/* boton que abre la carta y modifica el url */}
          <div className="container buttonCards">
            <Link to={`/singlePlanets/${props.planets.uid}`}
                  className="btn btn-outline-danger text-white">
                    Learn More!
            </Link>
          
           {/* boton favoritos */}          
            <a  href="#"
                className="btn btn-outline-warning"
                onClick={(event) => actions.toggleFavorite(props.planets)} >
              <i  className={
                    actions.isFavorite(props.planets.name) == undefined
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
