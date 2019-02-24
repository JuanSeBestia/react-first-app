import React, { Component } from 'react';

import { DISHES } from '../shared/dishes'
import { COMMETNS } from '../shared/dishes';
import Menu from './menu/MenuComponent';
import DishDetail from './menu/DishdetailComponent';
import Header from './navigation/HeaderComponent';
import Footer from './navigation/FooterComponent';


class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "JuanSe Ristorante Con Fusion",
            dishes: DISHES,
            selectedDish: null
        };
        console.log("Hellow MainComponent", { state: this.state });
    }

    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        })
    }

    render() {
        return (
            <div>
                <Header notification={this.state.dishes.length} title={this.state.title} />

                <Menu onClick={(dishId) => this.onDishSelect(dishId)} dishes={this.state.dishes} />

                <DishDetail comments={COMMETNS} dish={this.state.dishes.find(dish => dish.id === this.state.selectedDish)} />
                
                <Footer />
            </div>
        );
    }
}

export default MainComponent;
