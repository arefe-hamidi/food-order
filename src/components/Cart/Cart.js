// import { useContext } from "react";

import Modal from "../UI/Modal";
// import CartItem from "./CartItem";
import classes from "./Cart.module.css";
// import CartContext from "../../store/cart-context";

const Cart = (props) => {
  // const cartCtx = useContext(CartContext);

  // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  // const hasItems = cartCtx.items.length > 0;

  // const cartItemRemoveHandler = (id) => {
  //   cartCtx.removeItem(id);
  // };

  // const cartItemAddHandler = (item) => {
  //   cartCtx.addItem(item);
  // };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {/* <CartItem key="index" name="name" amount="4" price=12.99 /> */}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>9</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {/* {hasItems && <button className={classes.button}>Order</button>} */}
      </div>
    </Modal>
  );
};

export default Cart;
