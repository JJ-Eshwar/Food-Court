import { CDN_URL } from "../utils/constant.js"
import Shimmer from "./Shimmer.js";
import { MenuShimmer } from "./Shimmer";
const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, area, lastMileTravelString, avgRating, deliveryTime, costForTwoString } = resData?.info;
    const ratingColor = avgRating >= 4 ? "bg-green-500" : avgRating >= 3 ? "bg-yellow-500" : "bg-red-500";

    return resData == null ? (
        <MenuShimmer />
        // <div className="res-container border rounded-lg ">
    ) : (
        <div className="res-card w-50 rounded-lg h-60 hover:bg-gray-500">
            <img className="card-img h-40 w-full rounded-lg bg-white cursor-pointer object-cover shadow-lg" alt={name} src={CDN_URL +
                cloudinaryImageId} />
            <div className="">
                <h2 className="text-xl font-bold text-gray-800 truncate">{name}</h2>
                <h4 className="text-sm text-gray-600 ">{cuisines.join(", ")}</h4>

                <div className="flex items-center justify-between pt-4 pl-2 text-white text-sm">
                    <span
                        className="flex items-center  px-2 py-1 rounded bg-green-500" // Apply ratingColor here
                    >
                         {/* Star icon */}
                        {avgRating}
                    </span>
                </div>



            </div>
        </div>

    )
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;