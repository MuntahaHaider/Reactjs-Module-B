import React from 'react';
const LoginForm = () => {
    return (
         <>
         <form className="form">
            <h2>Login</h2>
            <label>Username:</label>
            <input type="text"/>
            <label>Password</label>
            <input type="password" />
            <button type='submit'>Login</button>
         </form>
         </>
    );
};
export default LoginForm;
