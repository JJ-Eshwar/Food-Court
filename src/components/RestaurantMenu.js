import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MenuShimmer } from "./Shimmer";
import { RESTAURANT_TYPE_KEY, MENU_ITEM_TYPE_KEY } from "../utils/constant.js"
import { MENU_API } from "../utils/constant.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../utils/constant.js";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";


const RestaurantMenu = () => {
  
  const { resId } = useParams();
  console.log("RestaurantMenu component rendered", resId);
  
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item))
  }
  

  
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        MENU_API + resId
      );
      const json = await data.json();
      // console.log(json)
      const restaurantInfo = json?.data?.cards?.map(x => x.card)?.
        find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
      setRestaurant(restaurantInfo);
      
      // console.log(restaurantInfo)
     

      // Set menu item data
      const menuItemsData = json?.data?.cards.find(x => x.groupedCard)?.
        groupedCard?.cardGroupMap?.REGULAR?.
        cards?.map(x => x.card?.card)?.
        filter(x => x['@type'] == MENU_ITEM_TYPE_KEY)
        ?.
        map(x => x.itemCards)
        .flat().map(x => x.card?.info) || [];

      console.log(menuItemsData)
      

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find(x => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      })
      setMenuItems(uniqueMenuItems);
       
    } catch (error) {
      console.error("Error fetching menu:", error);
      setMenuItems(null);
    }
  };
  
  return restaurant == null ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu w-auto min-h-5 ">
      <div className="restaurant-summary flex justify-center items-center h-42">
        <img
          className="restaurant-img "
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details flex flex-col m-5 basis-96 ">
          <h2 className="restaurant-title font-normal max-w-[540px]">
            {restaurant?.name}
          </h2>
          <p className="restaurant-tags whitespace-nowrap opacity-70 max-w-[540px]">
            {restaurant?.cuisines?.join(", ")}
          </p>
          <div className="restaurant-details flex mt-4 justify-between items-center font-semibold pb-2 ">
            <div
              className="restaurant-rating "
              style={
                (restaurant?.avgRating) < 4
                  ? { backgroundColor: "red" }
                  : (restaurant?.avgRating) === "--"
                    ? { backgroundColor: "gray-300", color: "black" }
                    : { backgroundColor: "green-500" }
              }
            >
              <i className=""></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash ">
              |
            </div>
            <div className="time">
              {restaurant?.sla?.slaString}
            </div>
            <div className="restaurant-rating-slash ">
              |
            </div>
            <div className="time">
              {restaurant?.costForTwoMessage}
            </div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap ">
            <h3 className="menu-title ">
              Recommended
            </h3>
            <p className="menu-count ">
              {menuItems.length} ITEMS
            </p>
          </div>
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div
                className="menu-item "
                key={item?.id} 
              >
                <div className="menu-item-details">
                  <h3 className="item-title">
                    {item?.name}
                  </h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">
                    {item?.description}
                  </p>
                </div>
                <div className="menu-img-wrapper ">
                  {item?.imageId && (
                    <img
                      className="menu-item-img "
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}                                               
                  <button
                    className="add-btn absolute bottom-2 right-2 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    id="myButton"
                    onClick={() => handleAddItem(item)} 

                      // () => {
                      
                    //   toast.success(
                    //     `${cartItems.length + 1} Items added to the Cart 😍 `,
                    //     {
                    //       position: "bottom-right",
                    //       autoClose: 700,
                    //     }
                    //   );
                    //   // dispatch(addItem(item));
                    // }
                  
                  >
                    ADD
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}
 

export default RestaurantMenu;
