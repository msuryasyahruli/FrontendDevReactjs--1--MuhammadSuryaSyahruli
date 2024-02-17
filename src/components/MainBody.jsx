import React from "react";
import FilterNavigation from "../components/FilterNavigation";
import Card from "../components/Card";
import axios from "axios";

const MainBody = () => {
  const [restaurants, setRestaurants] = React.useState([]);

  const [arr, setArr] = React.useState(8);
  const handleClick = () => {
    setArr(arr + 8);
  };

  const [IsCheck, setIsCheck] = React.useState(false);
  const handleCheck = () => {
    setIsCheck(!IsCheck);
  };

  const [IsPrice, setIsPrice] = React.useState(false);
  const handlePrice = (value) => {
    setIsPrice(value);
  };

  const [IsCategory, setIsCategory] = React.useState(false);
  const handleCategory = (value) => {
    setIsCategory(value);
  };

  const handleReset = () => {
    setIsCheck(false);
    setIsPrice(false);
    setIsCategory(false);
  };

  const openClose = restaurants.filter(
    (restaurants) => restaurants.openClose === "OPEN NOW"
  );
  const priceRange = !IsCheck
    ? restaurants.filter(
        (restaurants) => restaurants.priceRange === `${IsPrice}`
      )
    : openClose.filter(
        (restaurants) => restaurants.priceRange === `${IsPrice}`
      );
  const category = !IsPrice
    ? restaurants.filter(
        (restaurants) => restaurants.cuisine === `${IsCategory}`
      )
    : priceRange.filter(
        (restaurants) => restaurants.cuisine === `${IsCategory}`
      );
  const arrLenght = IsCategory
    ? category
    : IsPrice
    ? priceRange
    : IsCheck
    ? openClose
    : restaurants.slice(0, arr);

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
      <FilterNavigation
        handleCheck={handleCheck}
        handlePrice={handlePrice}
        handleCategory={handleCategory}
        handleReset={handleReset}
      />
      <Card
        handleClick={handleClick}
        arrLenght={arrLenght}
        arr={arr}
        restaurants={restaurants}
      />
    </>
  );
};

export default MainBody;
