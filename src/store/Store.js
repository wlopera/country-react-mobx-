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
  };

  get maxData() {
    return this.items.data.length + 1;
  }

  addData(data) {
    console.log(1234, data);
    const dataCopy = Object.assign([], this.items.data);
    dataCopy.push(data);
    this.items.data = dataCopy;
  }
}

export default Store;
