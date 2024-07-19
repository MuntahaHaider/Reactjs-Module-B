import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Login({funcClick}) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="mb-3" type="password" placeholder="Enter Password" />
      </Form.Group>
      <Button className="mb-3" variant="primary" type="submit">
        Login
      </Button>
      <p>Don't have an account?  <a onClick={funcClick} href="#">Signup</a></p>
    </Form>    
  );
}

export default Login;











// const LoginForm = () => {
//     return (
//          <>
//          {/* <form className="form">
//             <h2>Login</h2>
//             <label>Username:</label>
//             <input type="text"/>
//             <label>Password</label>
//             <input type="password" />
//             <button type='submit'>Login</button>
//          </form> */}




//          </>
//     );
// };
// export default LoginForm;