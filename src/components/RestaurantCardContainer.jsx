import RestaurantCard from "./RestaurantCard";
import { RES_URL } from "../utils/links";
import { useState, useEffect } from "react";

const RestaurantCardContainer = () => {

    const [resList, setResList] = useState([]);                //listens for any changes made in the restaurant list using setResList function(will re-render the component whenevr the setResList function will be called)
    useEffect(()=> {fetchData()},[]);                               //used for invoking a cb function when the body component is rendered(there are 2 ways for rendering components: 1: pageload => API call => render real time data, 2: pageload => render app skeleton => API call => render real time data)
    
    async function fetchData(){                                     
        const rtData = await fetch(RES_URL);
        const jsonData = await rtData.json();
        console.log(jsonData);
        setResList(jsonData);
    }

    return (
        <div>
        <button onClick={() => {
            const filteredData = resList.filter((res)=> parseInt(res.info.rating.rating_text) >= 4);
            setResList(filteredData);
            console.log("clicked");
        }}>Filter Top Rated Restaurants</button>
        <div className="res-container">
            {resList.map((restaurant) => (<RestaurantCard key={restaurant.info.resId} res={restaurant} />))}
        </div>
        </div>
    )
}

export default RestaurantCardContainer;