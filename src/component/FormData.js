import React, { Component } from "react";
import { Form } from "semantic-ui-react";

export default class FormData extends Component {
  submitClick = (e) => {
    e.preventDefault();

    let country = this.country.value.trim();
    let capital = this.capital.value.trim();

    if (country.length > 0 && capital.length > 0) {
      const data = {
        id: this.props.store.maxData,
        country: country,
        capital: capital,
      };
      this.props.store.addData(data);
    }

    this.country.value = "";
    this.capital.value = "";
  };

  render() {
    return (
      <div className="container" style={{ marginTop: 5 }}>
        <Form>
          <Form.Group>
            <input
              type="text"
              placeholder="País"
              name="country"
              id="country"
              ref={(node) => {
                this.country = node;
              }}
              width={7}
            />
            <input
              placeholder="Capital"
              name="capital"
              id="capital"
              ref={(node) => {
                this.capital = node;
              }}
              width={7}
            />
            <button onClick={this.submitClick}>Enviar</button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
