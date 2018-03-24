import React from 'react';
import { Link ,withRouter,} from 'react-router-dom';
import RegisterForm from '../forms/RegisterForm';
import { auth } from '../db';

class Registerpage extends React.Component{
    
    state={
        User:{},
        error:{},
    }
    
    submit=data=>{
        console.log(data);
        auth.doCreateUserWithEmailAndPassword(data.email, data.password)
        .then(authUser => {
            this.setState(() => ({ User: authUser}));
            this.props.history.push("/profile");
            console.log(JSON.stringify(this.state.User));
        })
        .catch(error => {
            this.setState(() => ({ error }));
            console.log(JSON.stringify(this.state.error));
        });

        //this.preventDefault();

    }

    render(){
        return(
            <div>
            <h1>Register Page</h1>
                
                <RegisterForm submit={this.submit} class=""/>
                {/* <Link to="/">Home</Link> */}
            </div>
        );
    }


}
export default withRouter(Registerpage);
