import React from "react";
import styles from "./styles.module.css";
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    //This is where the logic goes
  }

  render() {
    return (
      <container styles={styles.container}>
        <view>
          <form
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
