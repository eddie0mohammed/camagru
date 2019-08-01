import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap';


class PicturePage extends Component {
    render() {
        return (
            <div className="container bg-primary d-flex justify-content-between my-5">

                <div style={{width: '60%', margin: '10px'}}>
                    <div style={{height: '500px', background: 'pink', border: '1px solid black'}} className="d-flex justify-content-center align-items-center">
                        Picture
                    </div>

                    <div style={{background: 'green'}} className="d-flex justify-content-between px-3">
                        <div className="d-flex justify-content-start align-items-center" style={{color:'white'}}>
                            #Likes  
                        </div>
                        <div style={{width: '180px', padding: '10px'}} className="d-flex justify-content-between">
                            <Button style={{width: '70px'}} variant="secondary">
                                Like
                            </Button>  
                            <Button style={{width: '70px'}} variant="secondary">
                                Delete
                            </Button>  
                          
                        </div>
                    </div>
                </div>

                <div style={{width: '40%', margin: '10px', background: 'yellow'}}>
                    <div style={{height: '70%', border: '1px solid black', margin: '10px'}} className="d-flex justify-content-center align-items-center">
                        Comments
                    </div>
                    
                    <div style={{width: '90%', margin: '0 auto'}}>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            <div className="d-flex justify-content-end" style={{ padding:' 0 5px'}}>
                                <Button className="btn-sm" style={{width: '70px'}} variant="secondary" type="submit">
                                    Post
                                </Button> 
                            </div>
                        </Form>
                    </div>

                    <div className="d-flex justify-content-end" style={{ padding:' 0 5px', marginTop: '50px'}}>
                        <Button className="btn-sm" style={{width: '70px'}} variant="secondary"
                         onClick={() => this.props.history.push('/')}>
                            Back
                        </Button> 
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default PicturePage;