import ResCard from "./ResCard";
import {restaurantList} from '../util/MockData'
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../util/Constant";
import Shimmer from "./Shimmer";

const Body = () => {
    //state variable
    const [resList, setResList] = useState([]);

    // useEffect hook [arguments - callback function and dependency array]
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();

        updatedResList = await updateRestaurantList(json);
        setResList(updatedResList);
    }

    const updateRestaurantList = (jsonData) => {
        for (let i =0; i < jsonData?.data?.cards.length; i++) {
            let resListFromSwiggy = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            // return resListFromSwiggy ? resListFromSwiggy : false
            if(resListFromSwiggy !== undefined) {
                return resListFromSwiggy
            }
        };
    }

    return resList.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = resList.filter(
                        (res) => res.info.avgRating > 4
                    )
                    setResList(filteredList);
                }}>See Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {resList.map( (res) => {
                    return <ResCard key={res?.info?.id} resData={...res?.info}/>
                })}
            </div>
        </div>
    );
}


export default Body