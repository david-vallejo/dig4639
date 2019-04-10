import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Note from "./Note";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: ""
    };
  }
  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> To Do list </Text>
          <FontAwesome name="pencil" size={42} color="yellow" />
        </View>
        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={noteText => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder="What To do.. "
            placeholderTextColor="yellow"
          />
        </View>
        <TouchableOpacity
          onPress={this.addNote.bind(this)}
          style={styles.addButton}
        >
          <FontAwesome name="plus-circle" size={82} color="yellow" />
        </TouchableOpacity>
      </View>
    );
  }

  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      var f = this.state.noteText;
      this.state.noteArray.push({
        date:
          d.getFullYear() +
          "/" +
          (d.getMonth() + 1) +
          "/" +
          d.getDate() +
          "   " +
          f
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: "" });
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3A47"
  },
  header: {
    backgroundColor: "#2C3A47",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#2C3A47",
    display: "flex",
    flexDirection: "row",
    paddingTop: 20
  },
  headerText: {
    color: "white",
    fontSize: 30,
    padding: 36,
    paddingTop: 40
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10 },
  textInput: {
    alignSelf: "stretch",
    color: "yellow",
    backgroundColor: "#2C3A47",
    borderTopWidth: 10,
    borderTopColor: "#2C3A47",
    fontSize: 30,
    padding: 26,
    paddingTop: 20
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 120,
    height: 90,
    width: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  addButtonText: { color: "#baecee", fontSize: 44 },
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#fc5c65",
    borderTopWidth: 2,
    borderTopColor: "#fc5c65",
    color: "white",
    fontSize: 30
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#fc5c65",
    color: "white",
    fontSize: 50
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2980b9",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteDeleteText: {
    color: "yellow"
  }
});
