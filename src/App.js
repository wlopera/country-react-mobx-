import React, { Component } from "react";
import Store from "./store/Store";
import { decorate, observable, action, computed } from "mobx";
import TableCountry from "./component/TableCountry";
import FormData from "./component/FormData";

decorate(Store, {
  items: observable,
  addData: action,
  maxData: computed,
});

const newStore = new Store();

class App extends Component {
  UNSAFE_componentWillReceiveProps() {}

  render() {
    console.log(React.version);
    return (
      <div>
        <FormData store={newStore} />
        <TableCountry store={newStore} />
      </div>
    );
  }
}

export default App;
