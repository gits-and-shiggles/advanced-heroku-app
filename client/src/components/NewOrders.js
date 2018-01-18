import React from "react";
import {Link} from "react-router-dom";

function NewOrders (props){
  let ordersList = props.orders.map((order,i)=>{
    if (order.orderCompleted === false) {
      return (
        <li key={i}>
          <Link to={"/order/" + order._id}>
            <h3>{order.shopName}</h3>
          </Link>
        </li>
      );
    };
  });

  return (
    <div>
      <h2>New Orders</h2>
      <ul>
        {ordersList}
      </ul>
    </div>
  )
}

export default NewOrders;
