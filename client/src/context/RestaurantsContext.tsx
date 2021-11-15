import { useState, createContext } from "react";
import { RestaurantContextState, restaurant } from "./types";

const contextDefaultValues: RestaurantContextState = {
  restaurants: [{id:0,name:'',location:'',price_range:0}],
  setRestaurants: () => {},
  selectedRestaurant: {id:0,name:'',location:'',price_range:0},
  setSelectedRestaurant: () => {},
  addRestaurants: () => {}
};

export const RestaurantsContext = createContext<RestaurantContextState>(
  contextDefaultValues
);

const RestaurantsContextProvider: React.FC = ({ children }) => {

  const [restaurants, setRestaurants] = useState<restaurant[]>(contextDefaultValues.restaurants);
  const [selectedRestaurant, setSelectedRestaurant] = useState<restaurant>(contextDefaultValues.selectedRestaurant);
  
  const addRestaurants = (newRestaurant: restaurant) => setRestaurants((restaurants) => [...restaurants, newRestaurant]);
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        selectedRestaurant,
        setSelectedRestaurant,
        addRestaurants,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

export default RestaurantsContextProvider;
