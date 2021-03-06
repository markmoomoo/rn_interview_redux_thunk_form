import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Field, reduxForm } from "redux-form";
import FormExample from '../components/FormExample'



export default class LinksScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
        <FormExample />
      </ScrollView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: "Links"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});


