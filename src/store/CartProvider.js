import { useReducer } from "react";
import CartContext from "./cart-context";
const defualtCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if ((action, type === "ADD")) {
    const upadetedItem = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: upadetedItem,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
  }
  return defualtCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defualtCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
