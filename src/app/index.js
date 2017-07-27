import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
require('./css/index.scss');
import {Router, Route, browserHistory, Link} from 'react-router';

//Module requires
import TodoItem from './todoitem';
import AddItem from './additem';
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

//Create component
class TodoComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
        }
    }
    render(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(
                <TodoItem item={item} key={index} onDelete={this.onDelete.bind(this)}/>
            )
        }.bind(this));
        return (
            <div id="todo-list">
                <Helmet>
                    <title>To Do List</title>
                </Helmet>
                <Link to={'/about'}>About</Link>
                <p>The busies people have the most leisure...</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd.bind(this)}/>
            </div>
        );
    }// render

    //onDelete
    onDelete(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            console.log(item, val);
            return item !== val;
        });
        this.setState({
            todos: updatedTodos
        });

    }

    //onAdd
    onAdd(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    }

    //lifecycle function
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
};


//put component into html page
ReactDOM.render(<App />, appWrapper);