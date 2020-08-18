class Store {
  items = {
    data: [
      {
        id: 1,
        country: "Argentina",
        capital: "Buenos Aires",
      },
      {
        id: 2,
        country: "Brasil",
        capital: "Brasilia",
      },
      {
        id: 3,
        country: "Colombia",
        capital: "Bogota",
      },
      {
        id: 4,
        country: "Panamá",
        capital: "Ciudad de Panamá",
      },
      {
        id: 5,
        country: "Venezuela",
        capital: "Caracas",
      },
    ],

    itemCountry: {
      country: "Italia",
      capital: "Roma",
    },
  };

  addData(data) {
    items.data.push(data);
  }

  handleItem(e) {
    let countryCopy = Object.assign({}, items.itemCountry);
    countryCopy[e.getTarget.name] = e.getTarget.value;
    items.itemCountry = countryCopy;
  }
}

export default Store;
