import { useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
const RestaurantTool = () => {
    const [name, setName] = useState<string>('')
    const { addRestaurants } = useContext(RestaurantsContext);
    const [location, setLocation] = useState<string>("");
    const [priceRange, setPriceRange] = useState<string>("Price Range");
    
    let navigate = useNavigate();
    /*const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };*/
    const addSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await RestaurantFinder.post("/", {
          name,
          location,
          price_range: priceRange,
        });
        console.log(response.data.data);
        addRestaurants(response.data.data.restaurant);
        setName("")
      } catch (err) {
        console.log(err);
      }
    };
    const searchSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            //const response = await RestaurantFinder.searchRestaurants(response.data.data.restaurant);
            //console.log(response.data.data);
            setName("")
            //navigate(`/api/v1/restaurants/${response.data.data}`);
        } catch (err) {
            console.log(err);
        }
    };
    const listSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="mb-4">
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" 
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" 
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="location"/>
                    </div>
                    <div className="col">
                        <select
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="custom-select my-1 mr-sm-2"
                        >
                        <option disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <button
                        onClick={addSubmit}
                        type="submit"
                        className="btn btn-primary"
                    >
                        Add
                    </button>
                    <button
                        onClick={searchSubmit}
                        type="submit"
                        className="btn btn-primary"
                    >
                        Search
                    </button>
                    <button
                        onClick={listSubmit}
                        type="submit"
                        className="btn btn-primary"
                    >
                        List All
                    </button>
                    

                </div>
            </form>            
        </div>
    )
}

export default RestaurantTool
