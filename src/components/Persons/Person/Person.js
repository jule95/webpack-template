import React from "react";
import PropTypes from "prop-types";


const person = props =>
{
    return (
        <div>
            <span>{props.name}, {props.age}</span>
        </div>
    )
};

person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};

export default person;