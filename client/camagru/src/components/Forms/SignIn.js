import React from 'react'
import {Link} from 'react-router-dom';
import Title from '../../utils/Title';
import {Form, Container, Button} from 'react-bootstrap';

import * as actionCreators from '../actions/actionCreators';

import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {compose } from 'redux';

import {signInWithGoogle} from '../../config/firebase';

class SignIn extends React.Component {
    

    handleSubmit = (formProps) => {
        this.props.signIn(formProps, () => {
        //redirect to homepage with user logged in
            this.props.history.push('/');

        });
    }

    render(){

        return (
            <Container style={{width: '50%', marginTop:'100px'}}>
                <Title title="Sign In" />
                <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
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
                    {this.props.errorMessage && 
                        <div className="text-danger d-flex justify-content-center">{this.props.errorMessage}</div>
                    }
                
                    <div className="d-flex justify-content-end">
                        <Button className="mx-2" variant="primary" onClick={signInWithGoogle}>
                            Sign In With Google
                        </Button>
                        <Button className="mx-2" variant="success" type="submit">
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

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn : (formProps, callback) => dispatch(actionCreators.signIn(formProps, callback)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({form: 'signin'})
)(SignIn)
