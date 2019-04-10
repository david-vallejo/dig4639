import React from "react";
import Main from "./app/components/Main";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return <Main />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
