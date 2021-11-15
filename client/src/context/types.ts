export interface restaurant {
    id: number,
    name: string,
    location: string,
    price_range: number,
    count?: number
}
export type RestaurantContextState = {
    //restaurant has to be object to have id, name, etc
    restaurants: restaurant[];
    setRestaurants: (name: restaurant[]) => void;
    selectedRestaurant: restaurant;
    setSelectedRestaurant: (name: restaurant) => void;
    addRestaurants: (name: restaurant) => void;
};


  