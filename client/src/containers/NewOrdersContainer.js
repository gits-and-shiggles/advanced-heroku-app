import {connect} from "react-redux";
import NewOrders from "../components/NewOrders";

function mapStateToProps(state){
  return {
    orders: state.orders
  };
}

export default connect(mapStateToProps)(NewOrders);
