import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import User from "../components/User"
import Year from "../components/Year"
import setYearAction from "../actions/actionYear"

import { connect } from "react-redux"

class Main extends Component {
    render() {
        return (
            <div>
                <User user={this.props.user}/>
                <Year year={this.props.year} setYear={this.props.setYearAction}/>
                <Link to="/about">Home</Link>
                <Link to="/app">Map</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userInfo.user,
        year: state.userInfo.year
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setYearAction: year => {
            dispatch(setYearAction(year))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);