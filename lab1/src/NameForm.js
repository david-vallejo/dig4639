import React from "react";
import styles from "./styles.module.css";
class NameForm extends React.Component {
  name = "UserName";
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /*Hello Professor this is where I need help please */
  handleChange(event) {
    this.name = event.target.value;
    if (this.name != null) {
      function checkForError(name) {
        console.log(this);
        var errorCheck = /abcd/;
        return alert.error;
      }
    }
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <container styles={styles.container}>
        <view
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <form
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
            styles={styles.form}
            onSubmit={this.handleSubmit}
            className={styles.form1}
          >
            <label styles={styles.label}>
              Name:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input id="Button1" type="submit" value="Submit" />
          </form>
        </view>
      </container>
    );
  }
}
export default NameForm;
