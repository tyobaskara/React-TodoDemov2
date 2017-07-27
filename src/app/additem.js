import React from 'react';
require('./css/additem.scss')

export default class AddItem extends React.Components{
    render(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add Some.." required ref="newItem"/>
                <input type="submit" value="Add" />
            </form>
        )
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.refs.newItem.value);
        var value = this.refs.newItem.value;
        this.props.onAdd(value);

        this.refs.newItem.value = '';

    }
};

export default AddItem;