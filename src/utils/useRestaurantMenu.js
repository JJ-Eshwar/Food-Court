import { useEffect, useState } from "react";
import { RESTAURANT_TYPE_KEY,MENU_ITEM_TYPE_KEY, MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
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
      map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];

const uniqueMenuItems = [];
menuItemsData.forEach((item) => {
if (!uniqueMenuItems.find(x => x.id === item.id)) {
uniqueMenuItems.push(item);
}
})
setMenuItems(uniqueMenuItems);
       
    } catch (error) {
      console.error("Error fetching menu:", error);
      setResInfo(null);
    }
  };

  return restaurant; // Return resInfo from the hook
  
};

export default useRestaurantMenu;
