import React from "react";
import FilterNavigation from "../components/FilterNavigation";
import Card from "../components/Card";
import axios from "axios";

const MainBody = () => {
  const [restaurants, setRestaurants] = React.useState([]);

  const [IsCheck, setIsCheck] = React.useState(false)
  const handleCheck = () =>{
    setIsCheck(!IsCheck)
  }

  const [arr, setArr] = React.useState(8);
  const handleClick = () => {
    setArr(arr + 8);
  };

  const arrLenght = !IsCheck ? restaurants.slice(0, arr) : restaurants.filter(restaurants => restaurants.openClose === "OPEN NOW")

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/restaurants`)
      .then((res) => {
        setRestaurants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <FilterNavigation handleCheck={handleCheck} />
      <Card handleClick={handleClick} arrLenght={arrLenght} arr={arr} restaurants={restaurants} />
    </>
  );
};

export default MainBody;
