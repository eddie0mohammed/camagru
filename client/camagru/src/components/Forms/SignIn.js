import React from 'react'
import {Link} from 'react-router-dom';
import Title from '../../utils/Title';
import {Form, Container, Button} from 'react-bootstrap';

class SignIn extends React.Component {
    
    state = {
        email: '',
        password: ''
    }
    
    resetState = () => {
        this.setState({
            email: '',
            password: ''
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
                <Title title="Sign In" />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </Form.Group>
                    
                
                    <div className="d-flex justify-content-end">
                        <Button  variant="success" type="submit">
                            Sign In
                        </Button>
                    </div>
                </Form>

                <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: '60px'}}>
                    <Link to="/reset_password">Forgot your password?</Link>
                </div> 

                <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: '10px'}}>
                    <Link to="/register">Register</Link>
                </div>   
            </Container>
        )
    }
}

export default SignIn
