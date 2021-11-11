import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

const Dashboard = () => {
    return (
        <div>

            <div className="home_content">

                <SideBar></SideBar>
                <div className="home_content m-3 border">
                    <h2>this is dashboard home</h2>
                    <Link to='/'>go back to home</Link>
                </div>



            </div>
        </div>
    );
};

export default Dashboard;