const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      characteristics: [],

      planets: [],
      planetscharacteristics: [],

      vehicles: [],
      vehiclescharacteristics: [],

      favorites: [],

      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction

      //boton para agregar a favoritos
      toggleFavorite: (item) => {
        const store = getStore();
        const actions = getActions();
        if (actions.isFavorite(item.name)) {
          const newFavorites = store.favorites.filter((fav) => {
            return fav.name !== item.name;
          });
          setStore({
            favorites: newFavorites,
          });
        } else {
          setStore({
            favorites: [...store.favorites, item],
          });
        }
      },
      isFavorite: (name) => {
        const store = getStore();
        return store.favorites.find((favorite) => {
          return favorite.name == name;
        });
      },

      //Personajes
      getCharacters: () => {
        const apiURL = `https://www.swapi.tech/api/people/`;
        fetch(apiURL)
          .then((Response) => {
            if (Response.ok) {
              return Response.json();
            }
            throw new Error("Ha ocurrido un error");
          })
          .then((body) => setStore({ characters: body.results }))
          .catch((error) => console.log(error));
      },

      getCharacteristics: () => {
        const store = getStore();
        for (const personajes of store.characters) {
          let id = personajes.uid;
          const apiURL = `https://www.swapi.tech/api/people/${id}`;
          fetch(apiURL)
            .then((Response) => {
              if (Response.ok) {
                return Response.json();
              }
              throw new Error("Ha ocurrido un error");
            })
            .then((body) =>
              setStore({
                characteristics: [
                  ...store.characteristics,
                  {
                    uid: body.result.uid,
                    image: `https://starwars-visualguide.com/assets/img/characters/${body.result.uid}.jpg`,
                    ...body.result.properties,
                  },
                ],
              })
            )
            .catch((error) => console.log(error));
        }
      },

      //Planetas
      getPlanets: () => {
        const apiURL = `https://www.swapi.tech/api/planets/`;
        fetch(apiURL)
          .then((Response) => {
            if (Response.ok) {
              return Response.json();
            }
            throw new Error("Ha ocurrido un error");
          })
          .then((body) => setStore({ planets: body.results }))
          .catch((error) => console.log(error));
      },

      getPlanetsCharacteristics: () => {
        const store = getStore();
        for (const planetas of store.planets) {
          let id = planetas.uid;
          const apiURL = `https://www.swapi.tech/api/planets/${id}`;
          fetch(apiURL)
            .then((Response) => {
              if (Response.ok) {
                return Response.json();
              }
              throw new Error("Ha ocurrido un error");
            })
            .then((body) =>
              setStore({
                planetscharacteristics: [
                  ...store.planetscharacteristics,
                  {
                    uid: body.result.uid,
                    image: `https://starwars-visualguide.com/assets/img/planets/${body.result.uid}.jpg`,
                    ...body.result.properties,
                  },
                ],
              })
            )
            .catch((error) => console.log(error));
        }
      },

      //Vehiculos
      getVehicles: () => {
        const apiURL = `https://www.swapi.tech/api/vehicles/`;
        fetch(apiURL)
          .then((Response) => {
            if (Response.ok) {
              return Response.json();
            }
            throw new Error("Ha ocurrido un error");
          })
          .then((body) => setStore({ vehicles: body.results }))
          .catch((error) => console.log(error));
      },

      getVehiclesCharacteristics: () => {
        const store = getStore();
        for (const vehiculos of store.vehicles) {
          let id = vehiculos.uid;
          const apiURL = `https://www.swapi.tech/api/vehicles/${id}`;
          fetch(apiURL)
            .then((Response) => {
              if (Response.ok) {
                return Response.json();
              }
              throw new Error("Ha ocurrido un error");
            })
            .then((body) =>
              setStore({
                vehiclescharacteristics: [
                  ...store.vehiclescharacteristics,
                  {
                    uid: body.result.uid,
                    image: `https://starwars-visualguide.com/assets/img/vehicles/${body.result.uid}.jpg`,
                    ...body.result.properties,
                  },
                ],
              })
            )
            .catch((error) => console.log(error));
        }
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
