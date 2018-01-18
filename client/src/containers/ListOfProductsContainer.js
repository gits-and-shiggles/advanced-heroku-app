import { connect } from "react-redux";
import ListOfProducts from "../components/ListOfProducts";
import {loadProducts} from "../actions";

function mapStateToProps(state) {
  return {
    products: state.products
  }
}
function mapDispatchToProps(dispatch){
  return {
    loadProducts: function (products){
      dispatch(loadProducts(products));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListOfProducts);
