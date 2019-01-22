import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class ResultComponent extends Component {
    render() {
        if (this.props.data.length !== 0) {
            let films = JSON.parse(this.props.data);
            console.log(films);
            let output = [];
            output = films.Search.map((element, id) => {
                return (
                    <Row key={id}>
                        <Col xs={6}>
                            <img src={element.Poster} alt="poster"></img>
                        </Col>
                        <Col xs={6}>
                            <h2>{element.Title}</h2>
                            <h3>Year: {element.Year}</h3>
                        </Col>
                    </Row>
                );
            }
            );
            return (
                <div>
                    {output}
                </div>
            )
        }
        return (
            <div>

            </div>
        )
    }
}

export default ResultComponent;