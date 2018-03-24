import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import {SignUpLink} from '../forms/RegisterForm';
import Google from '../forms/GoogleLogin';
import utils from "../db/utils";
class Loginpage extends React.Component{
    
    submit=data=>{
        console.log(data);
    }
    responseGoogle (googleUser) {
        //console.log("gotten :" +JSON.stringify(googleUser.getAuthResponse()));
        var User=googleUser;
        console.log("User : "+User);
        var authUser=googleUser.getAuthResponse();
        console.log("authUser : "+authUser);
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("gotten");
        var googleId = googleUser.getId();
        
        console.log({ googleId });
        console.log({accessToken: id_token});
        //anything else you want to do(save to localStorage)...
    }

    render(){
        return(
            <div>
            <h1>Login Page</h1>
                <div className="ui row">
                    <Google ClientID={utils.ClientID} scope="profile"
                            responseGoogle={this.responseGoogle} />
                </div>
                <LoginForm submit={this.submit}/>
                <div><SignUpLink/></div>
                {/* <Link to="/">Home</Link> */}
            </div>
        );
    }


}
export default Loginpage;
