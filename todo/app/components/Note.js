import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default class note extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.notes}</Text>
        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.noteDelete}
        >
          <FontAwesome name="trash" size={32} color="#25CCF7" />
          <Text style={styles.noteDeleteText} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#25CCF7",
    borderTopWidth: 2,
    borderTopColor: "#25CCF7"
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#ff4d4d",
    color: "white",
    fontSize: 25
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteDeleteText: {
    color: "white"
  }
});
