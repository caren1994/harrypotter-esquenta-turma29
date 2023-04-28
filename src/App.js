import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './pages/Form';
import Login from './pages/Login';

function App() {
  return (

    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/form" component={ Form } />
    </Switch>

  );
}

export default App;
