import React, { Component } from 'react';

import plusAction from '../actions/plusCount'

import { connect } from "react-redux"

class About extends Component {
    constructor(props){
        super(props);
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick(){
        return this.props.plusAction()
    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <span>{this.props.count}</span>
                <button onClick={this.onBtnClick}>+</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.changeCount.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        plusAction: () => dispatch(plusAction())
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (About)