import { useState } from "react";

const SearchBar = () => {

    const [text, onTextChanged] = useState("");
    console.log(text);
    return (
        <div className="search">
            <input className="inputbox" value={text} onChange={(i) => {
                onTextChanged(i.target.value);
            }}></input>
            <button className="search-btn" onClick={() => {
                // resData.filter((text) => {
                //     resData.indexOf.name.toLowerCase().includes(text.toLowerCase());
                // });
            }}>Search</button>
        </div>
    )
}

export default SearchBar;