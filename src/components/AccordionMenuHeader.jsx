import { useState } from 'react';
import MenuItemList from './MenuItemList';

const AccordionMenuHeader = (props) => {

    const {category, setActiveIndex, activeIndex,  index} = props;
    //console.log(activeIndex + " " + index)
    const {title, itemCards} = category;

    const handleClick = () => {
        if(index !== activeIndex)
            setActiveIndex(index);
        else
            setActiveIndex(null);
    }

    return (
        <div>
            <div className="flex justify-between border-t border-b border-gray-500 p-8 text-xl cursor-pointer" onClick={handleClick}>
                <span className="font-bold">{title} ({itemCards.length})</span>
                <span>v</span>
            </div>
            <div>
                {(activeIndex === index) && <MenuItemList itemCards={itemCards} />}
            </div>
        </div>
    )
}

export default AccordionMenuHeader;