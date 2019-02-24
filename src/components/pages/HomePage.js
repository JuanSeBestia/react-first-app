import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name}></CardImg>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function HomePage(props) {

    return (
        <div className="container">
            <div className="row aling-items-start">
                <div className="col-12 col-md m1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    )

}

export default HomePage;