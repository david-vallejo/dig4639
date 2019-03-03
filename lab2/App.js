import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

var username;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", usersInput: "", error: "" };

    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onChange(event) {
    username = event;
  }

  onPress() {
    this.validate();
  }
  validate() {
    let usersInput = "";
    let error = "";

    if (!username.match(/^[a-zA-Z\s]*$/)) {
      error = "Please use letters only!";
    } else {
      usersInput = "Hello, " + username + "  it's great to see you!";
    }
    if (error) {
      this.setState({ error });
      return false;
    } else if (usersInput) {
      this.setState({ usersInput });
      return false;
    }
    return true;
  }
  render() {
    if (this.state.usersInput) {
      return (
        <View
          style={styles.container}
          flexDirection="column"
          alignItems="stretch"
        >
          <Text style={styles.appText}>{this.state.usersInput}</Text>
        </View>
      );
    } else {
      return (
        <View
          style={styles.container}
          flexDirection="column"
          alignItems="stretch"
        >
          <View>
            <TextInput
              style={styles.textInput}
              onChangeText={this.onChange}
              placeholder="What is your first name"
            />
          </View>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <Text style={styles.errors}>{this.state.error}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontSize: "xx-large"
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightcoral",
    height: 50,
    margin: 5,
    width: 100,
    borderRadius: 50,
    fontColor: "snow"
  },
  textInput: {
    height: 65,
    width: "95%",
    borderColor: "snow",
    borderWidth: 1,
    fontSize: "xx-large",
    color: "snow"
  },
  appText: {
    fontSize: "xx-large",
    textAlign: "center",
    color: "snow"
  },
  errors: {
    fontSize: "xx-large",
    color: "red",
    textAlign: "center"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color: "darkcyan"
  },
  container: {
    flex: 1,
    fontSize: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C3A47",
    color: "snow"
  },
  input: {
    color: "snow"
  }
});
