import React from 'react'
import {Link} from 'react-router-dom';
import Title from '../../utils/Title';
import {Button} from 'react-bootstrap';

const ErrorPage = () => {
    return (
        <div className="container mt-5" style={{border: '1px solid #333', marginBottom: '10px'}}>
        <div style={{ width: '50%', margin: '0 auto', paddingTop: '100px', textAlign: 'center'}}>
            <Title title="404" />
            <Title  title="Page Not Found"/>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '100px'}}>
            <Link to="/">
                <Button  variant="secondary btn-large">
                    Go Back
                </Button>
            </Link>

        </div>
        
    </div>
    )
}

export default ErrorPage
