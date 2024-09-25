import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MenuShimmer } from "./Shimmer";
import { RESTAURANT_TYPE_KEY, MENU_ITEM_TYPE_KEY } from "../utils/constant.js"
import { MENU_API } from "../utils/constant.js";

const RestaurantMenu = () => {
  
  const { resId } = useParams();
  console.log("RestaurantMenu component rendered", resId);
  
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);
  

  
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
      
      console.log(restaurantInfo)
     

      // Set menu item data
      const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
      groupedCard?.cardGroupMap?.REGULAR?.
      cards?.map(x => x.card?.card)?.
      filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
        map(x => x.itemCards).flat().map(x => x.card?.info) || [];
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
    <div className="restaurant-menu">
      
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
          <div className="restaurant-details">
            <div className="restaurant-rating" style={
            (restaurant?.avgRating) < 4
              ? { backgroundColor: "red" }
              : (restaurant?.avgRating) === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }>
            <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div className="time">{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div className="time">{restaurant?.costForTwoMessage}</div>
          </div>
      
      </div>

     
                  {/* <button className="add-btn" id="myButton" onClick={()=>{
                    toast.success(`${cartItems.length+1} Items added to the Cart 😍 `, {
                    position:"bottom-right",
                    autoClose: 700
                    });
                    dispatch(addItem(item))
                  }}> ADD</button> */}
                </div>
              
           
          
  );
};

 

export default RestaurantMenu;
