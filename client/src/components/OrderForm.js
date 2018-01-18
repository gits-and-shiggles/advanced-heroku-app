import React from "react";

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      order: []
    }
  }

  render(){
    return(
      <div>
        <h2>Car Parts To Order</h2>
        <form onSubmit={(e)=>{
          e.preventDefault();
          this.props.createCustomerOrder(this.state.order)
        }}>
        
        </form>
      </div>
    )
  }
}

export default OrderForm;
