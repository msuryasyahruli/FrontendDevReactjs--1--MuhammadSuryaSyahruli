import React from "react";
import { BsDot } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const Card = ({handleClick, arrLenght, arr, restaurants}) => {
  return (
    <>
      <section className="grid grid-cols-2 gap-2 mb-4 lg:grid-cols-4 md:grid-cols-3 sm:gap-6">
        {arrLenght.map((item, index) => (
          <div key={index} className="mb-6">
            <div className="aspect-[4/3]">
              <img
                src={item.restaurantImage}
                alt="restaurant"
                className="w-full h-full rounded-sm object-cover"
              />
            </div>
            <div className="h-32">
              <p className="font-semibold py-2">{item.restaurantName}</p>
              <Rating
                name="read-only"
                value={item.rating}
                size="small"
                readOnly
              />
              <div className="flex justify-between py-2">
                <div className="flex items-center">
                  <p>{item.cuisine}</p>
                  <BsDot />
                  <p>{item.priceRange}</p>
                </div>
                <div className="flex items-center">
                  <GoDotFill
                    className={
                      item.openClose === "CLOSED"
                        ? "text-red-500"
                        : "text-green-500"
                    }
                  />
                  <p>{item.openClose}</p>
                </div>
              </div>
            </div>
            <Link to={`/detail/${item.id}`}>
              <button className="bg-purple-950 text-white w-full py-2 rounded-sm">
                LEARN MORE
              </button>
            </Link>
          </div>
        ))}
      </section>
      <div
        className={
          restaurants.length <= arr ? "hidden" : "flex justify-center mb-8"
        }
      >
        <button
          className="border border-purple-950 w-96 py-2 rounded-sm"
          onClick={handleClick}
        >
          LOAD MORE
        </button>
      </div>
    </>
  );
};

export default Card;
