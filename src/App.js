import React from 'react';
import { Route, } from 'react-router-dom';
import Home from './containers/HomeContainer';


const App=()=>(
  <div className="ui container">
    <Route path="/" exact component={Home}/>
  </div>
  );
export default App;
