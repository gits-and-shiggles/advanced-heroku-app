import {connect} from "react-redux";
import UpdateInventory from "../components/UpdateInventory";
import {loadInventory, updateInventory} from "../actions";

function mapStateToProps(state){
  return{
    inventory: state.inventory
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadInventory: function() {
      dispatch(loadInventory());
    },
    updateInventory: function(){
      dispatch(updateInventory());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateInventory);
