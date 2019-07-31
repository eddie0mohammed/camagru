import React from 'react'
import {Link} from 'react-router-dom';
import Title from '../../utils/Title';
import {Button} from 'react-bootstrap';


const ConfirmEmailPage = () => {
    return (
        <div className="container mt-5" style={{border: '1px solid #333', marginBottom: '10px'}}>
            <div style={{ width: '50%', margin: '0 auto', paddingTop: '100px', textAlign: 'center'}}>
                <Title  title="A confirmation link has been sent. Please confirm your email."/>
            </div>

            <div style={{width: '50%', margin: '100px auto', display: 'flex', justifyContent: 'space-around'}}>
                <Link to="/">
                    <Button  variant="secondary btn-lg" style={{width: '120px'}}>
                        Home
                    </Button>
                </Link>

            </div>
        </div>
    )
}

export default ConfirmEmailPage
