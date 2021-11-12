import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth()

    useEffect(() => {
        const url = 'http://localhost:5000/orders/all'
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);


    const handleDelete = id => {

        const response = window.confirm("Are you sure to Delete");
        if (response) {
            const url = `http://localhost:5000/orders/${id}`;
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


    return (
        <div>
            <h2>My Orders</h2>

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
                            <td><Button onClick={() => handleDelete(order._id)} className="">Delete</Button></td>
                            <td><Button className="">Status</Button></td>
                        </tr>
                    </tbody>)
                }

            </Table>
        </div>
    );
};

export default AllOrders;