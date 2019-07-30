import React from 'react'
import {Link} from 'react-router-dom';
import Title from '../../utils/Title';
import {Form, Container, Button} from 'react-bootstrap';

class ResetPassword extends React.Component{

    state = {
        email: ''
    }

    handleChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            email: ''
        })
    }

    render(){
        return (
            <Container style={{width: '50%', marginTop:'100px'}}>
                <Title title="Reset Password" />
                <div style={{margin: '30px', color: 'grey'}}>
                    Enter your email address. A link will be sent to the email address provided to reset your password
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </Form.Group>
                    
                    
                
                    <div className="d-flex justify-content-end">
                        <Button  variant="success" type="submit">
                            Send
                        </Button>
                    </div>
                </Form>
            
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: '60px'}}>
                    <Link to="/signin">Sign In</Link>
                </div> 

                <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: '10px'}}>
                    <Link to="/register">Register</Link>
                </div>   
            </Container>
        )
    }
}

export default ResetPassword
