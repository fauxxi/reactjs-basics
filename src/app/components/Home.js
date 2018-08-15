import React from "react";

export class Home extends React.Component {

  render(){


      console.log(this.props);
    return(
      <div>
        <h1>In a new Component:</h1>
          <h4>
              My name is {this.props.names}, i'm {this.props.age} year old.
          </h4>
          <div>
              <h5>
                  User object:
              </h5>
              <div>
                  <p>Name: {this.props.name}</p>
                  <p>Hobbies: {this.props.hobbies.map((hobby) => <li>{hobby}</li>)}</p>
              </div>
          </div>
      </div>
    );
  }
}
