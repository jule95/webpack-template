import React, {Component} from "react";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit.js"

class App extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            persons: [
                {id: 0, name: "Julius", age: 24},
                {id: 1, name: "John", age: 25}
            ]
        };
    }

    render()
    {
        return (
            <React.Fragment>
                <Cockpit title={this.props.title}/>
                <Persons persons={this.state.persons}/>
            </React.Fragment>
        )
    }
}

export default App;