import React, { Component } from 'react';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Menu from './menu/MenuComponent';
import Header from './navigation/HeaderComponent';
import Footer from './navigation/FooterComponent';
import HomePage from './pages/HomePage';
import Contact from './pages/ContactComponent';
import DishDetail from './menu/DishdetailComponent';
import About from './pages/AboutPage';
import { addComment } from '../service/redux/ActionCreators'

const mapStateToProps = state => {

    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
})

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "JuanSe Ristorante Con Fusion",
        };
        console.log("Hellow MainComponent", { state: this.state });
    }

    render() {
        const HomePageElement = () => {
            return (
                <HomePage
                    dish={this.props.dishes.find(dish => dish.featured)}
                    promotion={this.props.promotions.find(promo => promo.featured)}
                    leader={this.props.leaders.find(leader => leader.featured)}
                />
            )
        }

        const DishWithId = ({ match }) => {
            const dishId = parseInt(match.params.dishId);
            return (
                <DishDetail
                    dish={this.props.dishes.find(dish => dish.id === dishId)}
                    comments={this.props.comments.filter(comment => comment.dishId === dishId)}
                    addComment={this.props.addComment}
                />
            )
        }

        const AboutPage = () => {
            return (
                <About leaders={this.props.leaders} />
            )
        }
        return (
            <React.Fragment>
                <Header notification={this.props.dishes.length} title={this.props.title} />
                <Switch>
                    <Route path="/home" component={HomePageElement} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />} />
                    <Route exact path='/contactus' component={Contact} />} />
                    <Route exact path='/aboutus' component={AboutPage} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));