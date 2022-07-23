import React from "react";
import { Col, Form } from "react-bootstrap";
import FormTextField from "./form-field";
import FormSelectField from "./form-select-field";

export default () => {
  return (
    <Form.Row>
      <FormSelectField
        as={Col}
        sm="4"
        controlId="validationFormik03"
        label="City"
        type="text"
        name="city"
      >
        <option value="">Select a city</option>
        <option>Toronto</option>
        <option>Markham</option>
        <option>Mississauga</option>
      </FormSelectField>

      <FormSelectField
        as={Col}
        sm="4"
        controlId="validationFormik04"
        label="State"
        type="text"
        name="state"
      >
        <option value="">Select a state</option>
        <option>ON</option>
        <option>QB</option>
        <option>MT</option>
        <option>BC</option>
      </FormSelectField>

      <FormTextField
        as={Col}
        md="4"
        controlId="validationFormik05"
        label="ZIP"
        type="text"
        name="zip"
      />
    </Form.Row>
  );
};
