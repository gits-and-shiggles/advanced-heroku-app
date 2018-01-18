import { connect } from "react-redux";
import OrderDetail from "../components/OrderDetail";
import {getOrder, deleteOrder} from "../actions";

function mapStateToProps(state){
  return {
    order: state.order
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getOrder: function(id) {
      dispatch(getOrder(id));
    },
    deleteOrder: function(id) {
      dispatch(deleteOrder(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
