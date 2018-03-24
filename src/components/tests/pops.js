import React from 'react';
import {Form,Button} from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import InlineError from "../messages/InlineError";
import { ChatList,ChatItem,Popup } from 'react-chat-elements'
import { Link } from 'react-router-dom';


class Pops extends React.Component{

    state={
        data:{
            email:"",
            password:"",
        },
        loading:false,
        errors:{},
        show:true,
    }

    
    render(){
        return(
            <Popup
    show={this.state.show}
    header='Lorem ipsum dolor sit amet.'
    headerButtons={[{
        type: 'transparent',
        color:'black',
        text: 'close',
        onClick: () => {
            this.setState({show: false})
        }
    }]}
    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem animi veniam voluptas eius!'
    footerButtons={[{
        color:'white',
        backgroundColor:'#ff5e3e',
        text:"Vazgeç",
    },{
        color:'white',
        backgroundColor:'lightgreen',
        text:"Tamam",
    }]}/>
        );
    }

}


export default Pops;
