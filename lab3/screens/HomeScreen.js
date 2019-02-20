import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  _gotoScreen = key => {
    console.log("Going to " + key);
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Cats are amazing</Text>
            <FlatList
              data={[
                {
                  key: "cat1",
                  image: require("../assets/images/cat1.png"),
                  title: "cat one",
                  description: "this is a cat"
                },
                {
                  key: "cat2",
                  image: require("../assets/images/cat2.png"),
                  title: "cat two",
                  description: "this is a cat"
                },
                {
                  key: "cat3",
                  image: require("../assets/images/cat3.png"),
                  title: "cat three",
                  description: "this is a cat"
                },
                {
                  key: "cat4",
                  image: require("../assets/images/cat4.png"),
                  title: "cat four",
                  description: "this is a cat"
                },
                {
                  key: "cat5",
                  image: require("../assets/images/cat5.png"),
                  title: "cat five",
                  description: "this is a cat"
                },
                {
                  key: "cat6",
                  image: require("../assets/images/cat6.png"),
                  title: "cat six",
                  description: "this is a cat"
                },
                {
                  key: "cat7",
                  image: require("../assets/images/cat7.png"),
                  title: "cat seven",
                  description: "this is a cat"
                }
              ]}
              keyExtractor={obj => {
                return obj.key;
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={event => {
                    this.props.navigation.navigate("Details", {
                      otherParam: this._keyExtractor,
                      title: item.title,
                      image: item.image,
                      description: item.description
                    });
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 200, height: 200 }}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
class DetailsScreen extends React.Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId", "NO-ID");
    const otherParam = navigation.getParam("otherParam", "some default value");

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
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
    backgroundColor: "#1e272e"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "#fff",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "#000",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#baecee",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, .77)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
