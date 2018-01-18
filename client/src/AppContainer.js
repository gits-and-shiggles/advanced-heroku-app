import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadOrders, loadProducts } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadOrders: function (orders) {
      dispatch(loadOrders(orders))
    },
    loadProducts: function(products){
      dispatch(loadProducts(products))
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
