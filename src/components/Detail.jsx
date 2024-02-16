import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

const arr = [1, 2, 3, 4, 5, 6];

const Detail = () => {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState([]);
  const rating = `${restaurants.rating}`
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/restaurants/${id}`)
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
      <div>
        <p className="text-3xl py-4 font-medium">
          {restaurants.restaurantName}
        </p>
        <Rating
          name="read-only"
          value={Number(rating)}
          size="small"
          readOnly
        />
        <div className="aspect-video my-4">
          <img
            src={restaurants.restaurantImage}
            alt="restaurant"
            className="w-full h-full rounded-sm object-cover"
          />
        </div>
        <p className="text-2xl">Review:</p>
        {arr.map((arr, item) => (
          <section key={item} className="flex py-1">
            <div>
              <IoPersonCircleOutline className="text-5xl" />
            </div>
            <div>
              <p className="font-bold">Name</p>
              <Rating
                name="read-only"
                value={4}
                size="small"
                readOnly
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Detail;
