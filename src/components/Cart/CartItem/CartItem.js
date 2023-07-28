import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { name, price } = props.meal;
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x3</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  );
};
export default CartItem;
