import React, { Component } from "react";
import ReactDOM from "react-dom";

class Main extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">Movie Search App</h1>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));