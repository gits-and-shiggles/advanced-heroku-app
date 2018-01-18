import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ListOfOrders from "./components/ListOfOrders";
import ListOfProductsContainer from "./containers/ListOfProductsContainer";
import OrderDetailContainer from "./containers/OrderDetailContainer";
import OrderFormContainer from "./containers/OrderFormContainer";
import UpdateInventoryContainer from "./containers/UpdateInventoryContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  // componentDidMount(){
  //   this.props.loadOrders();
  //   this.props.loadProducts();
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            {/* <Route path={"/"} component={AppContainer} /> */}
            <Route path={"/orders"} component={ListOfOrders} />
            <Route path={"/productinventory"} component={ListOfProductsContainer} />
            <Route path={"/order"} component={OrderDetailContainer} />
            <Route path={"/placeorder"} component={OrderFormContainer} />
            <Route path={"/updateinventory"} component={UpdateInventoryContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
