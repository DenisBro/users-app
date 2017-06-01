import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from './Menu';
import Home from '../pages/Home';
import UserEdit from '../pages/UserEdit';
import NotFound from '../pages/NotFound';


export default class App extends React.Component{

  render(){
//console.log(this.props);
    return(
      <div className="container">
        <div className="row">
          <Menu/>
        </div>
        <div className="row">
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/user-edit' component={UserEdit} />
          <Route path='/user-edit/:id' component={UserEdit} />
          <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}
