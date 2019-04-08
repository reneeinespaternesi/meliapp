import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBarComponent from "./components/NavBarComponent";
import ProductList from "./components/Product/ProductList";
import ProductDetail from "./components/Product/ProductDetail";
import DefaultComponent from "./components/DefaultComponent";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarComponent />
        <Switch>
          <Route extact path="/" component={ProductList} />
          <Route extact path="/items?search=" component={ProductList} />
          <Route extact path="/item/:id" component={ProductDetail} />
          <Route component={DefaultComponent} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
