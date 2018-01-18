import {connect} from "react-redux";
import ProductForm from "../components/ProductForm";
import {createProduct} from "../actions";

function mapDispatchToProps(dispatch){
  return{
    createProduct: function (product) {
      dispatch(createProduct(product));
    }
  }
}
export default connect(null, mapDispatchToProps)(ProductForm)
