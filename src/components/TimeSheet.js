import React from 'react';
import PropTypes from 'prop-types'
import { Button, Card, Checkbox, Form, Grid, Icon, Input, Label, TextArea, Segment, } from 'semantic-ui-react'
import InlineError from "./messages/InlineError";


const validateEmail=(e)=>{

}
const TimeSheet = ({ OnClear, OnNext, OnChange, Detail, errors, WorkType, SetWorkType }) => (
    <Form className="form-size ">
        <Form.Field   error={!!errors.Email}>
            <div className="curve-text-div">
                <input type="Email"
                    id="Email"
                    name="Email"
                    placeholder="jhay@example.com"
                    value={Detail.Email}
                    onChange={e => OnChange(e)}
                    className="text-destyle"
                />
                {
                   !errors.GoodEmail ? "" :(errors.GoodEmail==='Valid'?
                   <Icon name='checkmark' color='green' /> : <Icon name='remove' color='red' />)
                }
            </div>

            {errors.Email && <InlineError text={errors.Email} />}
        </Form.Field>
        <Form.Field error={!!errors.TimeSpent}>
            <div className="curve-text-div">
                <input
                    id="TimeSpent"
                    name="TimeSpent"
                    placeholder="Time : 12 hours 15 mins"
                    value={Detail.TimeSpent}
                    onChange={e => OnChange(e)}
                    className="text-destyle"
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
                    className="curve"
                />
            </div>

            {errors.Message && <InlineError text={errors.Message} />}
        </Form.Field>
        <div className="clear-header"><label> What type of work is this for?</label></div>
        <Form.Field error={!!errors.TypeOfWork}>
            <div >
                {
                    WorkType.length > 0 ? WorkType.map((f, i) => {
                        return (
                            <div className={i%2===0?"type-up":"type-down" }key={i}>
                                <label className={Detail.TypeOfWork === f?'labelClicked':''} name='TypeOfWork' id='TypeOfWork' onClick={e => { SetWorkType(f) }}>
                                    {f}
                                </label>
                                {
                                    Detail.TypeOfWork === f ? <Icon name='checkmark' className="space-icon-left" color='green' /> : ""
                                }
                            </div>
                        )
                    }) : " "
                }
            </div>

            {errors.TypeOfWork && <InlineError text={errors.TypeOfWork} />}
        </Form.Field>
       
        <Segment size='big' textAlign='center' inverted color='blue' className="clear-bottom">
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