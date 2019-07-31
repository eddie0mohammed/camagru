import React from 'react'
import Title from '../../utils/Title';
import Picture from '../../utils/Picture';

import {connect} from 'react-redux';

class Main extends React.Component{


  handleClick = () => {
    if (this.props.authenticated){
      //redirect to image page (LOGGED IN)
    }
    else{
      this.props.history.push('/not_auth');
    }
  }

    render(){
      return (
          <div>
            <Title title="Gallery"/>

            <div className="m-5 bg-primary d-flex justify-content-between flex-wrap" >
              <Picture clicked={this.handleClick}/>
              <Picture clicked={this.handleClick}/>
              <Picture clicked={this.handleClick}/>

              <Picture clicked={this.handleClick}/>
              <Picture clicked={this.handleClick}/>
              <Picture clicked={this.handleClick}/>

              <Picture clicked={this.handleClick}/>
              <Picture clicked={this.handleClick}/>
              <Picture clicked={this.handleClick}/>
              
              
            </div>
          </div>
      )
    }
}

const mapStateToProps = (state) => {
  return{
    authenticated: state.auth.authenticated,
  }
}

export default connect(mapStateToProps)(Main);
