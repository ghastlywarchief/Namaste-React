import { useDispatch } from "react-redux";
import { RES_MENU_ITEM_IMG_URL } from "../utils/links";
import { addItem } from "../utils/CartSlice";

const MenuItemList = (props) => {
    const {itemCards} = props;
    const dispatch = useDispatch()
    //console.log(itemCards);
    const handleClick = (item) => {
        dispatch(addItem(item));
    }

    return(
        <div className="m-4">
            {itemCards.map((item) => (
                <div key={item.card.info.id} className="border-b border-gray-500 m-2">
                    <div className="flex justify-between items-center">
                        <span className=" text-2xl text-left w-9/12">
                            <h1 >{item?.card?.info?.name}</h1>
                            <p className="text-xl">{item?.card?.info?.description}</p>
                        </span>
                        <span className="w-3/12 relative">
                            <img className="float-right relative inline-block" src={RES_MENU_ITEM_IMG_URL + item?.card?.info?.imageId}></img>
                            <button className="bg-black text-white rounded-lg p-3 absolute left-16" onClick={() => handleClick(item?.card?.info?.name)}>
                                Add +
                            </button>
                        </span>
                    </div>
                    
                    <p className="text-2xl mb-4 text-left">₹ {(item?.card?.info?.price) ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</p>
                </div>
            ))}
        </div>
    )
}

export default MenuItemList;