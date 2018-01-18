import React from "react";
import {Link} from "react-router-dom";

function Header(){
  return(
    <div className="header">
      <h1>B2B AUTO PARTS</h1>
      <Link to="/placeorder">Shop Available Parts</Link>
      <Link to="/productinventory">Manage Inventory</Link>
    </div>
  )
}

export default Header;
