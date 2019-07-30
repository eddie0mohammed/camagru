import React from 'react'
import {Link} from 'react-router-dom';
import {Navbar, ButtonToolbar, Button} from 'react-bootstrap';

const Nav = () => {
    return (
        <Navbar expand="lg" variant="light" bg="dark">
            <Navbar.Brand style={{color: 'white', width: '15%', textAlign: 'center'}}><Link style={{color: 'white', textDecoration: 'none'}} to='/'>LOGO</Link></Navbar.Brand>
            <div style={{width:'85%'}}>
                <ButtonToolbar className="d-flex justify-content-between">
                    <div>
                        <Link to='/'><Button variant="secondary">HOME</Button></Link>
                    </div>
                    <div >
                        <Link to="/signin"><Button variant="secondary" className="mx-1">SIGN IN</Button></Link>
                        <Link to="/register"><Button variant="secondary" className="mx-1">REGISTER</Button></Link>
                    </div>
                </ButtonToolbar>
            </div>
        </Navbar>

    )
}

export default Nav
