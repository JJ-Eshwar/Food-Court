import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import restaurantList from "../utils/mockdata.js";
import RestaurantCard from './RestaurantCard.js';
import Shimmer from './Shimmer.js';
import { Link } from 'react-router-dom';
import RestaurantMenu from './RestaurantMenu.js';



const Body = () => {
    const [listOfrestaurants, setListOfRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [allRestaurants, setAllRestaurants] = useState([]);

    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"

        );
        const json = await data.json();
        console.log(json)
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // console.log("data",data.data.cards.card[2].data.data.cards)
        setListOfRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setfilteredRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );


    };

    // return listOfrestaurants.length == 0 ? <Shimmer /> : (
        return (
        <div className="container mx-auto py-6 px-4 min-h-screen">
            <div className="btn1 filter  justify-center items-center space-x-5 pt-4">
                <div className="search">
                    <input type="text" placeholder="Search for restaurants" className=" border border-gray-300 rounded-lg px-4 py-2 w-1/6 focus:outline-none focus:ring-2" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} /> </div>
                <div className="search-box flex">
                    <button className="search-btn btn    px-4 py-2 rounded-lg  focus:outline-none focus:ring-2" onClick={() => {
                        const filteredRestaurant = listOfrestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setfilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className=" filtering-btn  btn  text-black  px-4 py-2 rounded-lg  focus:outline-none focus:ring-2 " onClick={() => {
                    const filteredList = listOfrestaurants.filter(
                        (res) => res.info.avgRating > 4

                    );
                    setListOfRestaurant(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container flex items-center justify-center flex-wrap gap-4 mt-8">

                {filteredRestaurant.map((restaurant) => (
                  <Link 
                  className="cardLink" 
                  to={`/restaurant/${restaurant.info.id}`}
                  key={restaurant.info.id} 
                    > <RestaurantCard  resData={restaurant} />
                        </Link>
                ))}
            </div>
        </div>
    )
};


export default Body;