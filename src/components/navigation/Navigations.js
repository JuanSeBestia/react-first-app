import React, { Component } from 'react';
import { Navbar, NavbarBrand, Badge } from 'reactstrap';
import logo from './logo.svg';


class Navigation extends Component {
    render() {
        return (
            <Navbar dark color="dark">
                <div className="container">

                    <NavbarBrand href="#">
                        <img src={logo} className="Navigation-logo" alt="logo" />
                        {this.props.title} <Badge color="primary" pill>{this.props.notification}</Badge>
                    </NavbarBrand>
                </div>
            </Navbar>
        )
    }
}

export default Navigation;