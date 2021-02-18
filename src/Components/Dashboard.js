import react from 'react';
import AddTodos from './AddTodos';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {

    return (
        <div>
            <h1>Dashboard</h1>
            <Link to = '/AddTodos'>
            <button type="button" className="btn btn-primary">
                Todo
            </button>
            </Link>

            <Link to = '/Forms'>
            <button type="button" className="btn btn-primary">
                Forms
            </button>
            </Link>

        </div>
    )
}


export default Dashboard;