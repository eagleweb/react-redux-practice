import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Main from './Main'
import About from './About'
import AppMap from './map/AppMap'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducers from '../reducers/rootReducer'

const store = createStore(rootReducers);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={Main} />
                        <Route path='/about' component={About} />
                        <Route path='/app' component={AppMap} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}