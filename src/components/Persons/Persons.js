import React from "react";

import Person from "./Person/Person";

const persons = props =>
{
    return props.persons.map(person =>
        <Person
            key={person.id}
            name={person.name}
            age={person.age}/>)
};

export default persons;