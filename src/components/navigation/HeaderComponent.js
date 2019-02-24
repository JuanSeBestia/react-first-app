import React, { Component } from 'react';
import { Navbar, NavbarBrand, Badge, Jumbotron } from 'reactstrap';
import logo from './logo.svg';


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                    <div className="container">

                        <NavbarBrand href="#">
                            <img src={logo} className="Navigation-logo" alt="logo" />
                            {this.props.title} <Badge color="primary" pill>{this.props.notification}</Badge>
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>{this.props.title}</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>

                </Jumbotron>

                {/*
        <>
        </>
        or 
        <React.Fragment>
        </React.Fragment>
        */}
            </React.Fragment>

        )
    }
}

export default Header;