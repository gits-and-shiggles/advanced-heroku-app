import {combineReducers} from "redux";

function orders(state = [], action) {
  if (action.type === "ORDERS_LOADED") {
    return action.value;
  }
  return state;
}
function order(state = [], action){
  if(action.type === "GET_ORDER_DONE") {
    return action.value;
  }
  return state;
}
function products(state = [], action){
  if(action.type === "INVENTORY_LOADED") {
    return action.value;
  }
  return state;
}
function product(state = {}, action){
  if(action.type === "GET_PRODUCT_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  orders, order, products, product
});
export default rootReducer;
