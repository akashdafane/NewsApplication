import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return(
    <>
    <h1>Dashboard</h1>

    <Link to="/compA"><button type="button" className="btn btn-primary">CompA</button> </Link>
    <Link to="/home"><button type="button" className="btn btn-primary">Home</button></Link>
    <Link to="/index"><button type="button" className="btn btn-primary">Index</button></Link>
    <Link to="/compB"><button type="button" className="btn btn-primary">CompB</button></Link>

    </>

  )
}

export default Dashboard