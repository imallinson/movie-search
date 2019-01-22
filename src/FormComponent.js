import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmName: ""
        }
    }

    handleChange = (valueName) => (event) => this.setState({
        [valueName]: event.target.value
    })

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    
    }

    render() {
        return (
            <Col xs={12}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="enter film name" name="filmName" value={this.state.filmName} onChange={this.handleChange("filmName")} /><br />
                    <button type="submit">Search</button>
                </form>
            </Col>
        );
    }
}

export default FormComponent;