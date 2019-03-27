import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, AsyncStorage } from "react-native";
import Button from "./Button";
import * as Expo from "expo";
import Forecast from "./Forecast";
import { Ionicons } from "@expo/vector-icons";
import LocationButton from "./LocationButton";
import textStyles from "./styles/typography.js";
import { Dimensions } from "react-native";
import moment from "moment";
import KeepAwake from "react-native-keep-awake";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const STORAGE_KEY = "@SmarterWeather:zip";

import OpenWeatherMap from "./open_weather_map";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

// This version uses flowers.png from local assets
//import PhotoBackdrop from "./PhotoBackdrop/local_image";
// This version pulls a specified photo from the camera roll
import PhotoBackdrop from "./PhotoBackdrop/local_image";

class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = { forecast: null };
  }

  doCallbackWork = () => {
    function always() {
      console.log("I am always executed! error or success");
    }
    this.fooCallbacks(
      function() {
        always();
      },
      function() {
        always();
      }
    );
  };
  fooCallbacks = cb => {
    callback = (cb2, input, err) => {
      console.log("Called at " + Date.now());
      setTimeout(() => {
        console.log("finished at " + Date.now());
        cb2(this.promiseNumber++);
      }, 200 * input);
    };
    callback(function(res, err) {
      console.log(res + ": 1");
      callback(function(res, err) {
        console.log(res + ": 2");
        callback(function(res, err) {
          console.log(res + ": 3");
          cb();
        }, 1);
      }, 2);
    }, 5);
  };

  doCallbackWork1 = () => {
    function always() {
      console.log("I am always executed! error or success");
    }
    this.fooCallbacks2(
      function() {
        always();
      },
      function() {
        always();
      }
    );
  };

  fooCallbacks2 = cb => {
    let callback1 = input => {
      console.log("Called at " + Date.now());
      setTimeout(() => {
        console.log("My " + input + " job finished at " + Date.now());
        callback2(2);
      }, 200 * input);
    };
    let callback2 = input => {
      console.log("Called at " + Date.now());
      setTimeout(() => {
        console.log("My " + input + " job finished at " + Date.now());
        callback3(3);
      }, 200 * input);
    };
    let callback3 = input => {
      console.log("Called at " + Date.now());
      setTimeout(() => {
        console.log("My " + input + " job finished at " + Date.now());
      }, 200 * input);
    };
    callback1(1);
  };

  doAsyncWork = () => {
    let promise = this.foo();
    promise
      .then(function(fooResult) {
        console.log(fooResult); // fooResult should be what is returned by doSomething3()
      })
      .catch(function(err) {
        console.error(err); // Can be thrown by any
      })
      .done(function() {
        console.log("I am always executed! error or success");
      });
  };

  promiseNumber = 0;
  doSomething = input => {
    return new Promise((resolve, reject) => {
      console.log("Called at " + Date.now());
      setTimeout(() => {
        console.log("finished at " + Date.now());
        resolve(this.promiseNumber++);
      }, 200 * input);
    });
  };

  fooAwait = async () => {
    doSomethingResult = await this.doSomething(0);
    console.log(doSomethingResult + ": 1");
    doSomething1Result = await this.doSomething(1);
    console.log(doSomething1Result + ": 2");
    doSomething2Result = await this.doSomething(2);
    console.log(doSomething2Result + ": 3");
    return this.doSomething(3);
  };

  foo = () => {
    return this.doSomething(0)
      .then(doSomethingResult => {
        console.log(doSomethingResult + ": 1");
        return this.doSomething(1);
      })
      .then(doSomething1Result => {
        console.log(doSomething1Result + ": 2");
        return this.doSomething(2);
      })
      .then(doSomething2Result => {
        console.log(doSomething2Result + ": 3");
        return this.doSomething(3);
      });
  };
  doAsyncWork2 = () => {
    this.fooAwait()
      .then(function(fooResult) {
        console.log(fooResult); // fooResult should be what is returned by doSomething3()
      })
      .catch(function(err) {
        console.error(err); // Can be thrown by any
      })
      .done(function() {
        console.log("I am always executed! error or success");
      });
  };

  checkMultiPermissions = async () => {
    const { Permissions, FileSystem } = Expo;
    console.log(FileSystem.documentDirectory);
    let { status, expires, permissions } = await Permissions.getAsync(
      Permissions.CAMERA_ROLL
    );
    if (status !== "granted") {
      console.log("Hey! You have not enabled selected permissions");
      const { newStatus, expires, permissions } = await Permissions.askAsync(
        Permissions.CAMERA_ROLL
      );
      status = newStatus;
    }
    if (status === "granted") {
      console.log("Granted!");
      let result = await Expo.ImagePicker.launchImageLibraryAsync({
        allowsEditing: true
      });

      console.log(result);
      if (!result.cancelled) {
        console.log(this);
        console.log("Accepted!");
        this.setState({
          newPostImage: result.uri,
          createPostModalVisible: true
        });
        FileSystem.copyAsync({
          from: result.uri,
          to: FileSystem.documentDirectory + "myimage.jpg"
        }).then(() => console.log("Moved to location"));
        try {
          await AsyncStorage.setItem("@MySuperStore:key", result.uri)
            .then(() => console.log("Saved selection to disk: " + result.uri))
            .catch(error =>
              console.error("AsyncStorage error: " + error.message)
            )
            .done();
          console.log("saved");
          this._retrieveData();
        } catch (error) {
          // Error saving data
        }
      }
    }
  };
  _retrieveData = async () => {
    console.log("Retrieving Data");
    try {
      const value = await AsyncStorage.getItem("@MySuperStore:key");
      if (value !== null) {
        // We have data!!
        console.log("Got data");
        console.log(value);
        this.setState({ newPostImage: value, createPostModalVisible: true });
      } else {
        console.log("No data");
      }
    } catch (error) {
      console.log(error);
      // Error retrieving data
    }
  };

  componentDidMount() {
    AsyncStorage.getItem(STORAGE_KEY)
      .then(value => {
        if (value !== null) {
          this._getForecastForZip(value);
        }
      })
      .catch(error => console.error("AsyncStorage error: " + error.message))
      .done();
    this._retrieveData();
  }

  _getForecastForZip = zip => {
    // Store zip code
    AsyncStorage.setItem(STORAGE_KEY, zip)
      .then(() => console.log("Saved selection to disk: " + zip))
      .catch(error => console.error("AsyncStorage error: " + error.message))
      .done();

    OpenWeatherMap.fetchZipForecast(zip).then(forecast => {
      this.setState({ forecast: forecast });
    });
  };

  _getForecastForCoords = (lat, lon) => {
    OpenWeatherMap.fetchLatLonForecast(lat, lon).then(forecast => {
      this.setState({ forecast: forecast });
    });
  };

  _handleTextChange = event => {
    let zip = event.nativeEvent.text;
    this._getForecastForZip(zip);
  };

  render() {
    setTimeout(() => {
      this.setState({
        date: moment().format("LL"),
        time: moment().format("LTS")
      });
    }, 1000);
    let content = null;
    console.log("Rendered" + this.state.newPostImage);
    if (this.state.forecast !== null) {
      content = (
        <View style={styles.row}>
          <Forecast
            main={this.state.forecast.main}
            temp={this.state.forecast.temp}
          />
        </View>
      );
    }

    return (
      <View styles={styles.container}>
        <PhotoBackdrop
          style={{
            justifyContent: "center",
            display: "flex",
            flex: 1,
            left: 0,
            right: 0,
            alignSelf: "stretch",
            width: width,
            height: height,
            resizeMode: "contain"
          }}
          image={this.state.newPostImage}
        >
          <View
            style={{
              backgroundColor: "#303644",
              height: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <Text style={{ color: "white", fontSize: 32 }}>
              David's Weather App
            </Text>

            <View
              style={{
                padding: 1,
                marginLeft: 3,
                paddingLeft: 24,
                paddingTop: 10
              }}
            >
              <Ionicons name="ios-cloud" size={42} color="#baecee" />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#303644",
              height: 28,
              alignItems: "center",
              justifyContent: "space-evenly",
              display: "flex",
              bottom: 0,
              flexDirection: "row"
            }}
          >
            <Text style={styles.timeText}>{this.state.date}</Text>
            <Text style={styles.timeText}>{this.state.time}</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.zipContainer}>
              <TextInput
                style={[textStyles.mainText, styles.zipCode]}
                onSubmitEditing={this._handleTextChange}
                underlineColorAndroid="transparent"
                placeholder="Zip Code"
                placeholderTextColor="#baecee"
                color="#303644"
              />
            </View>
          </View>
          <View style={styles.row}>
            <LocationButton onGetCoords={this._getForecastForCoords} />
          </View>
          <View style={{ flex: 1 }}>
            <View
              style={{
                backgroundColor: "#303644",
                height: 120,
                alignItems: "center",
                justifyContent: "space-evenly",
                display: "flex",
                bottom: 0,
                marginTop: 10,
                flexDirection: "row"
              }}
            >
              {content}
            </View>
            <View
              style={{
                display: "flex",
                paddingright: 2,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#303644"
              }}
            >
              <Ionicons name="md-settings" size={45} color="#baecee" />
            </View>
          </View>
        </PhotoBackdrop>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  },
  zipContainer: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
    width: 120,
    height: textStyles.baseFontSize * 2,
    justifyContent: "space-around"
  },
  container: {
    flex: 1,
    backgroundColor: "#303644",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    paddingBottom: 2
  },
  zipCode: { flex: 1 },
  button: {
    backgroundColor: "green",
    width: "70%",
    height: 40
  },

  timeText: {
    color: "#baecee",
    fontSize: 20,
    flexDirection: "row",
    display: "flex"
  },
  dateText: {
    color: "#999999",
    fontSize: 20,
    flexDirection: "row",
    display: "flex"
  }
});

export default WeatherProject;
