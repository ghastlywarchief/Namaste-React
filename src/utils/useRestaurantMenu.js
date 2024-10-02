import { useEffect, useState } from "react";
import { RES_MENU_URL1, RES_MENU_URL2 } from "../utils/links";


const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState([]);
    const [menuList, setMenuList] = useState([]);
    const [menuItems, setMenuItems] = useState([]);


    useEffect(() => {
        fetchMenuList();
    }, []);

    async function fetchMenuList(){
        const menu = await fetch(RES_MENU_URL1 + resId + RES_MENU_URL2);
        //console.log(menu);
        const jsonMenu = await menu.json();
        //console.log(jsonMenu);
        //console.log(jsonMenu?.data?.cards[2]?.card?.card?.info);
        setResInfo(jsonMenu?.data?.cards[2]?.card?.card?.info);
        console.log(jsonMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        //setMenuList(jsonMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        //jsonMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((c) => console.log(c?.card?.card?.["@type"]));
        setMenuItems(jsonMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
        console.log(menuItems);
    }

    return [resInfo, menuItems];

}

export default useRestaurantMenu;