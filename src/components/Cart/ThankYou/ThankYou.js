import classes from "./ThankYou.module.css";

const ThankYou = () => {
  return (
    <>
      <div className={classes.total}>
        <span>Thanks for your order!</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
      </div>
    </>
  );
};

export default ThankYou;
