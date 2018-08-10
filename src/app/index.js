import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

  render(){
    return (
    <div className="container">
      <Header/>
      <h1>HEEEEEYYY {10*10}</h1>
      <Home/>
    </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
