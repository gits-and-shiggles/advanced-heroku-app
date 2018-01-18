import React from "react";

class UpdateInventory extends React.Component {
  componentDidMount(props){
    this.props.loadInventory();
  }
  render(){
    return(
      <div>this component needs to be completed</div>
    );
  }
}

export default UpdateInventory;
