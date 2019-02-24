import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroupItem, ListGroup } from 'reactstrap';

function RenderDish({ dish }) {
    if (dish != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    else return (<div></div>)
}

function RenderComments({ comments }) {
    const array_comments = comments.map((comment) => {
        return (
            <ListGroupItem key={comment.id} >
                <p>{comment.comment}</p>
                <p>--{comment.user}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(comment.date)}</p>
            </ListGroupItem>

        );
    });
    return (
        <div className="col-12 col-md-5 m-1">
            <ListGroup>
                <ListGroupItem active>
                    <h4>Comments</h4>
                </ListGroupItem>
                {/* LIST OF COMMENTS */}
                {array_comments}
            </ListGroup>
        </div>
    )
}

function DishDetail(props) {
    return (
        <div className="container">
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.comments} />
            </div>
        </div>
    )
}

export default DishDetail 