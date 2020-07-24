//React
import React, {Component} from "react";

//Bootstrap
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/Row";

const main = WrappedComponent =>
{
    return props =>
    {
        return (
            <Container>
                <Row>
                    <WrappedComponent {...props}/>
                </Row>
            </Container>
        )
    }
}

export default main;