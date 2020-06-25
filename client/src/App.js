import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Home from './pages/Home/home';
import Activity from './pages/Activity/activity';
import Group from './pages/Group/group';
import createGroup from './pages/Group/createGroup';
import GroupListing from './pages/Group/groupListing';
import NotFound from './pages/NotFound/notFound';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/activity' component={Activity}/>
          <Route exact path='/create' component={createGroup}/>
          <Route exact path='/groups' component={GroupListing}/>
          <Route path="/:handler" component={Group}/>
          <Route component={NotFound}/>
        </Switch>
      </Provider>
    );
  }
}

export default App;
