import {CDN_URL} from '../util/Constant'

const ResCard = (props) => {
    const { name, deliveryTime, costForTwo, cloudinaryImageId, avgRating, cuisines} = props?.resData;
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId}/>
            <p>{name}</p>
            <p>{avgRating} stars</p>
            <p>{cuisines?.join(", ")}</p>
            <p>{deliveryTime} minutes</p>
            <p>{costForTwo}</p>
        </div>
    );
}

export default ResCard