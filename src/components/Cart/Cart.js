import { useContext, useState } from "react";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";
import ThankYou from "./ThankYou/ThankYou";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isThankYou, setIsThankYou] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    const confirmOrder = window.confirm("Confirm order?");
    if (confirmOrder) {
      setIsThankYou(true);
    } else {
      return;
    }
  };

  const resetHandler = () => {
    cartCtx.resetItems();
    setIsThankYou(false);
    props.onHideCart();
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
      {isThankYou ? (
        <ThankYou onResetCart={resetHandler} />
      ) : (
        <>
          <ul className={classes["cart-items"]}>{itemsList}</ul>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button
              className={classes["button--alt"]}
              onClick={props.onHideCart}
            >
              Close
            </button>
            {hasItems && (
              <button className={classes.button} onClick={orderHandler}>
                Order
              </button>
            )}
          </div>
        </>
      )}
    </Modal>
  );
};
export default Cart;
