import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { observer } from "mobx-react";

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
  },
  {
    dataField: "country",
    text: "País",
    sort: true,
  },
  {
    dataField: "capital",
    text: "Capital",
  },
];

const tableCountry = ({ store }) => {
  return (
    <div className="container" style={{ marginTop: 50 }}>
      <BootstrapTable striped hover keyField="id" data={store.items.data} columns={columns} />
    </div>
  );
};

export default observer(tableCountry);
