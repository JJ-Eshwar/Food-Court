import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MenuShimmer } from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // Extracting restaurant info
  const restaurantInfo =
    resInfo?.cards?.find(
      (card) =>
        card.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card?.info || {};

  const { name, cuisines, costForTwo, area, city, avgRating } =
    restaurantInfo;
  
  console.log(restaurantInfo)

  // Extracting item categories and their items
  const itemCategoryCards =
    resInfo?.cards
      ?.find((card) => card.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (card) =>
          card.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];
  
  console.log(itemCategoryCards)

  return resInfo == null ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu-container bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto mt-8 min-h-screen ">
      <div className="ml-6">
        <h1 className="text-4xl font-semibold">
          {name || "Restaurant Name Not Available"}
        </h1>
        <h5 className="text-lg mt-2">
          {cuisines ? cuisines.join(", ") : "No cuisines available"} - Cost
          for two: {costForTwo ? `Rs ${costForTwo / 100}` : "N/A"}
        </h5>
        <p className="text-lg mt-1">
          {area} {city}
        </p>
        <p className="text-lg mt-1">
          {avgRating ? `Rating: ${avgRating}` : "No rating available"}
        </p>
      </div>

      <div className="restaurant-menu-section p-6">
        {itemCategoryCards.map((categoryCard, index) => {
          const items = categoryCard.card?.card?.itemCards || [];
          const categoryName =
            categoryCard.card?.card?.title || `Category ${index + 1}`;

          return (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-4">{categoryName}</h2>
              <ul>
                {items.map((item, itemIndex) => {
                  const { name, price, defaultPrice, id } = item?.card?.info;
                  return (
                    <li key={itemIndex} className="py-2 border-b">
                      <div className="flex justify-between">
                        <span>{name}</span>
                        <span>
                          Rs. {price / 100 || defaultPrice / 100}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
