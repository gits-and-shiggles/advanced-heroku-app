import {connect} from "react-redux";
import NewProductForm from "../components/NewProductForm";
import {createProduct, deleteProduct} from "../actions";

function mapDispatchToProps(dispatch){
  return{
    createProduct: function (product) {
      dispatch(createProduct(product));
    },
    deleteProduct: function(id){
      dispatch(deleteProduct(id));
    }
  }
}
export default connect(null, mapDispatchToProps)(NewProductForm);
