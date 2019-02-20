import React from "react";
import { Image, StyleSheet, Text, View, StatusBar, Button } from "react-native";
import { ExpoLinksView } from "@expo/samples";

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
        <Text>Cat title : {title}</Text>
        <Image source={newImage} />
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
    paddingTop: 15,
    backgroundColor: "#ff5e57"
  },
  image: {
    flex: 1,
    width: 100,
    height: 10
  }
});
