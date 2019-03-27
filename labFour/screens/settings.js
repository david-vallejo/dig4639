<View style={styles.row}>
  <Button onPress={this.checkMultiPermissions} label="Choose Image" />
</View>;

/* settings screen where you can choose a background image */

<View
  style={{
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  }}
>
  <View style={styles.row}>
    <Button onPress={this.doAsyncWork} label="Do Async Work" />
  </View>
  <View style={styles.row}>
    <Button onPress={this.doAsyncWork2} label="Do Async Work" />
  </View>
</View>;
/* the async buttons control the background image */
<View
  style={{
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  }}
>
  <View style={styles.row}>
    <Button onPress={this.doCallbackWork1} label="Callbacks 2" />
  </View>
  <View style={styles.row}>
    <Button onPress={this.doCallbackWork} label="Callbacks" />
  </View>
</View>;
