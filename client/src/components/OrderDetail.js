import React from "react";
import {Link} from "react-router-dom";

class OrderDetail extends React.Component {

  componentDidMount(props){
    let id = this.props.match.params.id;
    this.props.getOrder(id);
  }

  render() {
    let orderList = this.props.order.productsOrdered.map((p,i)=>{
      return(<ul>{p.name}</ul>)
    });
    return(
      <div>
        <h2>Order Details</h2>
        <h3>Customer Info</h3>
        <h4>{this.props.order.customerName}</h4>
        <h3>Products Ordered</h3>
        <ul>
          {orderList}
        </ul>
      </div>
    )
  }
}

export default OrderDetail;
