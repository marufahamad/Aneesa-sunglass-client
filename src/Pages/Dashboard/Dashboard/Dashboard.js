import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h3>this is Dashboard</h3>

            <Link to='/'>go back to home</Link>
        </div>
    );
};

export default Dashboard;