import React, { Component } from 'react';

import { DISHES } from '../shared/dishes'
import { COMMETNS } from '../shared/dishes';
import Menu from './menu/MenuComponent';
import DishDetail from './menu/DishdetailComponent';
import Header from './navigation/HeaderComponent';
import Footer from './navigation/FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "JuanSe Ristorante Con Fusion",
            dishes: DISHES,
        };
        console.log("Hellow MainComponent", { state: this.state });
    }

    render() {
        const HomePageElement = () => {
            return (
                <HomePage />
            )
        }
        return (
            <div>
                <Header notification={this.state.dishes.length} title={this.state.title} />
                <Switch>
                    <Route path="/home" component={HomePageElement} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                {/* <Menu onClick={(dishId) => this.onDishSelect(dishId)} dishes={this.state.dishes} />

                <DishDetail comments={COMMETNS} dish={this.state.dishes.find(dish => dish.id === this.state.selectedDish)} /> */}

                <Footer />
            </div>
        );
    }
}

export default MainComponent;
