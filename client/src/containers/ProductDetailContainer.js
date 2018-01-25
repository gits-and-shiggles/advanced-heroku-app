import {connect} from "react-redux";
import ProductDetail from "../components/ProductDetail";
import {getProduct} from "../actions";

function mapStateToProps(state){
  return {
    product: state.product
  }
}

function mapDispatchToProps(dispatch){
  return{
    getProduct: function(id){
      dispatch(getProduct(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);
