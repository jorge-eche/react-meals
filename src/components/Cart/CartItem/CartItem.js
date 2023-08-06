import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;

  const addItemHandler = () => {
    props.onAdd({
      id: props.meal.id,
      name: props.meal.name,
      price: props.meal.price,
      amount: 1,
    });
  };

  const removeItemHandler = () => {
    props.onRemove(props.meal.id);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.meal.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x{props.meal.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>-</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};
export default CartItem;
