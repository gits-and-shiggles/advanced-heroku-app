import React, { Component } from "react";
import { Link } from "react-router-dom";

class UpdateProductForm extends Component {
  constructor(props){
    super();
    this.state = {
      product: {
        name: props.product.name,
        description: props.product.description,
        price: props.product.price,
        quantityAvailable: props.product.quantityAvailable
      }
    }
  }

  render(){
    console.log(this.state)
    let product = this.state.product;

    return(
      <div>
        <h3>Edit Product Details</h3>
        <form onSubmit={(e)=>{
          e.preventDefault();
          this.props.updateProduct(this.props.product._id, product);
        }}>
          <h4>Product Name</h4>
          <input defaultValue={product.name} onChange={(e)=>{
            let productName = e.target.value;
            this.setState({
              ...this.state,
              product: {
                ...product,
                name: productName,
              }
            });
          }} />
          <h4>Product Description</h4>
          <input defaultValue={product.description} onChange={(e)=>{
            let productDescription = e.target.value;
            this.setState({
              ...this.state,
              product: {
                ...product,
                description: productDescription,
              }
            });
          }} />
          <h4>Product Price</h4>
          <input defaultValue={product.price} onChange={(e)=>{
            let productPrice = e.target.value;
            this.setState({
              ...this.state,
              product: {
                ...product,
                price: productPrice,
              }
            });
          }} />
          <h4>Product Quantity Available</h4>
          <input defaultValue={product.quantityAvailable} onChange={(e)=>{
            let productQuantity = e.target.value;
            this.setState({
              ...this.state,
              product: {
                ...product,
                quantityAvailable: productQuantity,
              }
            });
          }} />
          <button type="submit" onClick={()=>{
            window.location = "/product/" + this.props.product._id
          }}>
            Submit Product Changes
          </button>
          <button onClick={(e)=> {
            e.preventDefault();
            this.props.deleteProduct(this.props.product._id);
          }}>Delete Product</button>
        </form>
      </div>
    )
  }
}

export default UpdateProductForm;
