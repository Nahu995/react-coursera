import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export default class DishDetail extends React.Component {

    renderDish(dish){
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        let list = (<div></div>);
        if (comments != null) {
            list = (
                <ul className="list-unstyled">
                    {comments.map(comment => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {comment.date}</p>
                            </li>
                        );
                    })}
                </ul>
            );
        }

        return (
            <div>
                <h4>Comments</h4>
                {list}
            </div>
        );
    }
    render() {
        return (
            <div className="row">

                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>

                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish.comments)}
                </div>
            </div>
        );
    }
}