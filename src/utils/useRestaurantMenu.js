import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=${resId}`
      );
      const json = await data.json();
        setResInfo(json);
        console.log(json)// Set the entire jsonData to resInfo
    
    } catch (error) {
      console.error("Error fetching menu:", error);
      setResInfo(null);
    }
  };

  return resInfo; // Return resInfo from the hook
};

export default useRestaurantMenu;
