import React from 'react'
import {Link} from 'react-router-dom';
import Title from '../../utils/Title';
import {Form, Container, Button} from 'react-bootstrap';

class Register extends React.Component{

    state = {
        username:'',
        email: '',
        password: '',
        confirmPassword: ''
    }

    resetState = () => {
        this.setState({
            username:'',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.resetState();
        
    }

    render(){

        return (
            <Container style={{width: '50%', marginTop:'100px'}}>
                <Title title="Register" />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name="username" value={this.state.username} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}/>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button  variant="success" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>

                <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: '60px'}}>
                    <Link to="/signin">Already have an account? Sign In</Link>
                </div>   
            </Container>
        )
    }
}

export default Register
