import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroupItem, ListGroup } from 'reactstrap';
import { COMMETNS } from '../../shared/dishes';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: COMMETNS
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments()}
                    </div>
                </div>
            </div>

        )
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments() {
        const comments = this.state.comments.map((comment) => {
            return (
                <ListGroupItem key={comment.id} >
                    <p>{comment.comment}</p>
                    <p>--{comment.user}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(comment.date)}</p>
                </ListGroupItem>

            );
        });
        return (
            <ListGroup>
                <ListGroupItem active>
                    <h4>Comments</h4>
                </ListGroupItem>
                {/* LIST OF COMMENTS */}
                {comments}
            </ListGroup>
        )
    }
}

export default DishDetail 