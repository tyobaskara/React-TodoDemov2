import React from 'react';
require('./css/todoItem.scss');

//Create TodoItem Component
export default class TodoItem extends React.Component{
    render(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        )
    }

    //handleDelete
    handleDelete(){
        this.props.onDelete(this.props.item)
    }
};

export default TodoItem;