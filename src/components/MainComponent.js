import React, { Component } from 'react';

import { DISHES } from '../shared/dishes'
import Menu from './menu/MenuComponent';
import Header from './navigation/HeaderComponent';
import Footer from './navigation/FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Contact from './pages/ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import DishDetail from './menu/DishdetailComponent';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "JuanSe Ristorante Con Fusion",
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
        console.log("Hellow MainComponent", { state: this.state });
    }

    render() {
        const HomePageElement = () => {
            return (
                <HomePage
                    dish={this.state.dishes.find(dish => dish.featured)}
                    promotion={this.state.promotions.find(promo => promo.featured)}
                    leader={this.state.leaders.find(leader => leader.featured)}
                />
            )
        }

        const DishWithId = ({ match }) => {
            const dishId = parseInt(match.params.dishId);
            return (
                <DishDetail
                    dish={this.state.dishes.find(dish => dish.id === dishId)}
                    comments={this.state.comments.filter(comment => comment.dishId === dishId)}
                />
            )
        }
        return (
            <div>
                <Header notification={this.state.dishes.length} title={this.state.title} />
                <Switch>
                    <Route path="/home" component={HomePageElement} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />} />
                    <Route exact path='/contactus' component={Contact} />} />
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
