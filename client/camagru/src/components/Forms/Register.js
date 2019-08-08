import React from 'react'
import {Link} from 'react-router-dom';
import Title from '../../utils/Title';
import {Form, Container, Button} from 'react-bootstrap';

import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {compose } from 'redux';

import * as actionCreators from '../actions/actionCreators';

class Register extends React.Component{

    handleSubmit = (formProps) => {
        
        this.props.signUp(formProps, () => {
        // redirect to page ask user to check inbox for email
            this.props.history.push('/confirm_email');

        //log user out => confirmation email to sign in

        });
        // console.log(formProps);
       
        
    }

    render(){

        return (
            <Container style={{width: '50%', marginTop:'100px'}}>
                <Title title="Register" />
                <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                    {/* <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Field className="form-control" name="username" type="text" component="input" placeholder="Enter username" autoComplete="none"/>
                    </Form.Group> */}
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        {/* <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/> */}
                        <Field className="form-control" name="email" type="email" component="input" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        {/* <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/> */}
                        <Field className="form-control" name="password" type="password" component="input" placeholder="Password"/>

                    </Form.Group>
                    {/* <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Field className="form-control" name="confirmpassword" type="password" component="input" placeholder="Confirm Password"/>

                    </Form.Group> */}
                    {this.props.errorMessage && 
                        <div className="text-danger d-flex justify-content-center">{this.props.errorMessage}</div>
                    }
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

const mapStateToProps = (state) =>{
    return {
        errorMessage: state.auth.errorMessage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (formProps, callback) => dispatch(actionCreators.signUp(formProps, callback)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({form: 'register'})
)(Register)
