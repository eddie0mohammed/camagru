import React from 'react'
import Title from '../../utils/Title';
import Picture from '../../utils/Picture';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';



const MyProfile = (props) => {
    const handleClick = () => {
        //redirect to image page with proper image loaded
          props.history.push('/picture_page');
    }
    return (
        <div>
            <div className="d-flex justify-content-between" style={{width: '70%', margin: '0 auto'}}>
                <Title title="My Pictures"/>
                
                <div className="d-flex align-items-center">
                    <Link to='/settings'><Button className="btn-md" style={{width: '90px'}} variant="secondary" type="submit">
                        Settings
                    </Button> 
                    </Link>
                </div>

            </div>

          <div className="m-5 bg-primary d-flex justify-content-between flex-wrap" >
            <Picture clicked={handleClick}/>
            <Picture clicked={handleClick}/>
            <Picture clicked={handleClick}/>

            <Picture clicked={handleClick}/>
            <Picture clicked={handleClick}/>
            <Picture clicked={handleClick}/>

            <Picture clicked={handleClick}/>
            <Picture clicked={handleClick}/>
            <Picture clicked={handleClick}/>
            
            
          </div>
        </div>
    )
  }


export default MyProfile
