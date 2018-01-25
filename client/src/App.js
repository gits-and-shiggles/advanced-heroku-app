import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ListOfOrders from "./components/ListOfOrders";
import ListOfProductsContainer from "./containers/ListOfProductsContainer";
import OrderDetailContainer from "./containers/OrderDetailContainer";
import OrderFormContainer from "./containers/OrderFormContainer";
import NewProductFormContainer from "./containers/NewProductFormContainer";
import ProductDetailContainer from "./containers/ProductDetailContainer";
import UpdateProductFormContainer from "./containers/UpdateProductFormContainer";


class App extends Component {

  componentDidMount(){
    this.props.loadOrders();
    this.props.loadProducts();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path={"/newproduct"} component={NewProductFormContainer} />
            <Route path={"/orders"} component={ListOfOrders} />
            <Route path={"/products"} component={ListOfProductsContainer} />
            <Route path={"/product/:id"} component={ProductDetailContainer} />
            <Route path={"/order"} component={OrderDetailContainer} />
            <Route path={"/placeorder"} component={OrderFormContainer} />
            <Route path={"/updateproduct/:id"} component={UpdateProductFormContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
