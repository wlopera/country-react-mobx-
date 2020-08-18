import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

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

const tableCountry = (props) => {
  return (
    <div className="container" style={{ marginTop: 50 }}>
      <BootstrapTable striped hover keyField="id" data={props.data} columns={columns} />
    </div>
  );
};

export default tableCountry;
