import Card from "../../UI/Card/Card";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";
import { DUMMY_MEALS } from "../../../assets/dummy-meals";

const meals = DUMMY_MEALS;

console.log("meals", meals);

const AvailableMeals = (props) => {
  const mealsList = meals.map((meal) => <MealItem meal={meal} key={meal[0]} />);
  // const mealsList = <p>meals</p>;

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
