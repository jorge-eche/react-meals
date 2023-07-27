import Card from "../../UI/Card/Card";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
  const mealsList = props.meals.map((meal) => (
    <MealItem meal={meal} key={meal.id} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
