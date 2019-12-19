import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import List from '../pages/List/List'
import Detail from '../pages/Detail/Detail'

class App extends Component {
    render(){
        return (
            <Router>
                <Route key="/" exact path="/" component={Home} />
                <Route key="/list" exact path="/list" component={List} />
                <Route key="/detail" exact path="/detail" component={Detail} />
            </Router>
        );
    }
}

export default App;