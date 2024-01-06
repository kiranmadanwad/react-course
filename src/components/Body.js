import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable
  const [listOFRestaurants, setlistOFRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOFRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setlistOFRestaurants(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
        <button
          className="show-all-btn"
          onClick={() => {
            setlistOFRestaurants(resList);
          }}
        >
          Show All
        </button>
      </div>
      <div className="res-container">
        {listOFRestaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
