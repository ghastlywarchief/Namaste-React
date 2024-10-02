import { RES_IMG_URL } from "../utils/links";

const RestaurantCard = (props) => {
    const {res} = props;
    const {name, cuisines, cloudinaryImageId, avgRating} = res?.info;
    const {deliveryTime} = res?.info?.sla;
    return (
        <div className="w=[100%] border border-black rounded-xl m-10 shadow-2xl text-center bg-orange-200 hover:shadow-2xl hover:border-2 hover:bg-orange-300">
            <img className="w-[100%] h-80 rounded-xl" src= {RES_IMG_URL + cloudinaryImageId}/>
            <h1 className="text-3xl p-4 font-bold">{name}</h1>
            <h3 className="text-2xl p-4">{cuisines.join(", ")}</h3>
            <h3 className="text-2xl p-4">{avgRating?avgRating:"Not Rated Yet"}</h3>
            <h3 className="text-2xl p-4">{deliveryTime + " mins"}</h3>
        </div>
    )
}

export default RestaurantCard;