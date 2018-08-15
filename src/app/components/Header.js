import React from "react";

export class Header extends React.Component {
  render(){
    return (
        <div className="container">
          <nav className="navbar navbar-light bg-light">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li><a href="#">Home</a></li>
              </ul>
            </div>
          </nav>
        </div>
    );
  }
}
