import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacters = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(params);

  //podemos hacer find o map 
  let personaje = store.characteristics.find((characteristic) => {
    return characteristic.uid == params.id;
  });
  console.log(personaje);

  return (
    <>
      <div id="single" className="jumbotron container card mb-3 mt-5" key={personaje.uid}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
              className="img-fluid rounded-start mt-4"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-tittle display 4">{personaje.name}</h1>
              <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <table className="table text-white">
                <tr>
                  <td>
                    <strong>Height</strong>
                  </td>
                  <td>
                    <strong>Maas</strong>
                  </td>
                  <td>
                    <strong>Hair Color</strong>
                  </td>
                  <td>
                    <strong>Skin Color</strong>
                  </td>
                  <td>
                    <strong>Eye Color</strong>
                  </td>
                  <td>
                    <strong>Birth Year</strong>
                  </td>
                  <td>
                    <strong>Gender</strong>
                  </td>
                </tr>
                <tr>
                  <td>{personaje.height}</td>
                  <td>{personaje.mass}</td>
                  <td>{personaje.hair_color}</td>
                  <td>{personaje.skin_color}</td>
                  <td>{personaje.eye_color}</td>
                  <td>{personaje.birth_year}</td>
                  <td>{personaje.gender}</td>
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

// Single.propTypes = {
// 	match: PropTypes.object
// };
