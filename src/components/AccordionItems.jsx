import { RES_MENU_ITEM_IMG_URL } from "../utils/links";
import { useState } from "react";
import MenuItemList from "./MenuItemList";
import AccordionMenuHeader from "./AccordionMenuHeader";

const AccordionItems = (props) => {
    const {res} = props;
    const [activeIndex, setActiveIndex] = useState(null);
    //console.log(res);
    
    return (
        <div className="p-3 mb-2  bg-orange-100">
           <div>
                {res.map((category, index) => (
                    <div key={category?.card?.card?.title}>
                        <AccordionMenuHeader category={category?.card?.card} setActiveIndex={setActiveIndex} activeIndex={activeIndex} index={index}/>
                    </div>
                ))}
           </div>
        </div>
    );
}

export default AccordionItems;
