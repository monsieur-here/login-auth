import { useContext, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuthContext from '../components/AuthContext';

function Login() {

    const email = useRef("")
    const password = useRef("")
    const {login} = useContext(AuthContext)

    const loginSubmit = async() => {
        let payload = {
            email: email.current.value,
            password: password.current.value
        }
        await login(payload)
    }

  return (
    <>
    <Container>
        <Row>
            <Col className='mt-2'>
                <legend>Login Form</legend>
                <form>
                    {/* <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter username" />
                    </Form.Group> */}

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter username" ref={email}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={password}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" ref={loginSubmit} >
                        Submit
                    </Button>
                </form>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Login
