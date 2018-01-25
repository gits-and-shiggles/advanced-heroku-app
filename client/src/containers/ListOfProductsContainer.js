import { connect } from "react-redux";
import ListOfProducts from "../components/ListOfProducts";
import getProduct from "../actions";

function mapStateToProps(state) {
  return {
    products: state.products
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getProduct: function (id) {
      dispatch(getProduct(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListOfProducts);
