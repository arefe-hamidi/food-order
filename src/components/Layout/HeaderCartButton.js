import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";
const HeaderCartButton = (props) => {
  const [btnIsHighlited, setBtnIsHighlited] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx.items;
  const numberOfCartItem = cartCtx.items.reduce((curnNumber, item) => {
    return curnNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${btnIsHighlited ? classes.bump : ""}`;
  useEffect(() => {
    // if (items.length === 0) {
    //   return;
    // }
    setBtnIsHighlited(true);
    const timer = setTimeout(() => {
      setBtnIsHighlited(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
