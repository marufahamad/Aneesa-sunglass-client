import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const { user } = useAuth()

    useEffect(() => {
        const url = 'https://quiet-reef-72973.herokuapp.com/products'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handleDelete = id => {

        const response = window.confirm("Are you sure to Delete");
        if (response) {
            const url = `https://quiet-reef-72973.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully');
                        const remaining = products.filter(newOrders => newOrders._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <h2>Manage Products</h2>

            <Table hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {
                    products.map(products => <tbody key={products._id} >
                        <tr>
                            <td>{products.name}</td>
                            <td>{products.price}</td>
                            <td><Button onClick={() => handleDelete(products._id)} className="">Delete</Button></td>
                        </tr>
                    </tbody>)
                }

            </Table>
        </div>
    );
};

export default ManageProducts;