import React from 'react'
import {Link} from 'react-router-dom';
import Title from '../../utils/Title';
import {Button} from 'react-bootstrap';

const SignIn_SignUp = () => {
    return (
        <div className="container mt-5" style={{border: '1px solid #333', marginBottom: '10px'}}>
            <div style={{ width: '50%', margin: '0 auto', paddingTop: '100px', textAlign: 'center'}}>
                <Title  title="Sign In / Register to View, Like and Comment on pictures"/>
            </div>

            <div style={{width: '50%', margin: '100px auto', display: 'flex', justifyContent: 'space-around'}}>
                <Link to="/signin">
                    <Button  variant="secondary btn-lg" style={{width: '120px'}}>
                        Sign In
                    </Button>
                </Link>

                <Link to="/register">
                    <Button  variant="secondary btn-lg" style={{width: '120px'}}>
                        Register
                    </Button>
                </Link>

            </div>

            <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '20px'}}>
                <Link to="/">
                    <Button  variant="secondary btn-sm">
                        Go Back
                    </Button>
                </Link>

            </div>
            
        </div>
    )
}

export default SignIn_SignUp
