import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";
import classes from "./Cart.module.css";
import DUMMY_MEALS from "../../assets/dummy-meals";

const Cart = (props) => {
  const itemsList = DUMMY_MEALS.map((meal) => (
    <CartItem meal={meal} key={meal.id} />
  ));

  const handleClose = () => {
    props.onClose(false);
  };
  const handleOrder = () => {
    console.log("Ordering meals...");
  };

  return (
    <Modal>
      <ul className={classes["cart-items"]}>{itemsList}</ul>
      <div className={classes.total}>
        <span>Total</span>
        <span>$80.75</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={handleClose}>
          Close
        </button>
        <button className={classes.button} onClick={handleOrder}>
          Order
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
