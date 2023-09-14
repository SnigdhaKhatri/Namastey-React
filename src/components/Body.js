import ResCard from "./ResCard";
import {restaurantList} from '../util/MockData'
import { useState } from "react";

const Body = () => {
    //state variable
    const [resList, setResList] = useState(restaurantList);

    return (
        <div className="body">
            <h4 className="search">Search</h4>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = resList.filter(
                        (res) => res.data.avgRating > 4
                    )
                    setResList(filteredList);
                }}>See Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {resList.map( (res) => {
                    return <ResCard key={res?.data?.id} resData={res.data}/>
                })}
            </div>
        </div>
    );
}


export default Body