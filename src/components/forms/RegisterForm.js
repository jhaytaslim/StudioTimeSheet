import React from 'react';
import {Form,Button} from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import InlineError from "../messages/InlineError";
import {Link} from 'react-router-dom';
import appcolor from '../../styles/coloration'
class RegisterForm extends React.Component{

    state={
        data:{
            fullName:"",
            email:"",
            password:"",
            confirmpassword:"",
        },
        loading:false,
        errors:{},
    }

    onChange=e=>
        this.setState({
            data:{...this.state.data,[e.target.name]:e.target.value}
    });

    onSubmit=()=>{
        const errors=this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length===0){
            this.props.submit(this.state.data);
        }
    }

    validate=data=>{
        const errors={};
        if(Validator.isEmpty(data.fullName)) errors.fullName="Name can't be blank";
        if(Validator.isEmpty(data.email)) errors.email="Email can't be blank";   
        if(!Validator.isEmail(data.email)) errors.email="Invalid email";
        if(!data.password) errors.password="Password can't be blank";
        if(!data.confirmpassword) errors.confirmpassword="Please Confirm Your Password";
        if(data.confirmpassword.length!==data.password.length) errors.confirmpassword="Passwords must match";
        
        return errors;
    }

    render(){
        const {data,errors}=this.state;
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.fullName}>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" 
                            id="fullName" 
                            name="fullName"
                            placeholder="jhay tee"
                            value={data.fullName}
                            onChange={this.onChange}
                    /> 
                    {errors.email && <InlineError text={errors.fullName}/>}
                </Form.Field>
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                            id="email" 
                            name="email"
                            placeholder="jhay@example.com"
                            value={data.email}
                            onChange={this.onChange}
                    /> 
                    {errors.email && <InlineError text={errors.email}/>}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                            id="password" 
                            name="password"
                            placeholder="make it secure"
                            value={data.password}
                            onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password}/>} 
                </Form.Field>
                <Form.Field error={!!errors.confirmpassword}>
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type="password" 
                            id="confirmpassword" 
                            name="confirmpassword"
                            placeholder="make it secure"
                            value={data.confirmpassword}
                            onChange={this.onChange}
                    />
                    {errors.confirmpassword && <InlineError text={errors.confirmpassword}/>} 
                </Form.Field>
                <Button  color={appcolor.button}>Login</Button>
            </Form>
        );
    }

}

RegisterForm.propTypes={
    submit:PropTypes.func.isRequired
}

export default RegisterForm;

export const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to="/signup">Sign Up</Link>
  </p>

