import React from 'react'

import {connect} from 'react-redux';

const Picture = (props) => {

    return (
      
            <div className={`my-3 `} style={{width: '30%', height: " 250px", display: 'flex', justifyContent: 'center',
                alignItems: 'center', background: 'pink', cursor: 'pointer'}}
                onClick={props.clicked}
                >
                <div>
                    Picture
                </div>
                            
            </div>
      
    )
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated,
    }
}

export default connect(mapStateToProps)(Picture)


// ${props.authenticated ? 'show' : ''}