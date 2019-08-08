import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Field, reduxForm } from "redux-form";
import { Button } from "react-native-elements";

const required = value =>
  value || typeof value === "number" ? undefined : "Required";
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
const number = value =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue13 = minValue(13);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const tooYoung = value =>
  value && value < 13
    ? "You do not meet the minimum age requirement!"
    : undefined;
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;
const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;

const elements = [
  { name: "name", validate: [required], warn: [required] },
  { name: "age", validate: [required, number], warn: [required, number] }
];
class FormExample extends React.Component {
  renderEachField = ({ input, meta: { touched, error, warning } }, each) => {
    return (
        <>
      <TextInput
        placeholder={each.name}
        {...input}
        style={{ width: 200, height: 40, marginBottom: 5 }}
      />
          {touched &&
        ((error && <Text>{error}</Text>) ||
          (warning && <Text>{warning}</Text>))}
      </>
    );
  };

  submit = value => {
    console.log({ value });
  };

  renderField = () => {
    return elements.map((each, index) => {
      return (
        <Field
          key={index}
          name={each.name}
          component={props => this.renderEachField(props, each)}
          validate={each.validate}
          warn={each.warn}
        />
      );
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={{ alignItems: "center" }}>
        {this.renderField()}
        <Button
          style={{ width: 100 }}
          backgroundColor="blue"
          title="submit"
          onPress={handleSubmit(this.submit)}
        />
      </View>
    );
  }
}

export default reduxForm({
  form: "fieldLevelValidation" // a unique identifier for this form
})(FormExample);
