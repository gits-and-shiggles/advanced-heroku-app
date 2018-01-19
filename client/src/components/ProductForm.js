import React, { Component } from "react";

class ProductForm extends Component {
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
    return(
      <div>
        <h3>Add A New Product To Your Inventory</h3>
        <form onSubmit={(e)=>{
          e.preventDefault();
          console.log(this.state);
          this.props.createProduct(this.state.product);
        }}>
          <h4>Product Name</h4>
          <input onChange={(e)=>{
            let productName = {name: e.target.value};
            this.setState({
              product: Object.assign(this.state.product, productName)
            });
          }} />
          <h4>Product Description</h4>
          <input onChange={(e)=>{
            let productDescription = {description: e.target.value};
            this.setState({
              product: Object.assign(this.state.product, productDescription)
            });
          }} />
          <h4>Product Price</h4>
          <input onChange={(e)=>{
            let productPrice = {price: e.target.value};
            this.setState({
              product: Object.assign(this.state.product, productPrice)
            });
          }} />
          <h4>Product Quantity Available</h4>
          <input onChange={(e)=>{
            let productQuantity = {quantityAvailable: e.target.value};
            this.setState({
              product: Object.assign(this.state.product, productQuantity)
            });
          }} />
          <button type="submit">Add Product to Inventory</button>
        </form>
      </div>
    )
  }
}

export default ProductForm;
