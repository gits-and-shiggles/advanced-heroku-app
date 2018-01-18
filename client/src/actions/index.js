export function createOrder(order){
  return function (dispatch){
    fetch("/orders", {
      method: "POST",
      headers: {"Content-Type": "application-json"},
      body: JSON.stringify(order)
    }).then(()=> dispatch(loadOrders()));
  };
}
export function loadOrders(){
  return function (dispatch){
    fetch("/orders")
    .then((response)=> {
      return response.json();
    })
    .then((orders)=>{
      dispatch(ordersLoaded(orders));
    })
  }
}
function ordersLoaded(orders){
  return{
    type: "ORDERS_LOADED",
    value: orders
  };
}
export function getOrder(id){
  return function (dispatch){
    fetch(`/orders/${id}`)
    .then((response)=>{
      return response.json();
    })
    .then((order)=>{
      dispatch(getOrderDone(order));
    });
  };
}
function getOrderDone(order){
  return {
    type: "GET_ORDER_DONE",
    value: order
  }
}
export function deleteOrder(id){
  return function (dispatch){
    fetch(`/orders/${id}`,{
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    })
    .then(()=> dispatch(loadOrders()));
  }
}
export function updateOrder(id){
  return function (dispatch) {
    fetch(`/orders/${id}`,{
      method: "PUT",
      headers: {"Content-Type": "application/json"}
    })
    .then(()=> dispatch(loadOrders()));
  };
}
export function createProduct(product){
  return function (dispatch){
    debugger;
    fetch("/products", {
      method: "POST",
      headers: {"Content-Type": "application-json"},
      body: JSON.stringify(product)
    }).then(()=> dispatch(loadProducts()));
  };
}
export function loadProducts(){
  return function(dispatch){
    fetch("/products")
    .then((response)=>{
      return response.json();
    })
    .then((products)=>{
      dispatch(productsLoaded(products));
    });
  };
}
function productsLoaded(products){
  return{
    type: "PRODUCTS_LOADED",
    value: products
  };
}
export function getProduct(id){
  return function (dispatch){
    fetch(`/products/${id}`)
    .then((response)=>{
      return response.json();
    })
    .then((product)=>{
      dispatch(getProductDone(product));
    });
  };
}
function getProductDone(product){
  return {
    type: "GET_PRODUCT_DONE",
    value: product
  }
}
export function deleteProduct(id){
  return function (dispatch){
    fetch(`/products/${id}`,{
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    })
    .then(()=> dispatch(loadProducts()));
  }
}
export function updateProducts(){
  return function (dispatch){
    fetch("/products", {
      method: "PUT",
      headers: {"Content-Type": "application/json"}
    })
    .then(()=> dispatch(loadProducts()));
  };
}
