import React from 'react';
import PropTypes from 'prop-types'
import {Button,Icon,Segment} from 'semantic-ui-react'

const Submission=({Email,Time,OnStartAgain})=>(
    <Segment textAlign='center' secondary color='grey'>
            <div   >
                <Icon name='checkmark' color='green' size='massive' /> 
            </div>
            <div >
                  Thank you <b>{Email}.</b>
            </div>
            <div >
                    You have logged {Time} of work today
            </div>
        <div>
                <div className="nopadding" size='big' textAlign='center' inverted color='blue'>
                        <Button onClick={e => { OnStartAgain(e) }}>Start Again</Button>
                </div>

        </div>
    </Segment>
)

Submission.propTypes = {
        OnStartAgain:PropTypes.func.isRequired,
    Email: PropTypes.string.isRequired,
    Time: PropTypes.string.isRequired,
}

export default Submission