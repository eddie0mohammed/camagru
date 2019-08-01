import React from 'react'
import Title from '../../utils/Title';
import {Form, Button, Container} from 'react-bootstrap';


const Settings = () => {
    return (
        <div>
            <Title title="Settings"/>

            <Container style={{width: '50%'}}>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" disabled/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" disabled/>
                </Form.Group>

                <div className="mt-5">
                    <h2>Change Password</h2>

                    <Form.Group>
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" placeholder="New Password" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm New Password" />
                    </Form.Group>
                    
                </div>

                <div className="mt-5">
                    <h3 >Notifications</h3>

                    <p className="pt-2 text-muted">Allow us to send you notifications via email</p>
                    
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="enable" name="choice"/>
                        <label className="form-check-label" >
                            Enable
                        </label>
                    </div>

                    <div className="form-check">                   
                        <input className="form-check-input" type="radio" value="disable" name="choice"/>
                        <label className="form-check-label" >
                            Disable
                        </label>
                    </div>
                
                </div>

                <div className="d-flex justify-content-end"> 
                    <Button variant="primary" type="submit">
                        SAVE
                    </Button>
                </div>

            </Form>
            </Container>
        </div>
    )
}

export default Settings
