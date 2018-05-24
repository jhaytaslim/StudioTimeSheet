import React from 'react';
import PropTypes from 'prop-types'
import {Button,Icon,Segment} from 'semantic-ui-react'

const Submission=({Email,Time,OnStartAgain})=>(
    <Segment className="seg-size" textAlign='center' secondary >
            <div  className="set-div" >
                <Icon name='checkmark' color='green' size='massive' /> 
            </div>
            <div className="set-div">
                  Thank you <b>{Email}.</b>
            </div>
            <div className="set-div">
                    You have logged {Time} of work today
            </div>
        <div>
                {/* <div className="nopadding" size='big' textAlign='center' inverted color='blue'>
                        <Button onClick={e => { OnStartAgain(e) }}>Start Again</Button>
                </div> */}
            <Segment size='big' textAlign='center' inverted color='blue'>
                {/* <Button onClick={e => { OnClear(e) }}><b>Clear</b></Button> */}
                <Button onClick={e => { OnStartAgain(e) }}><b>Start Again</b></Button>
            </Segment>
        </div>
    </Segment>
)

Submission.propTypes = {
        OnStartAgain:PropTypes.func.isRequired,
    Email: PropTypes.string.isRequired,
    Time: PropTypes.string.isRequired,
}

export default Submission