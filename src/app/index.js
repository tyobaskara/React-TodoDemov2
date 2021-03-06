import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
require('./css/main.scss');
import {Router, Route, browserHistory, Link} from 'react-router';

//Module requires
import TodoComponent from './todocomponent';
import About from './about';

class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
        );
    }
};

//put component into html page
ReactDOM.render(<App />, appWrapper);