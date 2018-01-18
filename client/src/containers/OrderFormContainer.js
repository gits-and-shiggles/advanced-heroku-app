import { connect } from "react-redux";
import OrderForm from "../components/OrderForm";
import { createOrder } from "../actions";


function mapDispatchToProps(dispatch) {
  return {
    createOrder: function (order) {
      dispatch(createOrder(order));
    }
  }
}

export default connect(null, mapDispatchToProps)(OrderForm);
