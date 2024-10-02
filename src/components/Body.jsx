import RestaurantCardContainer from "./RestaurantCardContainer";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import { RES_URL } from "../utils/links";
import RestaurantCard from "./RestaurantCard";
import RestaurantMenu from "./RestaurantMenu";
import { Link } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const resList = useRestaurantData();
    const [filteredResList, setFitleredResList] = useState([]);
    const [text, setTextChanged] = useState("");
    console.log(resList)

    useEffect(() => {
        setFitleredResList(resList);
    }, [resList])

    const connectionStatus = useOnlineStatus();

    if(!connectionStatus){
        return (<div className="body"><h1>Looks like you are offline, please check your connection and try again:(</h1></div>)
    }
    else{
        return (
            <div className="body m-2">
                <div className="flex justify-between p-7">
                {/* <SearchBar/> */}
                    <div className="search">
                        <input type="text" className="border border-black p-2 rounded hover:border-4 hover:border-orange-300" value={text} onChange={(i) => {
                            setTextChanged(i.target.value);
                        }}></input>
                        <button className="border border-black p-2 rounded bg-orange-200 hover:bg-orange-300 hover:border-2" onClick={() => {
                            console.log(text);
                            const filtered = resList.filter((res) => res.info.name.toLowerCase().includes(text.toLowerCase()));
                            setFitleredResList(filtered);
                        }}>Search</button>
                    </div>
                    <button className="border border-black p-2 rounded text-xl bg-orange-200 hover:border-2 hover:bg-orange-300" onClick={() => {
                        const filteredData = resList.filter((res)=> res?.info?.avgRating > 4.0);
                        setFitleredResList(filteredData);
                        console.log(filteredData);
                    }}>Filter Top Rated Restaurants</button>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 gap-40">
                        {filteredResList.map((restaurant) => (<Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard onClick={() => {<RestaurantMenu />}} res={restaurant} /></Link>))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;