import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';

class Loginpage extends React.Component{
    
    submit=data=>{
        console.log(data);
    }

    render(){
        return(
            <div>
            <h1>Login Page</h1>
        
                <LoginForm submit={this.submit}/>
                {/* <Link to="/">Home</Link> */}
            </div>
        );
    }


}
export default Loginpage;
