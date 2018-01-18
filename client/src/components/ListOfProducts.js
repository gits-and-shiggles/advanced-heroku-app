import React from "react";
import {Link} from "react-router-dom";
import ProductFormContainer from "../containers/ProductFormContainer";

class ListOfProducts extends React.Component {
  constructor(props){
    super();
    this.state = {
      productForm: ""
    }
  }
  componentDidMount(props){
    this.props.loadProducts(this.props.products);

  }

  render(){
    let productList = this.props.products.map((p,i)=>{
      return(
        <li key={i}>
          <h4>{p.name}</h4>
          <p>Quantity Available: {p.quantityAvailable}</p>
          <button>
            <Link to={"products/"+p.id}>View/Edit</Link>
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
            productForm: <ProductFormContainer />
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
