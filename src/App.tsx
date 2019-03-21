import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ManageCustomerView, AddCustomerView, EditCustomerView } from './modules/Customer';



class App extends Component {
  render() {
    return (
      <Router> 
        <Switch>
        <Redirect from="/" exact to="/customers" />
        <Route exact path="/customers"  component={ManageCustomerView} />
        <Route exact path="/customer" component={AddCustomerView} />
        <Route exact path="/customer/:id" component={EditCustomerView} />       
        </Switch>   
    </Router>
    )
  }
}

export default App;
