import React from 'react';
import { Link } from 'react-router-dom';
import DisplayForm from '../forms/DisplayForm';
import GridForm from '../forms/GridForm';

class ProfilePage extends React.Component{
    
    submit=data=>{
        console.log(data);
    }

    render(){
        return(
            <div>
            <h1>Profile Page</h1>
            <GridForm>
                <DisplayForm /> 
            </GridForm>
                {/* <Link to="/">Home</Link> */}
            </div>
        );
    }


}
export default ProfilePage;
