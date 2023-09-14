import {CDN_URL} from '../util/Constant'

const ResCard = (props) => {
    const { name, deliveryTime, costForTwo, cloudinaryImageId, avgRating, cuisines} = props?.resData;
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{avgRating} stars</h4>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{costForTwo / 100} For Two</h4>
        </div>
    );
}

export default ResCard