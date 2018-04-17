import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <h2>Welcome to the React {this.props.user}</h2>
        );
    }
}