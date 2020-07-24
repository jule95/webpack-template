//React
import React, {Component} from "react";
//Bootstrap
import Container from "react-bootstrap/cjs/Container";
import Navbar from "react-bootstrap/cjs/Navbar";
import {useEffect} from "react";

const myNavbar = WrappedComponent =>
{
    return props =>
    {
        return (
            <Navbar bg={props.bg}>
                <Container>
                    <Navbar.Brand>
                        <WrappedComponent {...props}/>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        )
    };
}

export default myNavbar;