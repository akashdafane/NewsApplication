import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todoActionType'
import PropsTypes from 'prop-types';
import todos from '../reducers/todos';

const ListTodos = () => {
    return (
        <div>
            <ul>
                {PropsTypes.todos.map((todo, index) => (
                    <li key={index}>
                        {todo.message}{" "}<button onClick={() => todos.dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.data
})

export default connect(mapStateToProps)(ListTodos);