import React from "react";
import { reduxForm } from "redux-form";
import { RaisedButton as Button } from "material-ui";

import { InputField, TextArea } from "./inputs";

const Form = (props) => {
  const { handleSubmit } = props;
  return (
    <form name="newPlace" onSubmit={handleSubmit}>
      <h1>Request New Place</h1>
      <InputField name="name" hint="Place name" />
      <InputField name="address" hint="Address" />
      <InputField name="latitude" hint="Latitude" />
      <InputField name="longitude" hint="Longitude" />
      <TextArea name="description" hint="Description about the place" rows={4} />

      <Button label="Request" primary type="submit" />
    </form>
  );
}

const NewPlaceForm = reduxForm({
  form: "newPlace",
})(Form);

export default NewPlaceForm;
