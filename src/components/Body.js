import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable
  const [listOFRestaurants, setlistOFRestaurants] = useState([]);

  const [filteredRestuarants, setFilteredRestuarants] = useState([]);

  // Whenever state variable updates, react triggers a reconciliation cycle ( re-renders the component)
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5282286&lng=73.7778077&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setlistOFRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestuarants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Connditional Redering
  // if (listOFRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOFRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (searchText.length > 0) {
                const filteredList = listOFRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestuarants(filteredList);
              } else {
                setFilteredRestuarants(listOFRestaurants);
              }
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              if (searchText.length > 0) {
                const filteredList = listOFRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestuarants(filteredList);
              } else {
                setFilteredRestuarants(listOFRestaurants);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOFRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestuarants(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
        <button
          className="show-all-btn"
          onClick={() => {
            setFilteredRestuarants(listOFRestaurants);
          }}
        >
          Show All
        </button>
      </div>
      <div className="res-container">
        {filteredRestuarants.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
