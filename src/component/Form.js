import React from "react";
import { Form } from "semantic-ui-react";

const form = (props) => {
  return (
    <div className="container" style={{ marginTop: 5 }}>
      <Form>
        <Form.Group>
          <Form.Input
            onChange={(e) => props.change(e)}
            placeholder="País"
            name="country"
            value={props.item.country}
            width={7}
          />
          <Form.Input
            onChange={(e) => props.change(e)}
            placeholder="Capital"
            name="capital"
            value={props.item.capital}
            width={7}
          />
          <Form.Button onClick={props.submit} content="Enviar" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default form;
