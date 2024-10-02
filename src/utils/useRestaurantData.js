import { useEffect, useState } from "react";
import { RES_URL } from "./links";

const useRestaurantData = () => {

    const [resList, setResList] = useState([]);                     //listens for any changes made in the restaurant list using setResList function(will re-render the component whenevr the setResList function will be called)
    
    useEffect(() => {                                               //used for invoking a cb function when the body component is rendered(there are 2 ways for rendering components: 1: pageload => API call => render real
        fetchData();
    }, [])

    async function fetchData(){
        const rtData = await fetch(RES_URL);
        const jsonData = await rtData.json();
        console.log(jsonData);
        jsonData?.data?.cards.some((res) => {
            if(res?.card?.card?.gridElements?.infoWithStyle?.restaurants){
                setResList(res.card?.card?.gridElements?.infoWithStyle?.restaurants);
                console.log(resList)
            }
        })
    }

    return resList;
}

export default useRestaurantData;