import React from "react";
import { Image, StyleSheet, Text, View, StatusBar, Button } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { Dimensions } from "react-native";
import { red, underline } from "ansi-colors";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height
export default class DetailsScreen extends React.Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;

    const itemId = navigation.getParam(
      this.props.navigation.state.params.title,
      "NO-ID"
    ); //myObj["title"]
    const title = navigation.getParam("title", "This is a cat I promise");
    const newImage = navigation.getParam("image", "No Image");
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            paddingTop: 20,
            fontSize: 20,
            lineHeight: 2,
            flex: 1
          }}
        >
          Cat title : {title}
        </Text>
        <Image
          resizeMode="contain"
          source={newImage}
          style={{ width: "90%", height: "40%" }}
        />
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push("Details", {
              itemId: Math.floor(Math.random() * 100)
            })
          }
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderWidth: 1,

    flexDirection: "column"
  },
  text: { fontSize: 60 }
});
