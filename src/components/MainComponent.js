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
import { addComment, fetchDishes, fetchPromos, fetchComments } from '../service/redux/ActionCreators'
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos())
})

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "JuanSe Ristorante Con Fusion",
        };
        console.log("Component MainComponent created", { Component: this });
    }

    componentDidMount() {
        console.log("Component MainComponent mounted", { Component: this });
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }

    render() {

        const HomePageElement = () => {
            return (
                <HomePage
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promoLoading={this.props.promotions.isLoading}
                    promoErrMess={this.props.promotions.errMess}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({ match }) => {
            const dishId = parseInt(match.params.dishId);
            return (
                <DishDetail
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.comments.errMess}
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
                    <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Route exact path='/aboutus' component={AboutPage} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));