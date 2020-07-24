//React
import React, {Component} from "react";

//Bootstrap
import Navbar from "react-bootstrap/cjs/Navbar";
import Container from "react-bootstrap/Container";

/*My Component*/
//Class Based
import Cockpit from "../components/Cockpit/Cockpit.js"

class App extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
        };
    }

    render()
    {
        return (
           <React.Fragment>
                <Cockpit title={this.props.title} bg={"light"}/>
           </React.Fragment>
        )
    }
}

export default App;