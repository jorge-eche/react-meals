import { useContext, useState, useEffect } from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsAnimated, setBtnIsAnimated] = useState(false);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsAnimated(true);

    const timer = setTimeout(() => {
      setBtnIsAnimated(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsAnimated ? classes.bump : ""}`;

  return (
    <button className={btnClasses} type="button" onClick={props.onButtonClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
