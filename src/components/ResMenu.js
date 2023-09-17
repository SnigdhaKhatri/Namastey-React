import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { MENU_API } from "../util/Constant";
import { useParams } from "react-router-dom";

const ResMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId }  = useParams();

    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch( MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    if(resInfo === null) {
        return <Shimmer/>
    }

    const { name, cuisines, avgRating, costForTwoMessage  } = resInfo?.cards[0]?.card?.card?.info;
    // const { header } = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[1]?.info;
    const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)

    return (
        <div className="res-menu">
            <h1>{name}</h1>
            <p> {cuisines.join(", ")} | {costForTwoMessage}</p>
            <p> {avgRating} stars</p>
            {/* <div className="offers">
                <h5>{header}</h5>
            </div> */}
            <div className="menu">
                <h2>~Menu~</h2>
                <div className="menuCategoryCard">
                    {cards.map((menuObj) => {
                        return( 
                            <>
                                <h5 key={menuObj?.card?.card?.title}>{menuObj?.card?.card?.title}</h5> 
                                <ul>
                                    {menuObj?.card?.card?.itemCards?.map((item) => {
                                        return (
                                            <div className="menuItemCard">
                                                <li  key={item?.card?.info?.name}>{item?.card?.info?.name}</li>
                                            </div>
                                        )
                                    })}
                                </ul>
                            </>
                        )
                    })}
                    
                </div>
                
            </div>
        </div>
    )
}

export default ResMenu