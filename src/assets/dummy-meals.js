// const fetchMeals = async () => {
//   const response = await fetch(
//     "https://react-http-c78b6-default-rtdb.firebaseio.com/meals.json"
//   );
//   const data = await response.json();
//   const transformedData = Object.entries(data);
//   return transformedData;
// };

// const DUMMY_MEALS = fetchMeals();

const url = "https://react-http-c78b6-default-rtdb.firebaseio.com/meals.json";
const response = await fetch(url);
const data = await response.json();
const DUMMY_MEALS = Object.entries(data);

export { DUMMY_MEALS };
