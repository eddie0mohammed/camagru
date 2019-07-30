import React from 'react'
import Title from '../../utils/Title';
import Picture from '../../utils/Picture';

const Main = () => {
    return (
        <div>
          <Title title="Gallery"/>

          <div className="m-5 bg-primary d-flex justify-content-between flex-wrap" >
            <Picture />
            <Picture />
            <Picture />

            <Picture />
            <Picture />
            <Picture />
            
            <Picture />
            <Picture />
            <Picture />
            

            
            
          </div>
        </div>
    )
}

export default Main
