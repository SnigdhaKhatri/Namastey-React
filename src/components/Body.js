import ResCard from "./ResCard";
import {restaurantList} from '../util/MockData'
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../util/Constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    //state variable
    const [resList, setResList] = useState([]);
    //search functionality
    const [searchInput, setSearchInput] = useState("");
    const [filteredResList, setFilteredResList] = useState([]);

    // useEffect hook [arguments - callback function and dependency array]
    // called after render
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();

        updatedResList = await updateRestaurantList(json);
        setResList(updatedResList);
        setFilteredResList(updatedResList);
    }

    const updateRestaurantList = (jsonData) => {
        for (let i =0; i < jsonData?.data?.cards.length; i++) {
            let resListFromSwiggy = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (resListFromSwiggy !== undefined) {
                return resListFromSwiggy
            }
        };
    }

    return resList.length === 0 ? <Shimmer/> : (
        <div className="body">

            <div className="options-container">
                <div className="search-panel">
                    <input type="text" className="searchInput" value={searchInput} placeholder="Search....." onChange={(e)=>{setSearchInput(e.target.value)}}/>
                    <button className="search-btn" onClick={()=>{
                        const searchedResList = resList.filter((rec)=>{
                            return rec?.info?.name?.toLowerCase().includes(searchInput.toLowerCase());
                        })
                        setFilteredResList(searchedResList);
                    }}>Search</button>
                </div>

                <div className="filter">
                    <button className="filter-btn" onClick={()=>{
                        const filteredList = resList.filter(
                            (res) => res.info.avgRating > 4
                        )
                        setFilteredResList(filteredList);
                    }}>See Top Rated Restaurants</button>
                    <button className="seeAll-btn" onClick={()=>{
                        setFilteredResList(resList);
                    }}>See All Restaurants</button>
                </div>
            </div>

            <div className="res-container">
                {filteredResList.map( (res) => (
                        <Link key={res?.info?.id} to={"/restaurants/" + res?.info?.id}><ResCard resData={...res?.info}/></Link>
                    )
                )}
            </div>
        </div>
    );
}


export default Body