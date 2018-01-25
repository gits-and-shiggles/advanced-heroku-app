import React from "react";
import UpdateProductFormContainer from "../containers/UpdateProductFormContainer";
import { Link } from "react-router-dom";

class ProductDetail extends React.Component{
  componentDidMount(props){
    let id = this.props.match.params.id;
    this.props.getProduct(id);
  }
  render(){
    let id = this.props.match.params.id;

    return(
      <div>
        <h2>{this.props.product.name}</h2>
        <h3>Product Description: </h3>
        <p>{this.props.product.description}</p>
        <h3>Price: </h3>
        <p>{this.props.product.price}</p>
        <h3>Quantity Available: </h3>
        <p>{this.props.product.quantityAvailable}</p>
        <div>
          <Link to={"/updateproduct/"+ id}>
            <button>Edit Product</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default ProductDetail;
