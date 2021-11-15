import Header from "../components/Header"
import RestaurantList from "../components/RestaurantList"
import RestaurantTool from "../components/RestaurantTool"
const RestaurantListView = () => {
    return (
        <div className='container'>
            <Header title='Restaurant Finder'/>
            <RestaurantTool />
            <RestaurantList />
            
        </div>
    )
}

export default RestaurantListView
