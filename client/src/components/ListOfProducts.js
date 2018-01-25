import React from "react";
import {Link} from "react-router-dom";
import NewProductFormContainer from "../containers/NewProductFormContainer";
import PropTypes from "prop-types";

class ListOfProducts extends React.Component {
  constructor(props){
    super();
    this.state = {
      productForm: ""
    };
    this.hideForm = this.hideForm.bind(this);
  }
  hideForm(){
    return(
      this.setState({
        productForm: ""
      })
    )
  }


  render(){
    let productList = this.props.products.map((p,i)=>{
      return(
        <li key={i}>
          <h4>{p.name}</h4>
          <p>Quantity Available: {p.quantityAvailable}</p>
          <button>
            <Link to={"/product/"+p._id}>View/Edit</Link>
          </button>
        </li>
      )
    });

    return (
      <div>
        <h3>Inventory of products</h3>
        <button onClick={(e)=>{
          e.preventDefault();
          this.setState({
            productForm: <NewProductFormContainer hideForm={this.hideForm} />
          });
        }}>
          Add New Product
        </button>
        <div>{this.state.productForm}</div>
        <ul>
          {productList}
        </ul>
      </div>
    );
  }
}

export default ListOfProducts;

ListOfProducts.PropTypes = {
  products: PropTypes.array.isRequired
}
