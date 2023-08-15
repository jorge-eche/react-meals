import classes from "./ThankYou.module.css";

const ThankYou = (props) => {
  const closeHandler = () => {
    props.onResetCart();
  };

  return (
    <>
      <div className={classes.total}>
        <span>Thanks for your order!</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeHandler}>
          Close
        </button>
      </div>
    </>
  );
};

export default ThankYou;
