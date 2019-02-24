import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Badge, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import logo from './logo.svg';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        }
        this.toogleNav = this.toogleNav.bind(this);
    }

    toogleNav() {
        console.log("Header:toogleNav", this)
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toogleNav} />
                        <NavbarBrand href="/" className="mr-auto">
                            <img src={logo} className="Navigation-logo" alt="logo" />
                            {this.props.title} <Badge color="primary" pill>{this.props.notification}</Badge>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg">Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg">About Us</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg">Menu</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-adress/card fa-lg">Contact Us</span>
                                    </NavLink>
                                </NavItem>
                                {/*                             <NavItem>
                                <NavLink className="nav-link" to="/tasks">
                                    <span className="fa fa-list fa-lg">Tasks</span>
                                </NavLink>
                            </NavItem> */}

                            </Nav>
                        </Collapse>
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
            </React.Fragment >

        )
    }
}

export default Header;