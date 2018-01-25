import {connect} from "react-redux";
import UpdateProductForm from "../components/UpdateProductForm";
import {updateProduct, deleteProduct} from "../actions";

function mapStateToProps(state){
  return {
    product: state.product
  }
}

function mapDispatchToProps(dispatch){
  return{
    updateProduct: function (id, body) {
      dispatch(updateProduct(id, body));
    },
    deleteProduct: function(id){
      dispatch(deleteProduct(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProductForm)
