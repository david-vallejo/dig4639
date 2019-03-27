import React, { Component } from "react";

import { Text, View, StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height
class Forecast extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.forecast}>
          <Text style={{ color: "white", fontSize: 20 }}>
            THE WEATHER:
            <Text style={{ color: "#12CBC4", fontSize: 20, marginLeft: 3 }}>
              {this.props.main}
            </Text>
          </Text>
          <Text style={{ color: "white", fontSize: 20 }}>
            TEMPERATURE:
            <Text style={{ color: "#12CBC4", fontSize: 20, marginLeft: 3 }}>
              {this.props.temp}°F
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  forecast: { alignItems: "center" },
  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    height: height,
    width: "100%",
    flexDirection: "column",
    display: "flex",
    bottom: 0
  }
});

export default Forecast;
