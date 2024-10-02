import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import AccordionItems from "./AccordionItems";
import { useState } from "react";
import { RES_MENU_ITEM_IMG_URL } from "../utils/links";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const itemsArr = useRestaurantMenu(resId);
    const resInfo = itemsArr[0];
    const menuList = itemsArr[1];
    const [showMenuItems, setShowMenuItems] = useState(false);

    const getBoolValue = () => {
        console.log(showMenuItems);
        return setShowMenuItems(!showMenuItems);
    }
    console.log(menuList)

    
    // return(
    //     <div className="flex justify-center bg-neutral-300 m-2">
    //         <div className="m-2 w-1/2 text-center">
    //             <h1 className="p-6 text-6xl font-bold">{resInfo.name}</h1>
    //             <div className="border border-black rounded p-10 m-8 flex justify-between shadow-xl bg-orange-200">
    //                 <h3 className="text-2xl m-2 font-bold">{resInfo?.avgRating + " stars"}</h3>
    //                 <h3 className="text-2xl m-2 font-bold">{resInfo?.costForTwoMessage}</h3>
    //                 <h3 className="text-2xl m-2 font-bold">{resInfo?.cuisines?.join(",")}</h3>
    //                 <h3 className="text-2xl m-2 font-bold">{resInfo?.sla?.deliveryTime + " mins"}</h3>
    //             </div>
    //             <div className="p-6 m-8">
    //                 <h2 className="text-5xl p-3 m-2">Menu</h2>
    //                 <span className="">{(menuList)?(menuList.map((category) => ((category?.card?.card?.itemCards&&category?.card?.card?.title)?(<div className="border border-black rounded m-4 p-2 shadow-lg bg-orange-200"><h3 className="text-4xl m-3 font-bold ">{category?.card?.card?.title}</h3>{category?.card?.card?.itemCards.map((item) => <ul className="text-3xl" key={item?.card?.info?.id}>{(item?.card?.info?.name&&item?.card?.info?.price/100)?(<li>{item?.card?.info?.name} ---- {"Rs " + item?.card?.info?.price/100 + "/-"}</li>):(<li></li>)}</ul>)}</div>):<ul></ul>))):<ul></ul>}</span>
    //             </div>  
    //         </div>
    //     </div>
        
    // )
    
    return(
        <div>
            <div className="flex justify-center bg-neutral-300 m-2">
                <div className="m-2 w-1/2 text-center">
                    <h1 className="p-6 text-6xl font-bold">{resInfo.name}</h1>
                    <div className="border border-black rounded p-10 m-8 flex justify-between shadow-xl bg-orange-200">
                        <h3 className="text-2xl m-2 font-bold">{resInfo?.avgRating + " stars"}</h3>
                        <h3 className="text-2xl m-2 font-bold">{resInfo?.costForTwoMessage}</h3>
                        <h3 className="text-2xl m-2 font-bold">{resInfo?.cuisines?.join(",")}</h3>
                        <h3 className="text-2xl m-2 font-bold">{resInfo?.sla?.deliveryTime + " mins"}</h3>
                    </div>
                    <div className="p-6 m-8">
                        <h2 className="text-5xl p-3 m-2">Menu</h2>
                        <AccordionItems res={menuList} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;