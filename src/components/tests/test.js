import React from 'react';
import { ChatList,ChatItem, } from 'react-chat-elements'
import { Link } from 'react-router-dom';

const Chat=()=>(<div>
    <div>
      <Link to="/login">Login</Link>
    </div>
    <ChatList
   className='chat-list'
   dataSource={[
       {
           avatar: 'https://facebook.github.io/react/img/logo.svg',
           alt: 'Reactjs',
           title: 'Facebook',
           subtitle: 'What are you doing?',
           date: new Date(),
           unread: 0,
       },
       {
        avatar: 'https://facebook.github.io/react/img/logo.svg',
        alt: 'Reactjs',
        title: 'Google',
        subtitle: 'What are you doing?',
        date: new Date(),
        unread: 0,
    },
   ]} /></div>);

   export default Chat;