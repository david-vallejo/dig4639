import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WeatherProject from "./weather_project.1";
import moment from "moment";
import KeepAwake from "react-native-keep-awake";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303644",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    paddingBottom: 2,
    height: "100%",
    width: "100%"
  },
  timeText: { color: "#baecee", fontSize: 50 },
  dateText: {
    color: "#999999",
    fontSize: 30
  }
});
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format("LL"),
      time: moment().format("LTS")
    };
  }
  render() {
    setTimeout(() => {
      this.setState({
        date: moment().format("LL"),
        time: moment().format("LTS")
      });
    }, 1000);
    return (
      <View style={styles.container}>
        <WeatherProject />
      </View>
    );
  }
}
