import React from 'react';
import { Route, } from 'react-router-dom';
import Home from './containers/HomeContainer';
import {Grid} from 'semantic-ui-react';

const App=()=>(
  <div >
    <Route path="/" exact component={Home}/>
  </div>
  );
export default App;
