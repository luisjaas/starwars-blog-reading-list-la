import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Home = () => {
	const { store, actions } = useContext(Context);
	//characters
	useEffect(() => {
		if (store.characters.length > 0) {
			actions.getCharacteristics();
		}
	}, [store.characters]);

	useEffect(() => {
		actions.getCharacters()
	},[])

	//planets
	useEffect(() => {
		if (store.planets.length > 0) {
			actions.getPlanetsCharacteristics();
		}
	}, [store.planets]);

	useEffect(() => {
		actions.getPlanets()
	},[])

	//vehicles
	useEffect(() => {
		if (store.vehicles.length > 0) {
			actions.getVehiclesCharacteristics();
		}
	}, [store.vehicles]);

	useEffect(() => {
		actions.getVehicles()
	},[])



	return (
		<div className="container">
			<div className="carousel-c">
				<h2>Characters</h2>
					<div className="Characters">
						{store.characteristics.map((character, index) => {
							return <Cards character={character} key={index} />;
						})}
					</div>
			</div>

			<div className="carousel-p">
				<h2>Planets</h2>
					<div className="Planets">
						{store.planetscharacteristics.map((planets, indexp) => {
							return <Planets planets={planets} key={indexp} />;
						})}
					</div>
			</div>

			<div className="carousel-v">
				<h2>Vehicles</h2>
					<div className="Vehicles">
						{store.vehiclescharacteristics.map((vehicles, indexv) => {
							return <Vehicles vehicles={vehicles} key={indexv} />;
						})}
					</div>
			</div>
		</div>
		
	);
};
