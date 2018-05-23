import React from 'react';
import PropTypes from 'prop-types'
import { Button, Card, Checkbox, Form, Grid, Icon, Input, Label, TextArea, Segment, } from 'semantic-ui-react'
import InlineError from "./messages/InlineError";


const validateEmail=(e)=>{

}
const TimeSheet = ({ OnClear, OnNext, OnChange, Detail, errors, WorkType, SetWorkType }) => (
    <Form className={'frm-color'}>
        <Form.Field error={!!errors.Email}>
            <div >
                <input type="Email"
                    id="Email"
                    name="Email"
                    placeholder="jhay@example.com"
                    value={Detail.Email}
                    onChange={e => OnChange(e)}
                />
                {
                   !errors.GoodEmail ? "" :(errors.GoodEmail==='Valid'?
                   <Icon name='checkmark' color='green' /> : <Icon name='remove' color='red' />)
                }
            </div>

            {errors.Email && <InlineError text={errors.Email} />}
        </Form.Field>
        <Form.Field error={!!errors.TimeSpent}>
            <div >
                <input
                    id="TimeSpent"
                    name="TimeSpent"
                    placeholder="Time : 12 hours 15 mins"
                    value={Detail.TimeSpent}
                    onChange={e => OnChange(e)}
                />
                {
                   !errors.GoodTime ? "" :(errors.GoodTime==='Valid'?
                   <Icon name='checkmark' color='green' /> : <Icon name='remove' color='red' />)
                }
            </div>

            {errors.TimeSpent && <InlineError text={errors.TimeSpent} />}
        </Form.Field>
        <Form.Field error={!!errors.Message}>
            <div >
                <textarea
                    id="Message"
                    name="Message"
                    placeholder="Message (optional): "
                    value={Detail.Message}
                    onChange={e => OnChange(e)}
                />
            </div>

            {errors.Message && <InlineError text={errors.Message} />}
        </Form.Field>
        <div><label> What type of work is this for?</label></div>
        <Form.Field error={!!errors.TypeOfWork}>
            <div >
                {
                    WorkType.length > 0 ? WorkType.map((f, i) => {
                        return (
                            <div key={i}>
                                <label className={Detail.TypeOfWork === f?'labelClicked':''} name='TypeOfWork' id='TypeOfWork' onClick={e => { SetWorkType(f) }}>
                                    {f}
                                </label>
                                {
                                    Detail.TypeOfWork === f ? <Icon name='checkmark' color='green' /> : ""
                                }
                            </div>
                        )
                    }) : " "
                }
            </div>

            {errors.TypeOfWork && <InlineError text={errors.TypeOfWork} />}
        </Form.Field>
       
        <Segment size='big' textAlign='center' inverted color='blue'>
            <Button onClick={e => { OnClear(e) }}><b>Clear</b></Button>
            <Button onClick={e => { OnNext(e) }}><b>Next</b></Button>
        </Segment>
    </Form>


)

TimeSheet.propTypes = {
    OnClear: PropTypes.func.isRequired,
    OnNext: PropTypes.func.isRequired,
    OnChange: PropTypes.func.isRequired,
}

export default TimeSheet