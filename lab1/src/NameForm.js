import React from "react";
import styles from "./styles.module.css";
class NameForm extends React.Component {   
  constructor(props) {
    super(props);
    this.state = { value: "", errors: true, noErrors: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    if (/[^a-zA-Z]/.test(this.state.value)) {
      this.setState({ errors: false });
    } else {
      this.setState({ errors: true });
      this.setState({ noErrors: true });
    }
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
  <div>
        {!this.state.noErrors ? (
          <form
            onSubmit={this.handleSubmit}
            style={{ width: 1000, height: 650, backgroundColor: "#58B19F", justifyContent: "center" }}
          >
            <label>
              Name ::
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                style={{backgroundColor: "transparent",border:"solid white 1.3px",padding:2,margin:5,borderRadius:20}}
              />
            </label>
            <input type="submit" value="Submit" style={{ width: 130, height:50, padding: 4,flex:1,flexDirection:"row",textAlign:"center",color:"white",backgroundColor:"transparent",margin:10,borderRadius: 30,border:"solid snow .5"
          }} />
            {!this.state.errors ? (
              <div style={{ color: "white",fontSize:'large' }}>
               Whoops there was an <span style={{textDecoration:"line-through",textDecorationColor:"red",fontSize:"xx-large"}}> error</span>sorry! please try again :-) your name again
              </div>
            ) : null}
            </form>
        ) : (
          <div style={{ width: 1100, height: 600, backgroundColor: "#58B19F", justifyContent: "center",color: "white",textAlign:"center",border:"none",fontSize:"x-large"}}> Hello and welcome <span style={{color:"#546de5",textDecoration:"underline",textDecorationColor:"#ffdd59",fontWeight:'bold',fontSize:'xx-large'}}>  {this.state.value}</span>, hope all is well with you :-) </div>
        )}
      </div>
      
    );
    
  }
  
}
export default NameForm;
