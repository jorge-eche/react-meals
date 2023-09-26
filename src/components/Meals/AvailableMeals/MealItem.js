import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const [mealId, meal] = props.meal;
  const cartCtx = useContext(CartContext);

  const price = `$${meal.price.toFixed(2)}`;

  const AddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: mealId,
      name: meal.name,
      price: meal.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={mealId} onAddToCart={AddToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
