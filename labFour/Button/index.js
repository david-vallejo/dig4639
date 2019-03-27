import React, { Component } from "react";

import { Text, View, TouchableHighlight } from "react-native";

import styles from "./style";

class Button extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={[styles.button, this.props.style]}>
          <Text style={{ color: "#baecee", fontSize: 20 }}>
            Use my location
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Button;
