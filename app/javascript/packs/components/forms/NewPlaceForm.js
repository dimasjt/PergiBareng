import React from "react";
import { reduxForm, propTypes } from "redux-form";
import { RaisedButton as Button } from "material-ui";

import * as validations from "./validations";

import { InputField, TextArea } from "./inputs";

const Form = (props) => {
  const { handleSubmit } = props;
  return (
    <form name="newPlace" onSubmit={handleSubmit}>
      <h1>Request New Place</h1>
      <InputField name="name" hint="Place name" validate={validations.required} />
      <InputField name="address" hint="Address" validate={validations.required} />
      <InputField name="latitude" hint="Latitude" />
      <InputField name="longitude" hint="Longitude" />
      <TextArea
        name="description"
        hint="Description about the place"
        rows={4}
        validate={[validations.required, validations.min(10)]}
      />

      <Button label="Request" primary type="submit" />
    </form>
  );
};

Form.propTypes = {
  ...propTypes,
};

const NewPlaceForm = reduxForm({
  form: "newPlace",
})(Form);

export default NewPlaceForm;
