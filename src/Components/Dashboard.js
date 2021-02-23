import { Link } from 'react-router-dom';

const Dashboard = (props) => {
    
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to='/AddTodos'>
                <button type="button" className="btn btn-primary">
                    Todo
            </button>
            </Link>

            <Link to='/Forms'>
                <button type="button" className="btn btn-primary">
                    Forms
            </button>
            </Link>

            <Link to='/FetchUser'>
                <button type="button" className="btn btn-primary">
                    Fetchuser
            </button>
            </Link>

            <Link to='/Formikform'>
                <button type="button" className="btn btn-primary">
                    FormikForm
            </button>
            </Link>


            <button type="button" className="btn btn-danger">
                Logout
            </button>

        </div>
    )
}


export default Dashboard;