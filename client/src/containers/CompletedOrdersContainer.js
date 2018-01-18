import {connect} from "react-redux";
import CompletedOrders from "../components/CompletedOrders";

function mapStateToProps(state){
  return {
    orders: state.orders
  };
}

export default connect(mapStateToProps)(CompletedOrders);
