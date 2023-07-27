import { Fragment } from "react";
import MealsSummary from "./MealsSummary/MealsSummary";
import AvailableMeals from "./AvailableMeals/AvailableMeals";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals meals={props.meals} />
    </Fragment>
  );
};
export default Meals;
