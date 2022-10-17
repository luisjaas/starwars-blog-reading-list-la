import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanets = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(params);

  //Podemos hacer map o find 
  let planeta = store.planetscharacteristics.find((characteristic) => {
    return characteristic.uid == params.id;
  });

  return (
    <>
      <div id="single" className="jumbotron container card mb-3 mt-5" key={planeta._id}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`}
              className="img-fluid rounded-start mt-4"
            />
          </div>
          <div className="col-md-8">
            <div className="card-boy">
              <h1 className="card-tittle display-4">{planeta.name}</h1>
              <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <table className="table text-white">
                <tr>
                  <td>
                    <strong>Diameter</strong>
                  </td>
                  <td>
                    <strong>Rotation Period</strong>
                  </td>
                  <td>
                    <strong>Orbital Period</strong>
                  </td>
                  <td>
                    <strong>Gravity</strong>
                  </td>
                  <td>
                    <strong>Population</strong>
                  </td>
                  <td>
                    <strong>Climate</strong>
                  </td>
                  <td>
                    <strong>Terrain</strong>
                  </td>
                </tr>
                <tr>
                  <td>{planeta.diameter}</td>
                  <td>{planeta.rotation_period}</td>
                  <td>{planeta.orbital_period}</td>
                  <td>{planeta.gravity}</td>
                  <td>{planeta.population}</td>
                  <td>{planeta.climate}</td>
                  <td>{planeta.terrain}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        
         {/* boton que te devuelve a home */}
        <Link to="/">
          <span className="btn btn-danger btn-lg mb-4" href="#" role="button">
            Back Home
          </span>
        </Link>
      </div>
    </>
  );
};
