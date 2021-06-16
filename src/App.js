import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Index from './components/Index';
import Main from './components/Main.jsx';
import New from './components/New.jsx'
import { Route, Switch } from "react-router-dom";
//import Cards from './components/Cards';

export default function App() {
  
  return (
    <div >
        <CssBaseline />
         <Switch>
            <Route path = "/" exact component = {Index} />
            <Route path = "/main" component = {Main} />
            <Route path = "/new" component = {New} />
         </Switch>
    </div>
  );
}
