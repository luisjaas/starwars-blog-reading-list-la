import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { SingleCharacters } from "./pages/singleCharacters";
import { SinglePlanets } from "./pages/singlePlanets";
import { SingleVehicles } from "./pages/singleVehicles";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            
            {/* enrutamiento asignamos la url con extencion a cada componente del sitio */}
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<SingleCharacters />} path="/singleCharacters/:id" />
            <Route element={<SinglePlanets />} path="/singlePlanets/:id" />
            <Route element={<SingleVehicles />} path="/singleVehicles/:id" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
