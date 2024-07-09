import React from 'react';
const SignupForm = () => {
    return (
        <form className="form">
            <h2>Signup</h2>
            <label>Username</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Password</label>
            <input type="password" />
            <button type="submit">Signup</button>
        </form>
    );
};
export default SignupForm;
