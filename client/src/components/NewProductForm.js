import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewProductForm extends Component {
  constructor(props){
    super();
    this.state = {
      product: {
        name: "",
        description: "",
        price: 0,
        quantityAvailable: 0
      }
    }
  }

  render(){
    console.log(this.state)
    let product = this.state.product;

    return(
      <div>
        <h3>Add A New Product To Your Inventory</h3>
        <form onSubmit={(e)=>{
          e.preventDefault();
          this.props.createProduct(product);
          this.props.hideForm();
        }}>
          <h4>Product Name</h4>
          <input onChange={(e)=>{
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
          <input onChange={(e)=>{
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
          <input onChange={(e)=>{
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
          <input onChange={(e)=>{
            let productQuantity = e.target.value;
            this.setState({
              ...this.state,
              product: {
                ...product,
                quantityAvailable: productQuantity,
              }
            });
          }} />
          <button type="submit">Add Product</button>
        </form>
      </div>
    )
  }
}

export default NewProductForm;
