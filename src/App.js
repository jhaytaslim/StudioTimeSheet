import React from 'react';
import { Route,Link } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Loginpage from './components/pages/Loginpage';
import ProfilePage from './components/pages/ProfilePage';
import RegisterPage from './components/pages/RegisterPage';
import ChatPage from './components/tests/test';
import PopPage from './components/tests/pops';
import 'react-chat-elements/dist/main.css';

const App=()=>(
  <div className="ui container">
    {/* <div>
      <Link to="/Chat">Chat</Link><span><pre> </pre></span>
      <Link to="/Pop">Pop</Link>
    </div> */}
    <Route path="/" exact component={Homepage}/>
    <Route path="/login" exact component={Loginpage}/>
    <Route path="/signup" exact component={RegisterPage}/>
    <Route path="/Chat" exact component={ChatPage}/>
    <Route path="/Pop" exact component={PopPage}/>
    <Route path="/Profile" exact component={ProfilePage}/>
  </div>
  );
export default App;
