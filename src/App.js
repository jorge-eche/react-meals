import { Fragment } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import dummyMeals from "./assets/dummy-meals";

const meals = dummyMeals;

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals meals={meals} />
      </main>
    </Fragment>
  );
}

export default App;
