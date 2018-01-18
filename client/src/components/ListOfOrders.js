import React from "react";
import CompletedOrdersContainer from "../containers/CompletedOrdersContainer";
import NewOrdersContainer from "../containers/NewOrdersContainer";

function ListOfOrders (){
  return (
    <div>
      <NewOrdersContainer />
      <CompletedOrdersContainer />
    </div>
  )
}

export default ListOfOrders;
