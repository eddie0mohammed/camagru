import React from 'react'
// import {Link} from 'react-router-dom';
import Title from '../../utils/Title';
import {Form, Container, Button} from 'react-bootstrap';

class ConfirmReset extends React.Component{

    state = {
        password: '',
        confirmPassword: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            password: '',
            confirmPassword: ''
        })
    }

    render(){
        return (
            <Container style={{width: '50%', marginTop:'100px'}}>
                <Title title="New Password" />
                <Form onSubmit={this.handleSubmit}>
                    
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

                
            </Container>
        )
    }
}

export default ConfirmReset