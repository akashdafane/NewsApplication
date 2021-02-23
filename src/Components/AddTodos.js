import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActionType';
import { Link } from 'react-router-dom';

const AddTodos = (props) => {
    const [userInput, setUserInput] = useState({ userInput: '' })
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.dispatch(addTodo(userInput.userInput));

        }}>
            <input type='text'
                className="form-control"
                value={userInput.userInput}
                onChange={e => setUserInput({ userInput: e.target.value })}
            />
            <button className="btn btn-primary">Submit</button>
            <Link to='/ListTodos'>
                <button className="btn btn-info">ListTodos</button>
            </Link>
            <Link to='/Dashboard'>
                <button className="btn btn-primary">Dashboard</button>
            </Link>
        </form>
    )
}

export default connect()(AddTodos) 
