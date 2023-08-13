import { useReducer } from "react";
import CartContext from "./cart-context";
const defualtCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let upadetedItems;
    if (existingCartItem) {
      const upadetedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      upadetedItems = [...state.items];
      upadetedItems[existingCartItemIndex] = upadetedItem;
    } else {
      upadetedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: upadetedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let upadetedItems;
    if (existingCartItem.amount === 1) {
      upadetedItems = state.items.filter((item) => item.id === action.id);
    } else {
      const upadetedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      upadetedItems = [...state.items];
      upadetedItems[existingCartItemIndex] = upadetedItem;
    }
    return {
      items: upadetedItems,
      totalAmount: updatedTotalAmount,
    };
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
