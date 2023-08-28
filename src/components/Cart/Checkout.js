import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isTenChar = (value) => value.trim().length === 10;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enterdName = nameInputRef.current.value;
    const enterdStreet = streetInputRef.current.value;
    const enterdPostalCode = postalCodeInputRef.current.value;
    const enterdNameIsValid = isEmpty(enterdName);
    const enterdStreetIsValid = isEmpty(enterdStreet);
    const enterdPostalCodeIsValid = isTenChar(enterdPostalCode);
    setFormInputValidity({
      name: enterdNameIsValid,
      street: enterdStreetIsValid,
      postalCode: enterdPostalCodeIsValid,
    });
    const FormIsValid =
      enterdNameIsValid && enterdStreetIsValid && enterdPostalCodeIsValid;

    if (!FormIsValid) {
      return;
    }
    props.onConfirm({
      name: enterdName,
      street: enterdStreet,
      postalCode: enterdPostalCode,
    });
  };
  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please Enter a valid Name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please Enter a valid Street</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postalCode">Postal code</label>
        <input type="text" id="postalCode" ref={postalCodeInputRef} />
        {!formInputValidity.postalCode && (
          <p>Please Enter a valid Postal Code</p>
        )}
      </div>
      <button type="button" onClick={props.onCancel}>
        cancel
      </button>
      <button>confirm</button>
    </form>
  );
};
export default Checkout;
