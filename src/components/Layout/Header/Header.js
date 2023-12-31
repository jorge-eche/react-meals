import { Fragment } from "react";
import HeaderCartbutton from "../HeaderCartButton/HeaderCartButton";
import MealsImg from "../../../img/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartbutton onButtonClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="meals" />
      </div>
    </Fragment>
  );
};
export default Header;
