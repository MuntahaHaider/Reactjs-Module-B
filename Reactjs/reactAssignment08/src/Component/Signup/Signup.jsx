import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Signup = ({funcClick}) => {
  return (
   <>
    <Form>             
      <Form.Label >Username</Form.Label>
        <Form.Control className="mb-3" type="text" placeholder="Enter Username" />      
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="mb-3"  type="password" placeholder="Enter Password" />
      </Form.Group>
      <Button className="mb-3" variant="primary" type="submit">
        Signup
      </Button>
      <p>Already have an account?  <a onClick={funcClick} href="#">Login</a></p>
    </Form>
   </>
  )
}

export default Signup