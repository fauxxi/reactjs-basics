import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

    constructor(){
        super();

    }

  render(){

     let user = {
          name: "Areeve",
          hobbies: ["Sports", "Coding", "Cycling"]
      };

    return (
    <div className="container">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
            <Header/>
        </div>
      </div>
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                <Home names={"Fauxxi"} age={24} {...user} />
                <Home/>
            </div>
        </div>

    </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
