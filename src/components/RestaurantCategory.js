import RestaurantMenu from "./RestaurantMenu";


const RestaurantCategory = ({ data }) => {
    // console.log(data)
    return <div>
        <div className="w-full bg-gray-50 shadow-lg p-4">
            {/* resCategory */}
            <span>{data}</span>
     </div>
 </div>   
}


export default RestaurantCategory;