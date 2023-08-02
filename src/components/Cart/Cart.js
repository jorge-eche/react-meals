import { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";
import classes from "./Cart.module.css";
import DUMMY_MEALS from "../../assets/dummy-meals";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const orderHandler = () => {
    console.log("Ordering meals...");
  };

  const itemsList = cartCtx.items.map((meal) => (
    <CartItem
      meal={meal}
      key={meal.id}
      onAdd={cartItemAddHandler}
      onRemove={cartItemRemoveHandler}
    />
  ));

  return (
    <Modal onHideCart={props.onHideCart}>
      <ul className={classes["cart-items"]}>{itemsList}</ul>
      <div className={classes.total}>
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
