import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        console.log(user);
        fetch('https://quiet-reef-72973.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Creat Admin Successfully');
                }
            })


        e.preventDefault();

    }

    return (


        <div className="container mt-5">
            <h3 className="display-6">Provide Email to make Admin</h3>
            <form className="mx-5" onSubmit={handleAdminSubmit}>
                <input type="email" name="email" onBlur={handleOnBlur} required autofocus="" className="form-control rounded-pill border-2 shadow-sm px-4" />

                <br />
                <div className="d-grid gap-2 mt-2">
                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Make Admin</button>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;