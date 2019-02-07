import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image
} from "react-native";

export default class HomeActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TextInputValue: ""
    };
  }

  click = () => {
    const { TextInputValue } = this.state;
    Alert.alert(TextInputValue);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("./smiley_sunglasses_emoji.png")}
          style={styles.firstImage}
        >
          {this.props.children}
        </Image>

        <Text style={styles.headerText}>Hello Hows It going?</Text>
        <TextInput
          style={{
            height: 45,
            width: "95%",
            borderColor: "gray",
            borderWidth: 2,
            color: "snow"
          }}
          placeholder=" Enter Your First Name"
          onChangeText={TextInputValue => this.setState({ TextInputValue })}
        />

        <View style={styles.buttonStyle}>
          <Button onPress={this.click} title="SUBMIT" color="white" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C3A47"
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dodgerblue",
    height: 75,
    margin: 30,
    width: 200,
    borderRadius: 50
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color: "darkcyan"
  },
  firstImage: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignContent: "center"
  }
});
