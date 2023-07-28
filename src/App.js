import { Fragment, useState } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(true);

  const modalCloseHandler = (booleanFalse) => {
    setCartIsShown(booleanFalse);
  };

  return (
    <Fragment>
      {cartIsShown ? <Cart onClose={modalCloseHandler} /> : null}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
