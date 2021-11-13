import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const history = useHistory();


    useEffect(() => {
        const url = 'https://quiet-reef-72973.herokuapp.com/orders/all'
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders]);


    const handleDelete = id => {

        const response = window.confirm("Are you sure to Delete");
        if (response) {
            const url = `https://quiet-reef-72973.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully');
                        const remaining = orders.filter(newOrders => newOrders._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    const handleUpdateStatus = id => {
        console.log(id)
        const response = window.confirm("Are you Shipped yet?");
        if (response) {
            const url = `https://quiet-reef-72973.herokuapp.com/orders/update/${id}`;
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Shipped Successfully');
                        const updating = [...orders];
                        setOrders(updating);
                    }

                })
        }

    }


    return (
        <div>
            <h2>All Orders</h2>

            <Table hover>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Address</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Delete</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {
                    orders.map(order => <tbody key={order._id} >
                        <tr>
                            <td>{order.userName}</td>
                            <td>{order.address}</td>
                            <td>{order.ProductName}</td>
                            <td>{order.price}</td>
                            <td><Button onClick={() => handleDelete(order._id)} className="btn-secondary">Delete</Button></td>
                            <td><Button onClick={() => handleUpdateStatus(order._id)} className="btn-light">{order.Status}</Button></td>
                        </tr>
                    </tbody>)
                }

            </Table>
        </div>
    );
};

export default AllOrders;