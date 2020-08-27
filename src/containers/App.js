//React
import React, {Component} from "react";

/*My Components*/
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