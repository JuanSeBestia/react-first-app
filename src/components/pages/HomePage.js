import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { Loading } from '../tools/LoadingComponent';
import { baseUrl } from '../../shared/baseURL';
import { FadeTransform } from 'react-animation-components';

function RenderCard({ item, isLoading, errMess }) {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else if (item)
        return (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    {item.image ? <CardImg src={baseUrl + item.image} alt={item.name} /> : null}
                    {item.thumbnail ? <CardImg src={item.thumbnail} alt={item.name} /> : null}
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    return (<></>)
}

function HomePage(props) {
    return (
        <div className="container">
            <div className="row aling-items-start">
                <div className="col-12 col-md m1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishErrMess} />
                </div>
                <div className="col-12 col-md m1">
                    <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
                </div>
                <div className="col-12 col-md m1">
                    <RenderCard item={props.leader} />
                </div>
                <div className="col-12 col-md m1">
                    <RenderCard item={props.character} />
                </div>
            </div>
        </div>
    )

}

export default HomePage;