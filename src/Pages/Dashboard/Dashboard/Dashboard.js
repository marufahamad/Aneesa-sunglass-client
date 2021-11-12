import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddAProduct from '../AddAProduct/AddAProduct';
import AllOrders from '../AllOrders/AllOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import PayNow from '../PayNow/PayNow';
import Review from '../Review/Review';
import SideBar from '../SideBar/SideBar';

const Dashboard = () => {

    let { path, url } = useRouteMatch();
    return (
        <div>

            <div className="home_content">
                <SideBar url={url}></SideBar>
                <Switch>
                    <Route exact path={`${path}`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/payNow`}>
                        <PayNow></PayNow>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/allOrders`}>
                        <AllOrders></AllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddAProduct></AddAProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>
            </div>
            <Link style={{ position: "fixed", right: "5px", bottom: "5px" }} to='/'>Back to home</Link>
        </div>
    );
};

export default Dashboard;