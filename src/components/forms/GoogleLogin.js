// import { Button } from 'semantic-ui-react'
// 
// const GooglelLogin=()=>{
//     <div>
//         <Button color='google plus' >
//             <Icon name={appcolor.google} /> Google Plus
//         </Button>
//     </div>
// }

import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import appcolor from '../../styles/coloration'

class Google extends React.Component{
 
  constructor (props, context) {
    super(props, context);
  }
 
  responseGoogle (googleUser) {
    console.log("gotten :" +JSON.stringify(googleUser.getAuthResponse()));
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
 
  render () {
    return (
      <div>
        <GoogleLogin socialId={this.props.ClientID}
                     className={appcolor.google}
                     scope={this.props.scope}
                     fetchBasicProfile={false}
                     responseHandler={this.props.responseGoogle}
                     buttonText="Google"/>
      </div>
    );
  }
 
}
 
export default Google;