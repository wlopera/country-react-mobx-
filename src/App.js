import React, { Component } from "react";
import TableCountry from "./component/TableCountry";
import Form from "./component/Form";

class App extends Component {
  state = {
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
      country: "",
      capital: "",
    },
  };

  handleItem = (e) => {
    let countryCopy = Object.assign({}, this.state.itemCountry);
    countryCopy[e.target.name] = e.target.value;
    this.setState({ itemCountry: countryCopy });
  };

  handleSubmit = () => {
    if (this.state.itemCountry.country.trim().length > 0 && this.state.itemCountry.capital.trim().length > 0) {
      const data = {
        id: this.state.data.length + 1,
        country: this.state.itemCountry.country,
        capital: this.state.itemCountry.capital,
      };
      let dataCopy = Object.assign([], this.state.data);
      dataCopy.push(data);
      this.setState({
        data: dataCopy,
      });
    }
    this.setState({
      itemCountry: {
        country: "",
        capital: "",
      },
    });
  };

  render() {
    return (
      <div>
        <Form item={this.state.itemCountry} change={this.handleItem} submit={this.handleSubmit} />
        <TableCountry data={this.state.data} />
      </div>
    );
  }
}

export default App;
