import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-dark bg-dark">
      
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG6.png"
            className="logo"
          ></img>
        </Link>
        <div  className="fav ml-auto nav-item dropdown btn-group">
          <button className="btn btn-danger dropdown-toggle"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
            <strong>  
              Favorites (
                {store.favorites.length > 0 ? store.favorites.length : 0})
            </strong>
          </button>
          
          {/* map boton favoritos al boton del nav */}
          <ul className="dropdown-menu"
              aria-labelledby="navbarScrollingDropdown">
                {store.favorites.map((fav) => {
                  return (
                    <li key={fav.name}>
                      <a href="#" className="dropdown-item">
                        {fav.name}{" "}
                        <button type="button"
                          class="btn btn-danger mx-1"
                          onClick={(event) => actions.toggleFavorite(fav)} >
                            <i class="fa-solid fa-delete-left"></i>
                        </button>
                      </a>
                    </li>
                  )
                })}
          </ul>
        </div>
      
        {/* <div className="btn-group">
          <button type="button" className="btn btn-danger">
            favorite {store.favorites.lenght}
          </button>
          <button
            type="button"
            className="btn btn-danger dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            {store.favorites.map((fav, index) => {
              return (
                <li key={fav.id}>
                  <a href="0" className="dropdown-item">
                    {fav.name}{" "}
                    <button
                      type="button"
                      className="btn btn-danger mx-2"
                      onClick={(event) => actions.toggleFavorite(fav)}
                    >
                      icon
                    </button>
                  </a>
                </li>
              );
            })}
          </ul>
        </div> */}
      
    </nav>
  );
};
