import React from 'react'
import {Link} from 'react-router-dom';
import {Navbar, ButtonToolbar, Button} from 'react-bootstrap';

import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

const Nav = (props) => {
    return (
        <Navbar expand="lg" variant="light" bg="dark">
            <Navbar.Brand style={{color: 'white', width: '15%', textAlign: 'center'}}><Link style={{color: 'white', textDecoration: 'none'}} to='/'>LOGO</Link></Navbar.Brand>
            <div style={{width:'85%'}}>
                <ButtonToolbar className="d-flex justify-content-between">
                    <div>
                        <Link to='/'><Button variant="secondary">HOME</Button></Link>
                    </div>
                    {props.authenticated && 
                        <div>
                        <Link to='/snap_page'><Button variant="secondary">TAKE / UPLOAD PICTURE</Button></Link>
                        </div>
                    }
                    <div >
                        {!props.authenticated ? 
                            <React.Fragment>
                                <Link to="/signin"><Button variant="secondary" className="mx-1">SIGN IN</Button></Link>
                                <Link to="/register"><Button variant="secondary" className="mx-1">REGISTER</Button></Link>
                                <Button variant="secondary" className="mx-1" onClick={props.authIn}>AUTH_IN</Button>
                            </React.Fragment>
                            :
                            <React.Fragment>
                               <Link to="/myprofile"><Button variant="secondary" className="mx-1">MY PROFILE</Button></Link>
                                <Button variant="secondary" className="mx-1">LOGOUT</Button>
                                <Button variant="secondary" className="mx-1" onClick={props.authOut}>AUTH_OUT</Button>
                            </React.Fragment>

                        }
                    </div>
                </ButtonToolbar>
            </div>
        </Navbar>

    )
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authIn: () => dispatch(actionCreators.authIn()),
        authOut: () => dispatch(actionCreators.authOut()),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
