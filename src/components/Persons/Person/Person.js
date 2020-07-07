import React from "react";

const person = props =>
{
    return (
        <div>
            <span>{props.name}, {props.age}</span>
        </div>
    )
};

export default person;