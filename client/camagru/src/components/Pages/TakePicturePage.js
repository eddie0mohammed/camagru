import React from 'react'
import Title from '../../utils/Title';
import {Button} from 'react-bootstrap';

const TakePicturePage = () => {
    return (
        <div className="d-flex" style={{margin: '20px'}}>
            <div className="bg-primary" style={{width: '60%', height: '80vh'}}>
                <Title title="Preview"/>
                <div style={{width: '80%', height: '400px', background: 'pink', margin: '0 auto'}}>
                    PICTURE
                </div>

                <div style={{width: '80%', margin: '50px auto'}} className="d-flex justify-content-between">
                    <Button className="btn-md" style={{width: '90px'}} variant="secondary" type="submit">
                        Preview
                    </Button>
                    <Button className="btn-md" style={{width: '90px'}} variant="secondary" type="submit">
                        Snap
                    </Button>
                    <Button className="btn-md" style={{width: '90px'}} variant="secondary" type="submit">
                        Filters
                    </Button>
                    <Button className="btn-md" style={{width: '90px'}} variant="secondary" type="submit">
                        Save
                    </Button> 
                </div>
            </div>
            <div className="bg-danger" style={{width: '40%'}}>
                <Title title="Upload a picture"/>

                <div style={{width: '80%',height: '70px', background: 'yellow', margin: '50px auto 10px'}}>
                    CHOOSE FILE
                </div>

                <div style={{width: '80%', margin: '0 auto'}} className="d-flex justify-content-end">
                    <Button className="btn-md" style={{width: '90px'}} variant="secondary" type="submit">
                        UPLOAD
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TakePicturePage
